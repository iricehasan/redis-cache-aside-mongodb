const mongoose = require("mongoose");
const redis = require("redis");

const exec = mongoose.Query.prototype.exec;
const redisClient = redis.createClient("redis://127.0.0.1:6379");

redisClient.on("error", (err) => console.error("Redis Client Error", err));
redisClient.connect();

mongoose.Query.prototype.exec = async function () {
  // creating a unique key with user id and collection name
  const key = JSON.stringify(
    Object.assign({}, this.getQuery(), {
      collection: this.mongooseCollection.name,
    }),
  );

  const cachedValue = await redisClient.get(key);

  if (cachedValue) {
    // this is for hydrating mongoose model
    // taking the object returned from JSON.parse and
    // using Query.model (this refers to Query) for Mongoose document methods
    const doc = new this.model(JSON.parse(cachedValue));

    return doc;
  }

  const result = await exec.apply(this, arguments);

  client.set(key, JSON.stringify(result));
  return result;
};

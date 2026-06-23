const mongoose = require("mongoose");

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.exec = function () {
  console.log(this.getQuery());
  console.log(this.mongooseCollection.name);

  // creating a unique key with user id and collection name
  Object.assign({}, this.getQuery, {
    collection: this.mongooseCollection.name,
  });
  return exec.apply(this, arguments);
};

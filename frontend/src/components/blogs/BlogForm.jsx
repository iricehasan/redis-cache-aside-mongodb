// BlogForm shows a form for a user to add input
import _ from 'lodash';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BlogField from './BlogField';
import formFields from './formFields';

function validate(values) {
  const errors = {};

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}

const BlogForm = ({ values, onChange, onBlogSubmit }) => {
  const [submitted, setSubmitted] = useState(false);
  const errors = validate(values);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitted(true);

    if (Object.keys(errors).length === 0) {
      onBlogSubmit();
    }
  };

  const renderFields = () => {
    return _.map(formFields, ({ label, name }) => {
      return (
        <BlogField
          key={name}
          name={name}
          label={label}
          value={values[name]}
          error={submitted ? errors[name] : undefined}
          onChange={event => onChange(name, event.target.value)}
        />
      );
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {renderFields()}
        <Link to="/blogs" className="red btn-flat white-text">
          Cancel
        </Link>
        <button type="submit" className="teal btn-flat right white-text">
          Next
          <i className="material-icons right">done</i>
        </button>
      </form>
    </div>
  );
};

export default BlogForm;

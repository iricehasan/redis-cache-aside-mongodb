// BlogNew shows BlogForm and BlogFormReview
import React, { useState } from 'react';
import BlogForm from './BlogForm';
import BlogFormReview from './BlogFormReview';
import formFields from './formFields';

const initialValues = formFields.reduce((acc, { name }) => {
  acc[name] = '';
  return acc;
}, {});

const BlogNew = () => {
  const [values, setValues] = useState(initialValues);
  const [showFormReview, setShowFormReview] = useState(false);

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  if (showFormReview) {
    return (
      <BlogFormReview
        values={values}
        onCancel={() => setShowFormReview(false)}
      />
    );
  }

  return (
    <BlogForm
      values={values}
      onChange={handleChange}
      onBlogSubmit={() => setShowFormReview(true)}
    />
  );
};

export default BlogNew;

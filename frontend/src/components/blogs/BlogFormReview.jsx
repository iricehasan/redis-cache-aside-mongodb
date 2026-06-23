// BlogFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import formFields from './formFields';
import { submitBlog } from '../../actions';

const BlogFormReview = ({ values, onCancel }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const renderFields = () => {
    return _.map(formFields, ({ name, label }) => {
      return (
        <div key={name}>
          <label>{label}</label>
          <div>{values[name]}</div>
        </div>
      );
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    dispatch(submitBlog(values, navigate));
  };

  return (
    <form onSubmit={onSubmit}>
      <h5>Please confirm your entries</h5>
      {renderFields()}

      <div>
        <button
          type="button"
          className="yellow darken-3 white-text btn-flat"
          onClick={onCancel}
        >
          Back
        </button>
        <button className="green btn-flat right white-text">
          Save Blog
          <i className="material-icons right">email</i>
        </button>
      </div>
    </form>
  );
};

export default BlogFormReview;

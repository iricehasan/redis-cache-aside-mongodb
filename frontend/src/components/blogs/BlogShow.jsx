import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchBlog } from '../../actions';

const BlogShow = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const blog = useSelector(state => state.blogs[_id]);

  useEffect(() => {
    dispatch(fetchBlog(_id));
  }, [dispatch, _id]);

  if (!blog) {
    return '';
  }

  const { title, content } = blog;

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default BlogShow;

import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = ({comment: {text, username}}) => {
  return (
    <div className="comment-text">
      <span className="comment">{text}</span>
      <span className="user">-{username}</span>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;

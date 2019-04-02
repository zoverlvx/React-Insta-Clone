import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = ({comment}) => {
  return (
    <div className="comment-text">
      <span className="comment">{comment.text}</span>{' '}
      <span className="user">-{comment.username}</span>
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

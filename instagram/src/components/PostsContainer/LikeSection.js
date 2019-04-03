import React from 'react';
import "react-fontawesome";

const LikeSection = props => {
  return [
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper"
          onClick={props.incrementLike}
	  >
        <i className="fa fa-heart" />
      </div>
      <div className="like-section-wrapper">
        <i className="fa fa-comment" />
      </div>
    </div>,
    <div className="like-section" key="likes-container">
      <div className="like-section-wrapper">{props.likes}</div>
    </div>
  ];
};

export default LikeSection;

import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../CommentSection/Comment";

const LikeSectionDiv = styled.div`
	height: 10px;
	width: 10px;
	margin: 10px;
	padding-bottom: 15px;
`;

const LikeSection = props => {
	console.log("Here are props on likesection", props)
  return [
    <FlexWrapper
      key="likes-icons-container"
	  comment	
    >
      <LikeSectionDiv
          onClick={props.incrementLike}
	  >
        <i className="fa fa-heart" />
      </LikeSectionDiv>
      <LikeSectionDiv>
        <i className="fa fa-comment" />
      </LikeSectionDiv>
    </FlexWrapper>,
    <FlexWrapper key="likes-container" comment>
      <LikeSectionDiv>
		{props.likes}
	  </LikeSectionDiv>
	</FlexWrapper>
  ];
};

export default LikeSection;

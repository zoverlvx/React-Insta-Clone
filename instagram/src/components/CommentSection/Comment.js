import React from 'react';
import PropTypes from 'prop-types';
import {UserName} from "../PostsContainer/PostHeader";
import styled, {css} from "styled-components";

export const FlexWrapper = styled.div`
	display: flex;
	${props => 
		props && css`
			line-height: 8px;
	`};
`;

const CommentParagraph = styled.p`
	font-weight: 400;
	font-size: 0.8em;
	padding: 0 5px;
`;

const Comment = ({comment: {text, username}}) => {
	return (
		<FlexWrapper>
			<UserName>{username}</UserName>
			<CommentParagraph>{text}</CommentParagraph>
		</FlexWrapper>
	);
}

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;

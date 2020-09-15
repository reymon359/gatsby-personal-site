import React from 'react';
import Comments from './Comments';

interface CommentsContainerProps {
  commentsUrl: string;
}

const CommentsContainer: React.FC<CommentsContainerProps> = ({
  commentsUrl = 'https://github.com/reymon359/gatsby-personal-site/labels/Post%20Comments%20%F0%9F%92%AC'
}) => {
  return <Comments url={commentsUrl} />;
};

export default CommentsContainer;

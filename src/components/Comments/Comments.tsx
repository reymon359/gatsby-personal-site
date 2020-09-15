import React from 'react';

interface CommentsProps {
  url: string;
}

const Comments: React.FC<CommentsProps> = ({url}) => {
  return <h1>{url}</h1>;
};

export default Comments;

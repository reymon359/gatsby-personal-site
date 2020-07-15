import React from 'react';
import {Link} from 'gatsby';

interface Post {
  node: {
    excerpt: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      date: string;
      title: string;
    };
  };
}

interface PostsListProps {
  readonly posts: Post[];
}

export const PostsList: React.FC<PostsListProps> = ({posts}) => {
  return (
    <>
      {posts.map(({node}) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <div key={node.fields.slug}>
            <h3>
              <Link to={node.fields.slug}>{title}</Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p dangerouslySetInnerHTML={{__html: node.excerpt}} />
          </div>
        );
      })}
    </>
  );
};

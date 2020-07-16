interface Post {
  node: {
    id: string;
    excerpt: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      date: string;
      title: string;
      thumbnail: string;
      tags: string[];
    };
  };
}

export const getSimplifiedPosts = (posts: Post[], options = {}) => {
  return posts.map(post => ({
    id: post.node.id,
    date: post.node.frontmatter.date,
    slug: post.node.fields.slug,
    tags: post.node.frontmatter.tags,
    title: post.node.frontmatter.title,
    thumbnail: post.node.frontmatter.thumbnail
    // ...(options.thumbnails && {
    //   thumbnail: post.node.frontmatter.thumbnail.childImageSharp.fixed
    // })
  }));
};

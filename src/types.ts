export interface Work {
  node: {
    id: string;
    excerpt: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      date: string;
      title: string;
      description: string;
      tags: string[];
      type: string;
      url: string;
      featuredImage: any;
    };
  };
}

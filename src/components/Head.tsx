import React from 'react';
import {Helmet} from 'react-helmet';
import {StaticQuery, graphql} from 'gatsby';

type StaticQueryData = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      googleSiteVerification: string;
      author: {
        name: string;
      };
    };
  };
};

interface HeadProps {
  readonly title: string;
  readonly description?: string;
  readonly image?: string;
  readonly lang?: string;
  readonly keywords?: string[];
}

const Head: React.FC<HeadProps> = ({
  title,
  description,
  image,
  lang,
  keywords
}) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author {
              name
            }
          }
        }
      }
    `}
    render={(data: StaticQueryData): React.ReactElement | null => {
      const metaDescription = description || data.site.siteMetadata.description;
      lang = lang || 'en';
      keywords = keywords || [];
      return (
        <Helmet
          htmlAttributes={{
            lang
          }}
          title={title}
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          meta={[
            {
              name: `description`,
              content: metaDescription
            },
            {
              property: `og:title`,
              content: title
            },
            {
              property: `og:description`,
              content: metaDescription
            },
            {
              property: `og:image`,
              content: image
            },
            {
              property: `og:type`,
              content: `website`
            },
            {
              name: `twitter:card`,
              content: `summary`
            },
            {
              name: `twitter:creator`,
              content: data.site.siteMetadata.author.name
            },
            {
              name: `twitter:title`,
              content: title
            },
            {
              name: `twitter:description`,
              content: metaDescription
            },
            {
              name: `twitter:image`,
              content: image
            },
            {
              name: `google-site-verification`,
              content: data.site.siteMetadata.googleSiteVerification
            }
          ].concat(
            keywords.length > 0
              ? {
                  name: `keywords`,
                  content: keywords.join(`, `)
                }
              : []
          )}
        />
      );
    }}
  />
);

export default Head;

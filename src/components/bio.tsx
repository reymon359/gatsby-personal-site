import React from 'react';
import {StaticQuery, graphql} from 'gatsby';

type StaticQueryData = {
  site: {
    siteMetadata: {
      description: string;
      social: {
        twitter: string;
      };
    };
  };
};

const Bio: React.FC = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            description
            social {
              twitter
            }
          }
        }
      }
    `}
    render={(data: StaticQueryData): React.ReactElement | null => {
      const {description, social} = data.site.siteMetadata;
      return (
        <div>
          <h1>{description}</h1>
          <p>
            By Ramón Morcillo
            <br />
            <a href={social.twitter}>Twitter</a>
          </p>
        </div>
      );
    }}
  />
);

export default Bio;

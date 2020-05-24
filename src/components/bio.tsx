import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import {string} from 'prop-types';

type StaticQueryData = {
  site: {
    siteMetadata: {
      description: string;
      social: {
        name: string;
        socialUrl: string;
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
              name
              socialUrl
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
          </p>
        </div>
      );
    }}
  />
);

export default Bio;

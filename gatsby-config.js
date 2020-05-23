/* eslint-disable @typescript-eslint/camelcase */
'use strict';

require('dotenv').config({
  path: `.env`
});

module.exports = {
  siteMetadata: {
    title: `ramonmorcillo.com`,
    description: `My personal site made with Gatsby.js`,
    siteUrl: `https://ramonmorcillo.com`,
    googleSiteVerification: process.env.GOOGLE_SITE_VERIFICATION,
    author: {
      name: `Ramon Morcillo`,
      intro: `Hi, I am Ramon Morcillo, a software engineer based in Madrid, Spain`,
      url: `https://ramonmorcillo.com`,
      email: `hey@ramonmorcillo.com`
    },
    social: {
      twitter: `https://twitter.com/reymon359`,
      github: `https://github.com/reymon359`,
      codepen: `https://codepen.io/reymon359`,
      linkedin: `https://www.linkedin.com/in/ramon-morcillo/`
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1280
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://ramonmorcillo.com`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ramon Morcillo`,
        shortName: `ramonmorcillo.com`,
        startUrl: `/`,
        backgroundColor: `#663399`,
        themeColor: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-json`,
    `gatsby-plugin-react-svg`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};

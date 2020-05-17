module.exports = {
  siteMetadata: {
    title: `ramonmorcillo.com`,
    description: `My personal site made with Gatsby.js`,
    siteUrl: 'https://ramonmorcillo.com',
    author: {
      name: 'Ramon Morcillo',
      intro: `Hi, I am Ramon Morcillo, a software engineer based in Madrid, Spain`,
      url: 'https://ramonmorcillo.com',
      email: 'hey@ramonmorcillo.com'
    },
    social: {
      twitter: 'https://twitter.com/reymon359',
      github: 'https://github.com/reymon359',
      codepen: 'https://codepen.io/reymon359',
      linkedin: 'https://www.linkedin.com/in/ramon-morcillo/'
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        shortName: `starter`,
        startUrl: `/`,
        backgroundColor: `#663399`,
        themeColor: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-json',
    'gatsby-plugin-react-svg',
    'gatsby-plugin-styled-components'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};

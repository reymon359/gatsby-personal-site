const {createFilePath} = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.createPages = ({graphql, actions}) => {
  // Redirects
  const {createRedirect} = actions
  createRedirect({
    fromPath: '/map',
    toPath:
      'https://www.google.com/maps/d/viewer?mid=1O0IseePWpXqpT0v6srZyZMRDAvHhpWDg'
  })

  return graphql(
    `
      {
        allMarkdownRemark(
          sort: {fields: [frontmatter___date], order: DESC}
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
                title
                type
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Get the templates
    const postTemplate = path.resolve(`./src/templates/post.tsx`)
    const tagTemplate = path.resolve('./src/templates/tag.tsx')

    // Create post pages
    const works = result.data.allMarkdownRemark.edges
    const posts = works.filter(work => work.node.frontmatter.type === 'post')
    const projects = works.filter(
      work => work.node.frontmatter.type === 'project'
    )
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      actions.createPage({
        path: post.node.fields.slug,
        component: postTemplate,
        context: {
          slug: post.node.fields.slug,
          previous,
          next
        }
      })
    })

    // Iterate through each post, putting all found tags into `tags`
    let tags = []
    works.forEach(work => {
      if (work.node.frontmatter.tags) {
        tags = tags.concat(work.node.frontmatter.tags)
      }
    })
    const uniqTags = [...new Set(tags)]

    // Create tag pages
    uniqTags.forEach(tag => {
      if (!tag) return
      actions.createPage({
        path: `/tags/${tag}/`,
        component: tagTemplate,
        context: {
          tag
        }
      })
    })
  })
}

exports.onCreateNode = ({node, actions, getNode}) => {
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({node, getNode})
    actions.createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}

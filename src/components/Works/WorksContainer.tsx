import React from 'react'
import Works from './Works'
import {Work} from '../../types'
import {graphql, useStaticQuery} from 'gatsby'

const WorksContainer: React.FC = () => {
  const data = useStaticQuery(graphql`
    query WorksQuery {
      allMarkdownRemark(
        filter: {frontmatter: {published: {ne: false}}}
        sort: {fields: [frontmatter___date], order: DESC}
      ) {
        edges {
          node {
            id
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMM DD, YYYY")
              title
              description
              tags
              type
              url
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.edges
    .filter((work: Work) => work.node.frontmatter.type === 'post')
    .slice(0, 3)

  const projects = data.allMarkdownRemark.edges
    .filter((work: Work) => work.node.frontmatter.type === 'project')
    .slice(0, 3)

  return <Works posts={posts} projects={projects} />
}

export default WorksContainer

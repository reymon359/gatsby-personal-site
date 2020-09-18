import React from 'react'
import Projects from './Projects'
import {Work} from '../../types'
import {graphql, useStaticQuery} from 'gatsby'

const ProjectsContainer: React.FC = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
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

  const projects: Work[] = data.allMarkdownRemark.edges.filter(
    (work: Work) => work.node.frontmatter.type === 'project'
  )

  return <Projects projects={projects} />
}

export default ProjectsContainer

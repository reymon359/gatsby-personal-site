import React from 'react'
import Tags from './Tags'
import {graphql, useStaticQuery} from 'gatsby'
import {Tag} from '../../types'

const TagsContainer: React.FC = () => {
  const data = useStaticQuery(graphql`
    query TagsQuery {
      allMarkdownRemark(filter: {frontmatter: {published: {ne: false}}}) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  const tags: Tag[] =
    data.allMarkdownRemark &&
    data.allMarkdownRemark.group.sort(
      (a: Tag, b: Tag) => b.totalCount - a.totalCount
    )

  return <Tags tags={tags} />
}

export default TagsContainer

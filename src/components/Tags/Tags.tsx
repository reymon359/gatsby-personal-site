import React from 'react'
import {Tag as TagInterface} from '../../types'
import {Description, Header, ItemTags, Tag, Title} from '../../styles'

interface TagsProps {
  tags: TagInterface[]
}

const Tags: React.FC<TagsProps> = ({tags}) => {
  return (
    <>
      <Header>
        <Title>All tags</Title>
        <Description>Tags from the works</Description>
      </Header>
      <article>
        <ItemTags>
          {tags &&
            tags.map(
              tag =>
                tag && (
                  <Tag key={tag.fieldValue} to={`/tags/${tag.fieldValue}/`}>
                    {tag.fieldValue} -&nbsp;
                    <small>{tag.totalCount}</small>
                  </Tag>
                )
            )}
        </ItemTags>
      </article>
    </>
  )
}

export default Tags

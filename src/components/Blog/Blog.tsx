import React from 'react'
import {Description, Header, Section, SectionBody, Title} from '../../styles'
import {ContentListContainer} from '../ContentList'
import {Work} from '../../types'

interface BlogProps {
  posts: Work[]
}

const Blog: React.FC<BlogProps> = ({posts}) => {
  return (
    <>
      <Header>
        <Title>Blog</Title>
        <Description>What I write about</Description>
      </Header>
      <Section>
        <SectionBody>
          <ContentListContainer content={posts} />
        </SectionBody>
      </Section>
    </>
  )
}

export default Blog

import React from 'react'
import {Description, Header, Section, SectionBody, Title} from '../../styles'
import {ContentListContainer} from '../ContentList'
import {Work} from '../../types'
import styled from 'styled-components'
import {Link} from 'gatsby'

const SectionHeader = styled.div`
  padding-left: 1rem;
  display: flex;
  align-items: center;
`

const SectionTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.mediumLarge};
  font-weight: ${props => props.theme.fontWeights.regular};
`

const MoreLink = styled(Link)`
  color: ${props => props.theme.colors.light};
  background-color: ${props => props.theme.colors.light + '40'};
  font-size: ${props => props.theme.fontSizes.normal};
  font-weight: ${props => props.theme.fontWeights.bold};
  border-radius: 5px;
  box-sizing: border-box;
  text-decoration: none;
  display: block;
  padding: 0.4rem 0.6rem;
  border-bottom: 0;
  white-space: nowrap;
  line-height: 1;
  margin: 0.2rem 0 0.2rem 1rem;
  transition: 0.4s ease;

  &:hover {
    color: ${props => props.theme.colors.darkest};
    background-color: ${props => props.theme.colors.light};
    border-bottom: none;
  }
`

interface WorksProps {
  posts: Work[]
  projects: Work[]
}

const Works: React.FC<WorksProps> = ({posts, projects}) => (
  <>
    <Header>
      <Title>Works</Title>
      <Description>What I do and write about</Description>
    </Header>
    <Section>
      <SectionHeader>
        <SectionTitle>Latest posts</SectionTitle>
        <MoreLink to="/blog">All posts</MoreLink>
        <MoreLink to="/tags">All tags</MoreLink>
      </SectionHeader>
      <SectionBody>
        <ContentListContainer content={posts} />
      </SectionBody>
    </Section>
    <Section>
      <SectionHeader>
        <SectionTitle>Latest projects</SectionTitle>
        <MoreLink to="/projects">All projects</MoreLink>
        <MoreLink to="/tags">All tags</MoreLink>
      </SectionHeader>
      <SectionBody>
        <ContentListContainer content={projects} />
      </SectionBody>
    </Section>
  </>
)

export default Works

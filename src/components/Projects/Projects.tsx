import React from 'react'
import {Description, Header, Section, SectionBody, Title} from '../../styles'
import {ContentListContainer} from '../ContentList'
import {Work} from '../../types'

interface ProjectsProps {
  projects: Work[]
}

const Projects: React.FC<ProjectsProps> = ({projects}) => (
  <>
    <Header>
      <Title>Projects</Title>
      <Description>What I do or have done</Description>
    </Header>
    <Section>
      <SectionBody>
        <ContentListContainer content={projects} />
      </SectionBody>
    </Section>
  </>
)

export default Projects

// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Container } from './ExperienceStyle'

const ExperinceBar: React.FC = () => {
  return (
    <Container>
      <header className="experience-bar">
        <span>0 xp</span>
        <div></div>
        <span>600 xp</span>
      </header>
    </Container>
  )
}

export default ExperinceBar

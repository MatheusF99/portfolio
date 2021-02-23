// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Container } from './ExperienceStyle'

const ExperinceBar: React.FC = () => {
  return (
    <Container>
      <header className="experience-bar">
        <span>0 xp</span>
        <div>
          <div style={{ width: '50%' }}></div>
          <span className="current-experience" style={{ left: '50%' }}>
            300 xp
          </span>
        </div>
        <span>600 xp</span>
      </header>
    </Container>
  )
}

export default ExperinceBar

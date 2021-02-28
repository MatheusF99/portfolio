// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Container } from './styleLanding'

import LogoIcon from '../../assets/logo.svg'

const Landing: React.FC = () => {
  return (
    <Container>
      <header>
        <LogoIcon />

        <div className="toggle-Button">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
      </header>
    </Container>
  )
}

export default Landing

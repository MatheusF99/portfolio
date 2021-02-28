// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Container } from './styleLanding'

import LogoIcon from '../../assets/logo.svg'
import BackgroundImage from '../../assets/Background-big.svg'

const Landing: React.FC = () => {
  return (
    <Container>
      <BackgroundImage />

      <div className="landing">
        <header>
          <LogoIcon />

          <div className="toggle-Button">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>
        </header>

        <section>
          <div className="div-1">
            <div className="apresentation-div">
              <span className="hello">Hello</span>
              <strong>I'm Mathews</strong>
              <span className="profile" >Web Developer</span>
            </div>

            <button type="button"> About me </button>

          </div>
          <div className="div-2">
            <h1>hello world</h1>
          </div>
        </section>
      </div>
    </Container>
  )
}

export default Landing

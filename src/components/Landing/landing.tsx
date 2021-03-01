// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import { Container } from './styleLanding'

import LogoIcon from '../../assets/logo.svg'
import BackgroundImage from '../../assets/Background-big.svg'
import ElipseImage from '../../assets/Ellipse 1.svg'


const Landing: React.FC = () => {
  const [sideBar, setsideBar] = useState(false)

  function showMenu() {
    setsideBar(!sideBar)
  }


  return (
    <Container>
      <BackgroundImage />

      <div className="landing">
        <header>
          <LogoIcon />

          <button onClick={showMenu} className="toggle-Button">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </button>
        </header>


        <div className={sideBar ? 'menu active' : 'menu'}>
          <button onClick={showMenu} >X</button>
          <div className="social-list">
            <span>Social</span>

            <ul>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>GitHub</li>
              <li>YouTube</li>
              <li>Twitch</li>
            </ul>

          </div>

          <div className="menu-list">
            <span>Menu</span>

            <ul>
              <li>Work</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="email-div">
            <span>Email</span>
            <a href="http://">Matheus@email.com</a>
          </div>
        </div>


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
            <ElipseImage />
          </div>
        </section>
      </div>
    </Container>
  )
}

export default Landing

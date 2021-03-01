import React, { useState } from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import Header from '../components/Header/header'
import Landing from '../components/Landing/landing'

import GlobalStyles from '../styles/global'
import { ThemeProvider } from 'styled-components'

import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

const Home: React.FC = () => {

  // const [mode, setMode] = useState(light)

  // const toggleTheme = () => {
  //   setMode(mode.title === 'light' ? dark : light)
  // }

  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Container>
        <Head>
          <title>Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <Header toggleTheme={toggleTheme} /> */}
        <Landing />
      </Container>
    </ThemeProvider>
  )
}

export default Home

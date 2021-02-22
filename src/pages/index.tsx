// eslint-disable-next-line no-use-before-define
import React from 'react'
import Head from 'next/head'

// import LoveLogo from '../assets/undraw_Appreciation_re_p6rl.svg'
import { Container } from '../styles/pages/Home'
import Header from '../components/Header/header'
import Landing from '../components/Landing/landing'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {/* <LoveLogo />
      <h1>React Struture</h1>
      <p>A Typescript + NextJS Struture by with Love</p> */}
      <Landing />
    </Container>
  )
}

export default Home

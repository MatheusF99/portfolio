// eslint-disable-next-line no-use-before-define
import React from 'react'
import Head from 'next/head'

import LoveLogo from '../assets/undraw_Appreciation_re_p6rl.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoveLogo />
      <h1>React Struture</h1>
      <p>A Typescript + NextJS Struture by with Love</p>
    </Container>
  )
}

export default Home

// eslint-disable-next-line no-use-before-define
import React from 'react'
import Head from 'next/head'

import loveLogo from '../assets/undraw_Appreciation_re_p6rl.svg'
const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src={loveLogo} alt="" />
        <h1>hello world</h1>
      </main>
    </div>
  )
}

export default Home

import type { NextPage } from 'next'
import Head from 'next/head'
import AboutUs from '../components/Landing/AboutUs'
import SlideBar from '../components/Landing/FixedComponents/SlideMenu'
import Hero from '../components/Landing/Hero'
import MetaMath from '../components/Landing/MetaMath'
import Projects from '../components/Landing/Projects'
import WhatWeDo from '../components/Landing/WhatWeDo'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MetaMath</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SlideBar />
      <Hero />
      <AboutUs />
      <WhatWeDo />
      <Projects />
      <MetaMath />
    </>
  )
}

export default Home

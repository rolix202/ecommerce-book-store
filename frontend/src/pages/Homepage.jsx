import React from 'react'
import TopMenu from '../components/TopMenu'
import SecondTopMenu from '../components/SecondTopMenu'
import HeroSection from '../components/HeroSection'

const Homepage = () => {
  return (
    <div>
        <TopMenu />
        <hr className='horizontal-line'/>
        <SecondTopMenu />
        <hr className='horizontal-line'/>
        <HeroSection />
    </div>
  )
}

export default Homepage
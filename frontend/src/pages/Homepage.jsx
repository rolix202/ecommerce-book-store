import React from 'react'
import TopMenu from '../components/TopMenu'
import SecondTopMenu from '../components/SecondTopMenu'
import HeroSection from '../components/HeroSection'
import FeatureSection from '../components/FeatureSection'

const Homepage = () => {
  return (
    <div>
        <TopMenu />
        <hr className='horizontal-line'/>
        <SecondTopMenu />
        <hr className='horizontal-line'/>
        <HeroSection />
        <FeatureSection />
    </div>
  )
}

export default Homepage
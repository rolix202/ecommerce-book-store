import React from 'react'
import TopMenu from '../components/TopMenu'
import SecondTopMenu from '../components/SecondTopMenu'
import HeroSection from '../components/HeroSection'
import FeatureSection from '../components/FeatureSection'
import SelectedForYou from '../components/SelectedForYou'

const Homepage = () => {
  return (
    <div>
        <TopMenu />
        <hr className='horizontal-line'/>
        <SecondTopMenu />
        <hr className='horizontal-line'/>
        <HeroSection />
        <FeatureSection />
        <SelectedForYou />
    </div>
  )
}

export default Homepage
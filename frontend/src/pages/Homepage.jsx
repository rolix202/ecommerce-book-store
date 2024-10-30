import React from 'react'
import TopMenu from '../components/TopMenu'
import SecondTopMenu from '../components/SecondTopMenu'
import HeroSection from '../components/HeroSection'
import FeatureSection from '../components/FeatureSection'
import SelectedForYou from '../components/SelectedForYou'
import { must_buy_it_now, selected_for_you } from '../books/books'
import DidYouKnowUsSection from '../components/DidYouKnowUsSection'
import Footer from '../components/footer/Footer'

const Homepage = () => {
  return (
    <div>
        <TopMenu />
        <hr className='horizontal-line'/>
        <SecondTopMenu />
        <hr className='horizontal-line'/>
        <HeroSection />
        <FeatureSection />
        <SelectedForYou
            title="Selected for you"
            book_info={selected_for_you}
        />
        <SelectedForYou 
            title="You must buy it now "
            book_info={must_buy_it_now}
        />
        <DidYouKnowUsSection />
        <div className="foot">
            <Footer />
        </div>
        
    </div>
  )
}

export default Homepage
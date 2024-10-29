import { BookOpenIcon, StarIcon, TruckIcon } from '@heroicons/react/24/solid'
import React from 'react'

const FeatureSection = () => {
  return (
    <div className='wrapper'>
        <div className="feature-container">
            <div className="ship">
                <TruckIcon className='icon'/>
                <span> Free shiping over 50$ </span>
            </div>
            <div className="royalty">
                <StarIcon className='icon'/>
                <span>Save with loyalty points</span>
            </div>
            <div className="read-pages">
                <BookOpenIcon className='icon'/>
                <span>Read a few pages </span>
            </div>
        </div>
        
    </div>
  )
}

export default FeatureSection
import React from 'react'
import HeroBook from '../assets/images/book.png'
import ButtonComponent from './ButtonComponent'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const HeroSection = () => {
    return (
        <div className='wrapper'>
            <div className="hero-container">
                <div className="hero-left">
                    <div className="hero-left-content">
                        <ButtonComponent 
                            className="call-request"
                            text="Author of August"
                        />
                        <h1>Eric-Emanuel Schmitt </h1>
                        <p>Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions, and in 2001 he received the title of Chevalier des Arts et des Lettres. His books have been translated into over 40 languages.</p>
                        <ButtonComponent 
                            className="hero-down-btn"
                            text="View his books"
                        />
                    </div>
                </div>
                <div className="hero-right">
                    <span className='hero-right-text'>Autographed <br /> books + 30% <br /> discount</span>
                    <span className='stock-limit'>*within the stock limit</span>
                    <div className="book-wrapper">
                        <img src={HeroBook} alt="Hero Book" />
                    </div>
                    <div className="hero-nav">
                        <button className='hero-name-btn-1'> <ChevronLeftIcon className='ic'/> </button>
                        <button className='hero-name-btn-2'><ChevronRightIcon className='ico'/> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
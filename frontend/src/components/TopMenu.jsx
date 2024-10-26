import React from 'react'
import Search from '../assets/images/Search.png'
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/solid'

const TopMenu = () => {
  return (
    <div className='top-menu wrapper'>
        <div className="logo">
            <div className='logo-name'>Book Store</div>
            <span className='logo-tag'>We love books</span>
        </div>
        <div className="search-b">
            <input type="search" placeholder='Search' name="" id="" />
            <img src={Search} alt="" className='search-icon'/>
        </div>
        <div className="top-links">
            <ul>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Warranty</a></li>
                <li><a href="">Shipping</a></li>
                <li><a href="">Returns</a></li>
            </ul>
        </div>
        
        <ShoppingCartIcon className='icon'/> 
        <UserIcon className='icon'/>

    </div>
  )
}

export default TopMenu
import { PhoneIcon } from '@heroicons/react/24/solid'
import React from 'react'

const SecondTopMenu = () => {
    return (
        <div className='wrapper'>
            <div className='second-menu'>
                <ul>
                    <li><a href="">The must read</a></li>
                    <li><a href="">News</a></li>
                    <li><a href="">Promotion of the mount</a></li>
                    <li><a href="">Publishes</a></li>
                    <li><a href="">Subscribe to the newsletter</a></li>
                </ul>
                <div className='call-wrap'>
                    <div className='phone-wrap'>
                        <PhoneIcon className='icon' />
                        <span>+234 807 999 000</span>
                    </div>

                    <button className='call-request'>Request a call</button>
                </div>
            </div>
        </div>
    )
}

export default SecondTopMenu
import React from 'react'
import ButtonComponent from './ButtonComponent'

const DidYouKnowUsSection = () => {
    return (
        <div className='wrapper'>
            <div className="know-us-wrap">
                <div className="form-section">
                    <div className="form-section-content">
                        <h2>Did you know us? </h2>
                        <p>We are about books and our purpose is to show you the book who can chage your life or distract you from the real world în a better one. BWorld works with the must popular publishs just for your delight.
                            If you are about books, you must to subscribe to our newsletter. </p>

                        <form action="" className='form-itself'>
                            <input type="text" placeholder='Your name' name="" id="" />
                            <br /><br />
                            <input type="text" placeholder='Your e-mail' />
                            <br />
                            <br />
                            <br />
                            <ButtonComponent
                                className="hero-down-btn sub-btn"
                                text="Subscribe"
                            />
                        </form>
                    </div>

                </div>
                <div className="map-section">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127185.27129037218!2d8.280526314842152!3d5.015814102679277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105d7d855cacd2bb%3A0x69af84a8dca692a!2sCalabar%20Municipal%2C%20Cross%20River!5e0!3m2!1sen!2sng!4v1730287550252!5m2!1sen!2sng" style={{ border: 0 }} className='mapp' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default DidYouKnowUsSection
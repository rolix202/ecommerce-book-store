import React from 'react';
import './Footer.css';
import instagram from './img/ant-design_instagram-filled.png'
import twitter from './img/fa6-brands_square-twitter.png'
import facebook from './img/raphael_facebook.png'
import MasterCard from './img/MasterCard-Logo.png'
import paipal from './img/paipal1.png'
import Visa from './img/VISA-card-logo1.png'
import { BookOpenIcon, ClockIcon, PhoneIcon } from '@heroicons/react/24/solid';


function Footer() {
  return (
    <footer className="footer">
      <section className='footer-categores'>
        <div className="footer__sectidon footer__section--brand">
          <h4 className="footer__title">Book Store</h4>
        </div>

        <div className="other-footer-wrapper">
          <div className="footer__section footer__section--categories">
            <h4 className="footer__title">Categories</h4>
            <p className="footer__link">Psychology</p>
            <p className="footer__link">Self-Help</p>
            <p className="footer__link">Romance</p>
            <p className="footer__link">Mystery</p>
          </div>

          <div className="footer__section footer__section--kids">
            <h4 className="footer__title">For Kids</h4>
            <p className="footer__link">Games</p>
            <p className="footer__link">Comics</p>
            <p className="footer__link">Fantasy</p>
          </div>

          <div className="footer__section footer__section--ebooks">
            <h4 className="footer__title">E-Books</h4>
            <p className="footer__link">Fiction</p>
            <p className="footer__link">Historical</p>
            <p className="footer__link">Horror</p>
          </div>

          <div className="footer__section footer__section--contacts">
            <h4 className="footer__title">Help & Contacts</h4>
            <p className="footer__info"> <PhoneIcon className='icon-phone'/> +234 807 999 000</p>
            <p className="footer__info"><ClockIcon className='icon-phone'/> Mo-Fri, 9 AM to 11 PM</p>
            <p className="footer__info"><BookOpenIcon className='icon-phone'/> bookstore@store.ro</p>
          </div>

          <div className='footer-contact-us'>
            <p className='footer-contact-us-text' >If you have questions, you can contact us or we will do it for you. </p>
            <button className="footer__button">Request a call</button>

          </div>
        </div>


      </section>

      <div className='footer__socials-contanier'>
        <div className="footer__socials">
          <span className="footer__icon"><img src={facebook} alt="facebook" /></span>
          <span className="footer__icon"><img src={instagram} alt="instagram" /></span>
          <span className="footer__icon"><img src={twitter} alt="twitter" /></span>
        </div>

        <div className="footer__payments">
          <img className="footer__payment-icon" src={paipal} alt="PayPal" />
          <img className="footer__payment-icon" src={MasterCard} alt="MasterCard" />
          <img className="footer__payment-icon" src={Visa} alt="Visa" />
        </div>
      </div>

      <div className="footer__copyright">
        <p>© All copyrights are reserved. Book Store 2024.</p>
      </div>
    </footer>
  );
}

export default Footer;

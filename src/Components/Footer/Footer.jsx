import React from 'react'
import './Footer.css'

import BD_logo from '../Assets/logo-black-diamond.png'
import FD_logo from '../Assets/logo-first-editions.png'
import L_logo from '../Assets/logo-lesco.png'
import PW_logo from '../Assets/logo-proven-winners.png'
import SL_logo from '../Assets/logo-southern-living.png'
import KO_logo from '../Assets/logo-the-knock-out.png'

const Footer = () => {
  return (
    <div className='footer'>
      <section className='partners'>
        <div className="container">
          <ul className="partnerts_list">
            <li>
              <img alt="Black Diamond" src={BD_logo}/>
            </li>
            <li>
              <img alt="First Editions" src={FD_logo}/>
            </li>
            <li>
              <img alt="Lesco" src={L_logo}/>
            </li>
            <li>
              <img alt="Proven Winner" src={PW_logo}/>
            </li>
            <li>
              <img alt="Southern Living" src={SL_logo}/>
            </li>
            <li>
              <img alt="The Knock Out" src={KO_logo}/>
            </li>
          </ul>
        </div>
      </section>
      <section className="mastfoot_wrapper">
        <div class="container2">
          
          <nav class="mastfoot__col  mastfoot__col--contact">
            <h2>Contact Info</h2>
            <div class="mastfoot__nav">
              <ul id="menu-footer-contact" class="mastfoot__menu">
                <li id="menu-item-398537" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-398537"><a href="https://www.thetreecenter.com/support/">Need Help?</a></li>
                <li id="menu-item-709147" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-709147"><a href="https://www.thetreecenter.com/support-help/">Submit a Ticket</a></li>
                <li id="menu-item-457124" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-457124"><a href="https://www.thetreecenter.com/support-help/">Contact Us</a></li>
              </ul>
            </div>          
          </nav>
          <nav class="mastfoot__col mastfoot__col--about">
            <h2>About Us</h2>
            <div class="mastfoot__nav">
              <ul id="menu-footer-about-us" class="mastfoot__menu">
                <li id="menu-item-398491" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-398491"><a href="https://www.thetreecenter.com/about/">About The Tree Center</a></li>
                <li id="menu-item-398492" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-398492"><a href="https://www.thetreecenter.com/support/frequently-asked-questions/">FAQ</a></li>
                <li id="menu-item-398493" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-398493"><a href="https://www.thetreecenter.com/support/how-we-ship/">How We Ship</a></li>
                <li id="menu-item-398494" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-398494"><a href="https://www.thetreecenter.com/support/make-a-return/">Make A Return</a></li>
                <li id="menu-item-793743" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-793743"><a href="/support/terms-of-service/#accessibility">Accessibility</a></li>
                <li id="menu-item-761461" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-761461"><a rel="privacy-policy" href="https://www.thetreecenter.com/privacy-policy/">Privacy Policy</a></li>
              </ul>
            </div>          
          </nav>
          <nav class="mastfoot__col mastfoot__col--educational">
            <h2>Educational Info</h2>
            <div class="mastfoot__nav">
              <ul id="menu-footer-educational" class="mastfoot__menu">
                <li id="menu-item-398504" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-398504"><a href="https://www.thetreecenter.com/blog/">Blog</a></li>
                <li id="menu-item-398505" class="menu-item menu-item-type-post_type_archive menu-item-object-ttc_guide menu-item-398505"><a href="https://www.thetreecenter.com/guides/">Guides</a></li>
                <li id="menu-item-398506" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-398506"><a href="https://www.thetreecenter.com/support/arrive-and-thrive/">Arrive &#038; Thrive Guarantee™</a></li>
                <li id="menu-item-398507" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-398507"><a href="https://www.thetreecenter.com/support/hardiness-zone-map/">Hardiness Zones</a></li>
                <li id="menu-item-398508" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-398508"><a href="https://www.thetreecenter.com/trees-for-your-state/">Trees For Your State</a></li>
                <li id="menu-item-398509" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-398509"><a href="https://www.thetreecenter.com/fast-growing-trees/">Fast Growing Trees</a></li>
              </ul>
            </div>          
          </nav>

        <form action="https://www.thetreecenter.com/wp-json/ttc/v1/mailing-list" id="mastfoot__newsletter-signup-form" class="mastfoot__newsletter newsletter-form" method="POST">
          <fieldset>
            <h2>Join The Tree Center newsletter for goodies!</h2>
            <label for="mastfoot__newsletter-signup-form-email-input">
              Get discounts, gardening tips, six-pack abs and more!
            </label>

            <div class="mastfoot__newsletter-inputs">
              <input id="mastfoot__newsletter-signup-form-email-input" required name="email" type="email" placeholder="Your Email Address..." />
              <button type="submit" class="button button--icon button--main"><span class="icon icon--submit"></span></button>
            </div>
          </fieldset>
        </form>

        <div class="mastfoot__col mastfoot__col--logo">
          <span class="logo-blue">
            <a href="/">The Tree Center</a>
          </span>
        </div>

        <div class="mastfoot__social-links"><a href="tel:+18883290140">Call us: (888) 329-0140 </a>  
          <div class="mastfoot__social-links-icons">
            <a class="icon-link" target="noopener" href="https://www.facebook.com/thetreecenter/">
              <span class="fa-brands fa-facebook"></span>
            </a>
            
            <a class="icon-link" target="noopener" href="https://twitter.com/thetreecenter/">
              <span class="fa-brands fa-twitter"></span>
            </a>
            
            <a class="icon-link" target="noopener" href="https://www.pinterest.com/thetreecenter/">
                <span class="fa-brands fa-pinterest"></span>
            </a>
            
            <a class="icon-link" target="noopener" href="https://www.instagram.com/thetreecenter/">
                <span class="fa-brands fa-instagram"></span>
            </a>
          </div>
        </div>

      </div>
    </section>
    </div>
  )
}

export default Footer

import './Footer.scss';
import React from 'react';
import { AmericanExpressIcon, AppStoreIcon, DiscoverIcon, DollarIcon, FacebookIcon, GiftIcon, GooglePlay, InstagramIcon, LinkedInIcon, Logo, MasterCardIcon, PaypalIcon, ReturnIcon, TwitterIcon, VisaIcon, YoutubeIcon } from '../../_assets/icons/Icons';
import { Link } from 'react-router-dom';
  
const Footer = (props) => {

  const handleSubscribeField = (e) => {
    e.preventDefault();
    const {value} = e.target;
    console.log("Subscribe Email ", value )
  }

  const handleSubscribeButton = (e) => {
    e.preventDefault();
    console.log("Subscribe Button Clicked")
  }

  return (
    <>
      <div className="mainfooter-cover">
        <div className="container">
          <div className="whyshop-sectcov">
            <h3>WHY SHOP WITH US?</h3>
            <div className="whyshop-sectiner">
              <div className="whyshop-sectibox">
                <DollarIcon />
                <h4>CASH ON DELIVERY</h4>
                <p>Pay by cash when receiving your order</p>
              </div>
              <div className="whyshop-sectibox borderlrfix">
                <ReturnIcon />
                <h4>FREE & EASY RETURNS</h4>
                <p>We collect items you want to return
                  from your doorstep free of charge</p>
              </div>
              <div className="whyshop-sectibox">
                <GiftIcon />
                <h4>NO SURPRISES</h4>
                <p>Your order total is 100% guaranteed.
                  There will be no additional charges
                  due upon delivery</p>
              </div>
            </div>
          </div>
          <div className="offiappdow-box">
            <h3>newness OFFICIAL APPS</h3>
            <Link to="/" target="_blank">
              <AppStoreIcon />
            </Link>
            <Link to="/" target="_blank">
              <GooglePlay />
            </Link>
          </div>
        </div>
        <div className="container">
          <div className="subcribenews-cov">
            <div className="subcribenews-iner">
              <p>Subcribe To our News</p>
              <div className="subcribenews-form">
                <input type="email" onChange={(e) => handleSubscribeField(e)} placeholder="Enter Email Address" />
                <button onChange={(e) => handleSubscribeButton(e)}>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="footernav-topmain">
            <div className="container">
              <div className="footernav-topiner">
                <div className="row">
                  <div className="col-md-6">
                    <div className="left-footlogosoc">
                      <Link to="/" className="footerlogo">
                        <Logo />
                      </Link>
                      <p>A lifestyle app that believes you are capable of control. Selling 1000+ authentic brands with over 250,000 products. Offering to 1,000,000 users worldwide. With our 24/7 customer service, tackle any issues you may face. Instantly.</p>
                      <ul>
                        <h3>Connect With Newness</h3>
                        <li>
                          <Link to="/" target="_blank">
                            <InstagramIcon />
                          </Link>
                        </li>
                        <li>
                          <Link to="/" target="_blank">
                            <FacebookIcon />
                          </Link>
                        </li>
                        <li>
                          <Link to="/" target="_blank">
                            <TwitterIcon />
                          </Link>
                        </li>
                        <li>
                          <Link to="/" target="_blank">
                            <YoutubeIcon />
                          </Link>
                        </li>
                        <li>
                          <Link to="/" target="_blank">
                            <LinkedInIcon />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="footernav-menulist">
                      <ul>
                        <h3>Infomation</h3>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                        <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
                        <li><Link to="/returns-and-refunds">Returns & Refunds</Link></li>
                        <li><Link to="/shipping-and-delivery">Shipping & Delivery</Link></li>
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link to="/faqs">FAQs</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="footernav-menulist">
                      <ul>
                        <h3>Quick Links</h3>
                        <li><Link to="/my-account">My Account</Link></li>
                        <li><Link to="/wishlist">Wishlist</Link></li>
                        <li><Link to="/all-brands">All Brands</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="mobilefootlinksetcov">
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                          <h2 className="accordion-header" id="headingOne">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Infomation
                          </button>
                          </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <ul>
                              <li><Link to="/about-us">About Us</Link></li>
                              <li><Link to="/contact-us">Contact Us</Link></li>
                              <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
                              <li><Link to="/returns-and-refunds">Returns & Refunds</Link></li>
                              <li><Link to="/shipping-and-delivery">Shipping & Delivery</Link></li>
                              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                              <li><Link to="/faqs">FAQs</Link></li>
                            </ul>
                          </div>
                          </div>
                      </div>
                      <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwo">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Quick Links
                          </button>
                          </h2>
                          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <ul>
                              <li><Link to="/my-account">My Account</Link></li>
                              <li><Link to="/wishlist">Wishlist</Link></li>
                              <li><Link to="/all-brands">All Brands</Link></li>
                            </ul>
                          </div>
                          </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-payoptlist">
            <div className="container">
              <div className="footer-payoptiner">
                <p>We Accept</p>
                <Link to="/"><PaypalIcon /></Link>
                <Link to="/"><VisaIcon /></Link>
                <Link to="/"><DiscoverIcon /></Link>
                <Link to="/"><MasterCardIcon /></Link>
                <Link to="/"><AmericanExpressIcon /></Link>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <div className="tabnavdata-covlist">
        <ul>
          <li className="active">
            <Link to="/">
              <i className='bx bx-home'></i>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/gift">
              <i className='bx bx-gift'></i>
              <span>Gift</span>
            </Link>
          </li>
          <li>
            <Link to="/category">
              <i className='bx bx-category'></i>
              <span>Category</span>
            </Link>
          </li>
          <li>
            <Link to="/wishlist">
              <i className='bx bx-heart'></i>
              <span>Wishlist</span>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <i className='bx bx-cart'></i>
              <span>Cart</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Footer;
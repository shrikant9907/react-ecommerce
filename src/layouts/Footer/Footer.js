import './Footer.scss';
import React from 'react';
import { AmericanExpressIcon, AppStoreIcon, CartIcon, DiscoverIcon, DollarIcon, FacebookIcon, GiftIcon, GooglePlay, InstagramIcon, LinkedInIcon, Logo, MasterCardIcon, PaypalIcon, ReturnIcon, SearchIcon, TwitterIcon, UserIcon, VisaIcon, WishlistIcon, YoutubeIcon } from '../../_assets/icons/Icons';
import { useNavigate } from 'react-router-dom';
import ReactFlagsSelect from "react-flags-select";
import { useState } from 'react';
import { toast } from 'react-toastify';
  
const Footer = (props) => {

  const [selected, setSelected] = useState("");
  
  let navigate = useNavigate(); 
  const handleLogoClick = (e) =>{ 
    e.preventDefault();
    navigate('/');
  }

  const handleSearchByKeywords = (e) => {
    e.preventDefault();
    const {value} = e.target;
    console.log("Search ", value )
  }

  const handleCartClick = (e) => {
    navigate('/cart');
  }

  const handleCheckoutClick = (e) => {
    e.preventDefault();
    navigate('/checkout');
  }

  const handleClearCartClick = (e) => {
    e.preventDefault();
    // Write Clear logic here
    toast.success('Cart cleared successfully.')
  }

  return (
    <>
      <div class="mainfooter-cover">
        <div class="container">
          <div class="whyshop-sectcov">
            <h3>WHY SHOP WITH US?</h3>
            <div class="whyshop-sectiner">
              <div class="whyshop-sectibox">
                <DollarIcon />
                <h4>CASH ON DELIVERY</h4>
                <p>Pay by cash when receiving your order</p>
              </div>
              <div class="whyshop-sectibox borderlrfix">
                <ReturnIcon />
                <h4>FREE & EASY RETURNS</h4>
                <p>We collect items you want to return
                  from your doorstep free of charge</p>
              </div>
              <div class="whyshop-sectibox">
                <GiftIcon />
                <h4>NO SURPRISES</h4>
                <p>Your order total is 100% guaranteed.
                  There will be no additional charges
                  due upon delivery</p>
              </div>
            </div>
          </div>
          <div class="offiappdow-box">
            <h3>newness OFFICIAL APPS</h3>
            <a href="javascript:void(0);">
              <AppStoreIcon />
            </a>
            <a href="javascript:void(0);">
              <GooglePlay />
            </a>
          </div>
        </div>
        <div class="container">
          <div class="subcribenews-cov">
            <div class="subcribenews-iner">
              <p>Subcribe To our News</p>
              <div class="subcribenews-form">
                <input type="text" placeholder="Enter Email Address" />
                <button>Search</button>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div class="footernav-topmain">
            <div class="container">
              <div class="footernav-topiner">
                <div class="row">
                  <div class="col-md-6">
                    <div class="left-footlogosoc">
                      <a href="javascript:void(0);" class="footerlogo">
                        <Logo />
                      </a>
                      <p>A lifestyle app that believes you are capable of control. Selling 1000+ authentic brands with over 250,000 products. Offering to 1,000,000 users worldwide. With our 24/7 customer service, tackle any issues you may face. Instantly.</p>
                      <ul>
                        <h3>Connect With Newness</h3>
                        <li>
                          <a href="javascript:void(0);">
                            <InstagramIcon />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <FacebookIcon />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <TwitterIcon />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <YoutubeIcon />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <LinkedInIcon />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="footernav-menulist">
                      <ul>
                        <h3>Infomation</h3>
                        <li><a href="javascript:void(0);">About Us</a></li>
                        <li><a href="javascript:void(0);">Contact Us</a></li>
                        <li><a href="javascript:void(0);">Terms & Conditions</a></li>
                        <li><a href="javascript:void(0);">Returns & Refunds</a></li>
                        <li><a href="javascript:void(0);">Shipping & Delivery</a></li>
                        <li><a href="javascript:void(0);">Privacy Policy</a></li>
                        <li><a href="javascript:void(0);">FAQs</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="footernav-menulist">
                      <ul>
                        <h3>Quick Links</h3>
                        <li><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#signin">My Account</a></li>
                        <li><a href="javascript:void(0);">Wishlist</a></li>
                        <li><a href="javascript:void(0);">All Brands</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="mobilefootlinksetcov">
                    <div class="accordion" id="accordionExample">
                      <div class="accordion-item">
                          <h2 class="accordion-header" id="headingOne">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Infomation
                          </button>
                          </h2>
                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <ul>
                              <li><a href="javascript:void(0);">About Us</a></li>
                              <li><a href="javascript:void(0);">Contact Us</a></li>
                              <li><a href="javascript:void(0);">Terms & Conditions</a></li>
                              <li><a href="javascript:void(0);">Returns & Refunds</a></li>
                              <li><a href="javascript:void(0);">Shipping & Delivery</a></li>
                              <li><a href="javascript:void(0);">Privacy Policy</a></li>
                              <li><a href="javascript:void(0);">FAQs</a></li>
                            </ul>
                          </div>
                          </div>
                      </div>
                      <div class="accordion-item">
                          <h2 class="accordion-header" id="headingTwo">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Quick Links
                          </button>
                          </h2>
                          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <ul>
                              <li><a href="javascript:void(0);">My Account</a></li>
                              <li><a href="javascript:void(0);">Wishlist</a></li>
                              <li><a href="javascript:void(0);">All Brands</a></li>
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
          <div class="footer-payoptlist">
            <div class="container">
              <div class="footer-payoptiner">
                <p>We Accept</p>
                <a href="javascript:void(0);"><PaypalIcon /></a>
                <a href="javascript:void(0);"><VisaIcon /></a>
                <a href="javascript:void(0);"><DiscoverIcon /></a>
                <a href="javascript:void(0);"><MasterCardIcon /></a>
                <a href="javascript:void(0);"><AmericanExpressIcon /></a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <div class="tabnavdata-covlist">
        <ul>
          <li class="active">
            <a href="javascript:void(0);">
              <i class='bx bx-home'></i>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i class='bx bx-gift'></i>
              <span>Gift</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i class='bx bx-category'></i>
              <span>Category</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i class='bx bx-heart'></i>
              <span>Wishlist</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i class='bx bx-cart'></i>
              <span>Cart</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Footer;
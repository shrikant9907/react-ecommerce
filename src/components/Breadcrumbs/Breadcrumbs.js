import React from 'react';
import Button from 'react-bootstrap/Button';
import './Banner.scss';
import BannerImg from "../../_assets/images/banner/banner.jpg"; 

const Banner = (props) => {
  return (
    <>
      <div class="bredcu-main">
        <div class="container">
          <ul>
            <li>
              <a href="javascript:void(0);">Home</a>
              <img src="svg/next-icon.svg" alt="" />
            </li>
            <li>
              <p>Shopping Cart</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Banner;
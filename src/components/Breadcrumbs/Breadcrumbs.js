import React from 'react';
import { Link } from 'react-router-dom';
import { NextIcon } from '../../_assets/icons/Icons';

const Breadcrumbs = (props) => {

  return (
    <>
      <div className="bredcu-main">
        <div className="container">
          <ul>
            <li>
              <Link to="/">Home</Link>
              <NextIcon />
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

export default Breadcrumbs;
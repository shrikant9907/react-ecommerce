import './Header.scss';
import React from 'react';
import { CartIcon, Logo, SearchIcon, UserIcon, WishlistIcon } from '../../_assets/icons/Icons';
import { Link, useNavigate } from 'react-router-dom';
import ReactFlagsSelect from "react-flags-select";
import { useState } from 'react';
import SignInModal from '../../components/modal/SigninModal/SignInModal';
import SignUpModal from '../../components/modal/SignUpModal/SignUpModal';
import { useDispatch, useSelector } from 'react-redux';
import { showSignInModal } from '../../_actions/authModalActions';
import { useLocation } from "react-router-dom"
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { emptyCart } from '../../_actions/cartActions';
import megaImage from "../../_assets/images/mega-menu-img.png"
import { categoryLinks } from '../../_config/categoryLinks';

const Header = (props) => {

  const location = useLocation()
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.cart.products);

  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState(categoryLinks[0])

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

  const handleActiveCategory = (cat, idx) => {
    setActiveCategoryIndex(idx);
    setActiveCategory(cat);
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
    dispatch(emptyCart());
  }

  const handleUserIconClick = () => {
    dispatch(showSignInModal());
  }

  return (
    <>
    <header>
      <div className="hedtop_mainbar">
        <Link className='text-white' to="/">ENJOY UP TO 70% OFF. USE CODE NEWNESS</Link>
      </div>
      <div className="headerdata_one">
        <div className="container">
          <div className="hedlengdata">
            <ReactFlagsSelect
              selected={selected}
              onSelect={(code) => setSelected(code)}
            />
          </div>
          <div className="midlogodata">
            <Link to="/" onClick={(e) => {handleLogoClick(e)}}>
              <Logo />
            </Link>
          </div>
          <div className="rightuercartdata">
            <div className="rightuercart_iner">
              <div className="hed_userbtntop">
                <Link to="/" onClick={(e) => {handleUserIconClick(e)}}>
                  <UserIcon />
                </Link>
              </div>
              <div className="hed_wishlistbtntop">
                <Link to="/">
                  <WishlistIcon />
                </Link>
              </div>
              <div className="hed_cartbtntop">
                <div className="iSelect fixedWidth rounded">
                  <label for="chk">
                    <input aria-hidden="true" id="chk" type="checkbox" />
                    <span className="select-label active" title="Select the model">
                      <CartIcon />
                      <b>1</b>
                    </span>

                    <ul role="listbox">
                      <div className="maindicrtdati-cov">
                        <h3>My Cart</h3>
                        <div className="maindicrtdati-inr">
                        
                          {cartData.map((product, pidx) => {
                            return <div className="maindicrtdati-prodlst">
                              <div className="maindicrtdati-left">
                                <img src={product?.image} alt="Product" />
                              </div>
                              <div className="maindicrtdati-right">
                                <Link to="/">{product?.title}</Link>
                                <h6>{product?.quantity} X ${product?.price}</h6>
                              </div>
                              <Link to="/" className="cartdorp-remove"><i className='bx bx-x'></i></Link>
                            </div>
                          })
                          }

                          <div className="carttog-total">
                            <h5>TOTAL PRICE</h5>
                            <h4>$538.00</h4>
                          </div>

                          <div className="togcart-myvcartalbtn">
                            <Link to="/" onClick={(e) => handleCartClick(e)} className="tog-viewcartbtn">View My Cart</Link>
                            <Link to="/" onClick={(e) => handleCheckoutClick(e)} className="tog-gotodesh">Go To checkout</Link>
                            <Link to="/" onClick={(e) => handleClearCartClick(e)} className="tog-clearcart">Clear Cart</Link>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="headerdata_nav">
            <div className="headerdata_manu">
              <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="cover-namenulogonav">
                  {/* <!-- <div className="left-navmenulogo">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                  </div> --> */}
                  <div className="collapse navbar-collapse right-hednavmaincov" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    { categoryLinks.map((category, index) => {
                      let listClasses = 'nav-item dropdown';
                      if (index === activeCategoryIndex) {
                        listClasses += ' actmenudaminbtn';
                      }
                      return <li className={listClasses} onClick={() => handleActiveCategory(category, index)}>
                        <Link className="nav-link dropdown-toggle d-menu" to={category.to} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          {category.name} <svg className="navarrowbtnmenu" id="arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </Link>
                      </li>
                    })}
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            <div className="headerdata_search">
              <input type="text" autoComplete='off' onChange={(e) => handleSearchByKeywords(e)} placeholder="Search Here" />
              <button><SearchIcon /></button>
            </div>
          </div>
          
        </div>
      </div>
      
      <div className="headerdata_two">
        <div className="container">
          <div className="mobile_headercov">
            <div className="mobile_headerleft">
              <Link to="/">
                <img src="images/logo.png" alt="" />
              </Link>
            </div>
            <div className="mobile_headeright">
              <div className="hedlengdata mobile_setbox">
                <form>
                  <div className="form-item">
                    <input id="country_selector2" type="text" />
                    <label for="country_selector" className='d-none'>Select a country here...</label>
                  </div>
                </form>
              </div>
              
              <div className="mobile_heduser1">
                <Link to="/" data-bs-toggle="modal" data-bs-target="#signup_mobile">
                  <img src="svg/user-icon-hed.svg" alt="" />
                </Link>
              </div>
              <div className="mobile_hedusearch">
                {/* <!-- <Link to="/" data-bs-toggle="modal" data-bs-target="#signin">
                  <img src="svg/search-icon-hed.svg" alt="" >
                </Link> --> */}
                <div id="wrap">
                  <form action="" autoComplete="on">
                    <input id="search" name="search" type="text" placeholder="Search Here" />
                    <input id="search_submit" value="Rechercher" type="submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="botmenucetsltmain">
          <div className="container">
            <ul> 
              <li className="active">
                <Link to="/category/women">Women</Link>
              </li>
              <li>
                <Link to="/category/men">Men</Link>
              </li>
              <li>
                <Link to="/category/kids">Kids</Link>
              </li>
              <li>
                <Link to="/category/electronics">Electronics</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {activeCategory && activeCategory.haveSubCategory && 
        <div className="hedsubmenu_listcov">
          <div className="container">
            <ul>
              { activeCategory.subCategories.map((subCat, scIdx) => {
                return <>
                  { subCat.haveMegaMenu ? 
                    <li className="mega-dropdown menusumegamin_cov">
                      <Link to={subCat.to} className="browse item">{subCat.name}</Link>
                      <div className="megamenu">
                        <div className="mainmegamenusetcov">
                          <div className="mainmegamenuset_navlist rightbordermegasub">
                            <h5>SHOP BY PRODUCT</h5>
                            <Link to="/">Shoes</Link>
                            <Link to="/">Accessories</Link>
                            <Link to="/">Bags</Link>
                            <Link to="/">Beauty</Link>
                            <Link to="/">Home & gifting</Link>
                            <Link to="/">sports</Link>
                            <Link to="/">Boutique</Link>
                            <Link to="/">Streetwear</Link>
                            <Link to="/">Modest</Link>
                          </div>
                          <div className="mainmegamenuset_navlist">
                            <h5>SHOP BY New in</h5>
                            <Link to="/">Dresses</Link>
                            <Link to="/">TOpS</Link>
                            <Link to="/">T-shirts & vests</Link>
                            <Link to="/">Arabian clothing</Link>
                            <Link to="/">Pants & leggings</Link>
                            <Link to="/">Abayas</Link>
                            <Link to="/">Jumpsuits & Playsuits</Link>
                            <Link to="/">Hoodies & sweatshirts</Link>
                            <Link to="/">Skirts</Link>
                            <Link to="/">Jackets & coats</Link>
                          </div>
                          <div className="mainmegamenuset_imgdata">
                            <img src={megaImage} alt="" />
                          </div>
                        </div>
                      </div>
                    </li>
                      :
                    <li><Link to={subCat.to}>{subCat.name}</Link></li> 
                  }
                </>
              })}
            </ul>
          </div>
        </div>
      }
    </header>
    {location.pathname !== '/' && <Breadcrumbs /> }
    <SignInModal />
    <SignUpModal />
    </>
  )
}

export default Header;

import React from "react";
import LoginImageSrc from '../../../_assets/images/login-img.png';
import FacebookLoginSrc from '../../../_assets/images/facebook-icon.png';
import GoogleLoginSrc from '../../../_assets/images/google-icon.png';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { hideSignInModal, showSignInModal, showSignUpModal } from "../../../_actions/authModalActions";
import { Link } from "react-router-dom";

const SignInModal = (props) => {

  const dispatch = useDispatch();
  const authModal = useSelector((state) => state.authModal)

  const handleCreateNewAccount = (e) => {
    e.preventDefault();
    dispatch(showSignUpModal())
    dispatch(hideSignInModal())
  }

  const handleForgotPassword = () => {
    toast.success('Forget password clicked.')
  }

  const closeModal = () => {
    if (authModal.showSigninModal) {
      dispatch(hideSignInModal())
    } else {
      dispatch(showSignInModal())
    }
  }

  return <>
    {authModal.showSigninModal && <div className="modal-backdrop fade show" onClick={() => closeModal()}></div>}
    {authModal.showSigninModal &&
      <div className="modal fade signgiupmodalset-cov show d-block">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="signinsignup-main">
                <div className="signinsignup-left">
                  <img src={LoginImageSrc} alt="Login" />
                </div>
                <div className="signinsignup-right">
                  <button type="button" className="btn-close" onClick={() => closeModal()}></button>
                  <h3>SIGN IN</h3>
                  <div className="comsignupinsetcov">
                    <div className="comsignupinset-inerform">
                      <div className="form-group">
                        <label for="">Email</label>
                        <input type="text" className="form-control" id="" placeholder="Enter Email address" />
                      </div>
                    </div>
                    <div className="comsignupinset-inerform">
                      <div className="form-group">
                        <label for="">Password</label>
                        <input type="text" className="form-control" id="" placeholder="Enter Email address" />
                      </div>
                    </div>
                    <div className="forgotbnt-link">
                      <Link to="/" onClick={() => handleForgotPassword()}>Forgot Your Password?</Link>
                    </div>
                    <div className="login-btnsetcov">
                      <button>Login</button>
                    </div>
                    <div className="with-signinbntset">
                      <h6>OR SIGN IN WITH</h6>
                      <Link to="/">
                        <img src={FacebookLoginSrc} alt="Login with Facebook" />
                      </Link>
                      <Link to="/">
                        <img src={GoogleLoginSrc} alt="Login with Google" />
                      </Link>
                    </div>
                    <div className="newcretaccot-link">
                      <Link to="/" onClick={(e) => handleCreateNewAccount(e)} >Create New Account?</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
  </>
}
export default SignInModal;
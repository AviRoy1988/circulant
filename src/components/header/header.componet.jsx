import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.style.scss";
import { auth } from "../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {createStructuredSelector} from 'reselect'
import {cartHiddenSelector} from '../../redux/cart/cart.selectors'
import {currentUserSelector} from '../../redux/user/user.selector'

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/contact" className="option">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : (<CartDropdown />)}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
  hidden: cartHiddenSelector,
});

export default connect(mapStateToProps)(Header);

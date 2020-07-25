import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.style.scss";
import {connect} from 'react-redux';
import toggleCartHidden from '../../redux/cart/cart-action'
import {cartItemsCountSelector} from '../../redux/cart/cart.selectors'

import {createStructuredSelector} from 'reselect'

const CartIcon = ({toggleCartHidden, itemCount}) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
  itemCount: cartItemsCountSelector,
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
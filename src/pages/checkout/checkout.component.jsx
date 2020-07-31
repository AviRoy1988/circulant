import React from "react";
import "./checkout.style.scss";
import StripeCheckoutButton from '../../components/stripe/stripe.component'
import { createStructuredSelector } from "reselect";
import {
  cartTotalValueSelector,
  cartItemsSelector,
} from "../../redux/cart/cart.selectors";
import { connect } from "react-redux";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckOutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>Total : $ {total}</span>
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
  total: cartTotalValueSelector,
});

export default connect(mapStateToProps)(CheckOutPage);

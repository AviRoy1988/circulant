import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.style.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";
import { cartItemsSelector } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import toggleCartHidden from "../../redux/cart/cart-action";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span class="empty-cart">Your Cart Is Empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

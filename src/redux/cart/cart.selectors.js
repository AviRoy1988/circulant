import { createSelector } from "reselect";

const cartSelector = (state) => state.cart;

export const cartItemsSelector = createSelector(
  [cartSelector],
  (cart) => cart.cartItems
);

export const cartHiddenSelector = createSelector(
  [cartSelector],
  (cart) => cart.hidden
);

export const cartItemsCountSelector = createSelector(
  [cartItemsSelector],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedValue, cartItem) => accumulatedValue + cartItem.quantity,
      0
    )
);

export const cartTotalValueSelector = createSelector(
  [cartItemsSelector],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedValue, cartItem) =>
        accumulatedValue + cartItem.quantity * cartItem.price,
      0
    )
);

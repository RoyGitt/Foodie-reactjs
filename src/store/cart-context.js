//////////////////////////////
// CART ORDERDATA
//////////////////////////////
import React, { useReducer } from "react";
export const CartContext = React.createContext({
  orderData: [],
  totalCartValue: 0,
  addItemHandler: () => {},
  removeItemHandler: () => {},
});

//Default Value
const defaultValue = { items: [], totalCartValue: 0 };

//Reducer Function
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedCartValue =
      state.totalCartValue + action.data.price * action.data.amount;

    // Find the index of the existing Cart item if it exists
    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.data.id;
    });

    // Value of the existing cart item
    const existingCartItem = state.items[existingCartItemIndex];

    // Initilising the updated cart
    let updatedCart;

    // If there is repetition

    if (existingCartItem) {
      //Updating the amount of the exisiting cart Item
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.data.amount,
      };

      //Copying Items array(immutably)
      updatedCart = [...state.items];

      //Updating the entry
      updatedCart[existingCartItemIndex] = updatedItem;
    } else {
      updatedCart = [action.data, ...state.items];
    }

    return { items: updatedCart, totalCartValue: updatedCartValue };
  }
  if (action.type === "REMOVE") {
    // Find the index of the existing Cart item if it exists
    const existingCartItemIndex = state.items.findIndex((item) => {
      return action.id === item.id;
    });
    // Value of the existing cart item
    const existingCartItem = state.items[existingCartItemIndex];

    //Updating the Cart Value
    const updatedCartValue = state.totalCartValue - existingCartItem.price;
    let updatedCart;

    if (existingCartItem.amount === 1) {
      //Remove the item from the array if the amount is 1
      updatedCart = state.items.filter((item) => {
        return item.id !== existingCartItem.id;
      });
    } else {
      //If the amount is greater than 1 we just change the amount
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };

      //Copying the array
      updatedCart = [...state.items];

      //Updating the entry
      updatedCart[existingCartItemIndex] = updatedItem;
    }
    return { items: updatedCart, totalCartValue: updatedCartValue };
  }
};

const CartContextProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(cartReducer, defaultValue);
  const addItemHandler = (data) => {
    dispatchCartState({ type: "ADD", data: data });
  };
  const removeItemHandler = (id) => {
    dispatchCartState({ type: "REMOVE", id: id });
  };

  return (
    <CartContext.Provider
      value={{
        orderData: cartState.items,
        totalCartValue: cartState.totalCartValue,
        addItemHandler: addItemHandler,
        removeItemHandler: removeItemHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

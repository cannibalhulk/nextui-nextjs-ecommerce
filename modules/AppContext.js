const { createContext, useState, useContext, useReducer } = require("react");
// context data getter
const CartStateContext = createContext();
// context data setter
const CartDispatchContext = createContext();
// get item from cart
const getItem = (cart, product) => {
  return cart.find((item) => item.id === product.id);
};
const cartReducer = (state, action) => {
  // get the product object and the type of action by destructuring
  const { product, type } = action;
  const item = getItem(state, product);
  // if "add"
  // return an array of the previous state and the product object
  if (type === "add") {
    return item
      ? state.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      : [...state, { ...product, quantity: 1 }];
  }
  // if "remove"
  // remove the product object in the previous state
  // that matches the title of the current product object
  if (type === "remove") {
    return item.quantity === 1
      ? state.filter((cartItem) => cartItem.id !== product.id)
      : state.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
  }
  // if "delete"
  // remove the product object from the state
  if (type === "delete") {
    return state.filter((cartItem) => cartItem.id !== product.id);
  }
  return state;
};
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useReducer(cartReducer, []);
  return (
    <CartDispatchContext.Provider value={setCart}>
      <CartStateContext.Provider value={cart}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};
export const useDispatchCart = () => useContext(CartDispatchContext);
export const useCart = () => useContext(CartStateContext);
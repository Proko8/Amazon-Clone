export const initialState = {
  cart: [
    {
      id: "12345",
      title:
        'Acer Swift 3 Thin & Light Laptop, 14" Full HD IPS, AMD Ryzen 7 4700U Octa-Core Processor with Radeon Graphics, 8GB LPDDR4, 512GB NVMe SSD, WiFi 6, Backlit Keyboard, Fingerprint Reader, SF314-42-R9YN',
      price: 679.99,
      rating: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71ZoLAhQrsL._AC_SL1500_.jpg",
    },
  ],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "REMOVE_FROM_CART":
      let newCart = [...state.cart];
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it is not in the cart`
        );
      }

      return { ...state, cart: newCart };
    default:
      return state;
  }
};

export default reducer;

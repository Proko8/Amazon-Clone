export const initialState = {
    cart: [{
        
          id: "12321341",
          title:'Acer Swift 3 Thin & Light Laptop, 14" Full HD IPS, AMD Ryzen 7 4700U Octa-Core Processor with Radeon Graphics, 8GB LPDDR4, 512GB NVMe SSD, WiFi 6, Backlit Keyboard, Fingerprint Reader, SF314-42-R9YN',
          price: 679.99,
          rating: 5,
          image : "https://images-na.ssl-images-amazon.com/images/I/71ZoLAhQrsL._AC_SL1500_.jpg"
        
    }],
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_CART':
            return { 
                ...state,
                cart: [...state.cart, action.item]
            };
            break;
            case 'REMOVE_FROM_CART':
                return { 
                    ...state 
                };
            break;
            default:
                return state;
    }
}

export default reducer;
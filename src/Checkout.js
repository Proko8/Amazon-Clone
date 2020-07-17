import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ cart }] = useStateValue();
  return (
    <div className="checkout">
      <img
        className="checkout__ad"
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt=""
      />
      {cart?.length === 0 ? (
        <div>
          <h2>Your Shopping Cart is empty</h2>
          <p>
            You have items saved to buy later. To buy one--or more--now, click
            Move to Cart next to the item.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your Shopping Cart</h2>
          {cart.map((item) => (
            <CheckoutProduct
              item={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;

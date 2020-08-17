import React from "react";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct.js";
import { useStateValue } from "../../StateProvider.js";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal.js";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty.</h2>
            <p>
              You have no items in your basket. To buy one or more items select
              "Add to basket" below the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>

            {/* List out all the checkout products */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
        <Subtotal Component />
        </div>
      )}
    </div>
  );
}

export default Checkout;
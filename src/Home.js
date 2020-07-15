import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      {/* Product, id,title, rating, image */}
      <div className="home__row">
        <Product
          id="12321341"
          title='Acer Swift 3 Thin & Light Laptop, 14" Full HD IPS, AMD Ryzen 7 4700U Octa-Core Processor with Radeon Graphics, 8GB LPDDR4, 512GB NVMe SSD, WiFi 6, Backlit Keyboard, Fingerprint Reader, SF314-42-R9YN'
          price={679.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71ZoLAhQrsL._AC_SL1500_.jpg"
        />
        <Product
          id="12321341"
          title="AMD Ryzen 9 3950X 16-Core, 32-Thread Unlocked Desktop Processor, Without Cooler"
          price={689.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/7122uH4-hfL._AC_SL1121_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12321341"
          title="ZOTAC Gaming GeForce RTX 2080 Ti AMP MAXX 11GB GDDR6 Graphics Card, ZT-T20810H-10P"
          price={1299.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71MU3OroNyL._AC_SL1500_.jpg"
        />
        <Product
          id="12321341"
          title="Reign Total Body Fuel, Orange Dreamsicle, Fitness & Performance Drink, 16 Oz (Pack of 12)"
          price={19.98}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81pHWSyGtxL._SL1500_.jpg"
        />
        <Product
          id="12321341"
          title="New Apple MacBook Pro (13-inch, 8GB RAM, 256GB SSD Storage, Magic Keyboard) - Space Gray"
          price={1249.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71HI3U9ZwZL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321341"
          title="Sabrent 1TB Rocket NVMe 4.0 Gen4 PCIe M.2 Internal SSD Extreme Performance Solid State Drive (SB-ROCKET-NVMe4-1TB)"
          price={199.98}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71yU3zvq5IL._AC_SL1500_.jpg"
        />
      </div>

      {/*  Product */}
    </div>
  );
}

export default Home;

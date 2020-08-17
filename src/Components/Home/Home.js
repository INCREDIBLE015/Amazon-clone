import React from "react";
import Product from "../Product/Product.js";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/Other/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-CA_HO_PVD4778._CB428347185_.jpg"
        alt=""
      />

      {/* Products
          With a full-stack application my goal would be to pull from
          Django back-end for item information and set an Array..or Map(?) that
          creates a component for each item in the object query instead of
          calling 5 Product Components..
      */}
      <div className="home__row">
        <Product
          id="12398"
          title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con"
          price={379.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61JnrafZ7zL._AC_SX679_.jpg"
        />
        <Product
          id="32453245"
          title="Mario Tennis Aces"
          price={79.84}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/818mP%2BY-MDL._AC_SY445_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="2355657"
          title='Samsung Home Entertainment LC49G95TSSNXZA 240Hz G-Sync WQHD Curved Super Wide 32:9 Gaming Monitor - 49", Dark Blue Grey'
          price={1999.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SX679_.jpg"
        />
        <Product
          id="78755"
          title="Sabrent 1TB Rocket Nvme PCIe 4.0 M.2 2280 Internal SSD "
          price={279.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71yU3zvq5IL._AC_SL1500_.jpg"
        />
        <Product
          id="568343"
          title="Q-tips Cotton Swabs Original 500 count"
          price={3.88}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/5156Qyst53L._AC_SX522_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="457473737"
          title="Bounty Select-A-Size Paper Towels"
          price={21.97}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71TMrfZUt0L._AC_SX522_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
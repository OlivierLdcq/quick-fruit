import React from "react";
import "./App.scss";
import Navigation from "./routes/navigation/navigation-route.component";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home-route.component";
import OurStory from "./routes/our-story/our-story-route.component";
import Shop from "./routes/shop/shop-route.component";
import Authentification from "./routes/authentification/authentification.route.component";
import Cart from "./routes/cart/cart-route.component";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="home" index element={<Home />} />
          <Route path="our-story" element={<OurStory />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
          <Route path="authentification" element={<Authentification />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

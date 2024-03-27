import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import IconCategory from "./Icon Category/IconCategory";
import Trending from "./Trending/Trending";
import Popular from "./Popular/Popular";
import CurrentOffer from "./CurrentOffer/CurrentOffer";
import Newsletter from "./Newsletter/Newsletter";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <IconCategory />
      <Trending />
      <CurrentOffer />
      <Popular />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;

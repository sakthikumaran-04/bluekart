import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import IconCategory from "./Icon Category/IconCategory";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <IconCategory />
    </>
  );
}

export default App;

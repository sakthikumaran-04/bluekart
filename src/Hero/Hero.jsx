import React from "react";
import "./Hero.css";
import img from "../assets/hero.png";
function Hero() {
  return (
    <>
      <div className="Hero h-[115svh] gap-9 grid grid-cols-2 place-content-center max-md:grid-cols-1 max-md:grid-flow-row">
        <div className="flex-1 px-6 flex items-center justify-center font-body font-medium max-md:order-1">
          <div className="flex flex-col gap-4 ">
            <p className="text-5xl max-md:text-3xl">Hey There 👋</p>
            <h1 className="text-xl max-md:text-lg">
              Get Upto 30% Off On New Arrivals
            </h1>
            <button className="bg-blue-500 p-2 rounded-md flex items-center justify-center">
              <p>Shop Now</p>
              <span className="material-symbols-outlined">
                keyboard_double_arrow_right
              </span>
            </button>
          </div>
        </div>
        <div className="grid place-content-center w-full">
          <img src={img} className="max-md:w-80" alt="" />
        </div>
      </div>
    </>
  );
}

export default Hero;

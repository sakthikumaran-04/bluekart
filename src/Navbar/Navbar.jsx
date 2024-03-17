import React from "react";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import './Navbar.css'
function Navbar() {
  const [screenWidth, setScreenWidth] = useState(screen.width);
  const detectResize = () => {
    setScreenWidth(screen.width);
  };
  useEffect(() => {
    window.addEventListener("resize", detectResize);

    return () => {
      window.removeEventListener("resize", detectResize);
    };
  }, [screenWidth]);
  console.log(screenWidth);

  return (
    <>
      <nav className="font-body shadow-md py-2 w-[100%] overflow-hidden">
        <section className="font-body flex justify-around w-[100%] items-center py-2">
          <section className="flex items-center gap-3">
            <img
              src={logo}
              className={`${screenWidth > 700 ? "w-[50px]" : "w-[35px]"}`}
              alt="logo"
            />
            <img
              src={logo2}
              className={`${screenWidth > 700 ? "w-[120px]" : "w-[90px]"}`}
              alt="logo"
            />
          </section>
          {screenWidth > 700 ? (
            <section className="flex items-center gap-2">
              <input
                type="text"
                className="p-2 border-2 rounded-md"
                name=""
                id=""
                placeholder="Search here..."
              />
              <button>
                <i className="fa-solid fa-magnifying-glass bg-blue-500 p-3 rounded-md"></i>
              </button>
            </section>
          ) : (
            ""
          )}
          <section className="flex items-center gap-3">
            <span className="relative">
              <span className="material-symbols-outlined align-middle cursor-pointer">
                shopping_cart
              </span>
              <span className="bg-red-500 cursor-pointer text-slate-100 absolute rounded-full w-[18px] h-[22px] top-[-10px] right-[-5px] text-center">
                0
              </span>
            </span>
            <span className="material-symbols-outlined cursor-pointer">
              notifications
            </span>
            <span className="material-symbols-outlined">account_circle</span>
          </section>
        </section>
        {screenWidth < 700 ? (
          <section className="flex justify-center w-[100%]">
            <section className="flex items-center justify-center">
              <input
                type="text"
                className="w-[70%] p-2 mr-2 border-2 rounded-md"
                name=""
                id=""
                placeholder="Search here..."
              />
              <button>
                <i className="fa-solid fa-magnifying-glass bg-blue-500 p-3 rounded-md"></i>
              </button>
            </section>
          </section>
        ) : (
          ""
        )}
      </nav>
    </>
  );
}

export default Navbar;

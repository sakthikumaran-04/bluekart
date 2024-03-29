import React from "react";
import mensIcon from "../assets/mens_cloth.png";
import womensIcon from "../assets/womens_cloth.png";
import electronicsIcon from "../assets/electronics.svg";
import jewelIcon from "../assets/jewel.svg";
import "./IconCategory.css";
function IconCategory() {
  return (
    <section className="px-10 py-10 font-body">
      <h2 className="text-3xl underline decoration-blue-500 underline-offset-4 py-6 p-4 text-center mb-2 font-medium">
        Categories
      </h2>
      <div className="flex items-center justify-around flex-wrap gap-4 max-sm:zoom">
        <div className="border-2 rounded-md w-[150px] max-sm:w-[110px] flex flex-col items-center justify-center max-sm:h-[140px] h-[150px] text-lg cursor-pointer md:hover:scale-110">
          <img src={mensIcon} className="w-[100px] p-2 " alt="" />
          <h3>Men's</h3>
        </div>
        <div className="border-2 rounded-md w-[150px] max-sm:w-[110px] flex flex-col items-center justify-center max-sm:h-[140px] h-[150px] text-lg cursor-pointer md:hover:scale-110">
          <img src={womensIcon} className="w-[100px] p-5" alt="" />
          <h3>Women's</h3>
        </div>
        <div className="border-2 rounded-md w-[150px] max-sm:w-[110px] flex flex-col items-center justify-center max-sm:h-[140px] h-[150px] text-lg cursor-pointer md:hover:scale-110">
          <img src={electronicsIcon} className="w-[100px] p-2" alt="" />
          <h3>Electronics</h3>
        </div>
        <div className="border-2 rounded-md w-[150px] max-sm:w-[110px] flex flex-col items-center justify-center max-sm:h-[140px] h-[150px] text-lg cursor-pointer md:hover:scale-110">
          <img src={jewelIcon} className="w-[100px] p-2" alt="" />
          <h3>Jewelry</h3>
        </div>
      </div>
    </section>
  );
}

export default IconCategory;

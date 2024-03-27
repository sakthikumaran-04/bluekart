import React from "react";

function CurrentOffer() {
  return (
    <div className="py-6 w-full font-body">
      <h2 className="py-5 text-3xl text-center underline underline-offset-4 decoration-red-500 font-medium">
        Exclusive
      </h2>
      <div className="text-center flex flex-col justify-center items-center">
        <img
          className="w-[280px] h-[200px] object-contain p-3"
          src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
          alt=""
        />
        <h4 className="text-xl font-semibold py-3">QLED Gaming Monitor</h4>
        <h3 className="text-lg text-slate-600 px-4">
          Exclusive offers on ultra wide Gaming monitors
        </h3>
        <div>
          <button className="flex items-center justify-around gap-3 p-3 m-4 px-20 bg-blue-500 rounded-lg text-lg font-medium">
            Shop Now{" "}
            <span className="material-symbols-outlined">add_shopping_cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CurrentOffer;

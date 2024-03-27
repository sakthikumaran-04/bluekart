import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300 font-body grid grid-cols-2 text-center p-5 gap-4">
      <div className="flex-1">
        <h3 className="font-medium text-lg">Shop</h3>
        <p className="cursor-pointer">Men's</p>
        <p className="cursor-pointer">Women's</p>
        <p className="cursor-pointer">Electronics</p>
        <p className="cursor-pointer">Jewelry</p>
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-lg">Help</h3>
        <p className="cursor-pointer">Contact us</p>
        <p className="cursor-pointer">FAQ</p>
        <p className="cursor-pointer">Copyright</p>
      </div>
      <div className="flex gap-1 items-center justify-center">
        <i class="fa-brands fa-square-instagram text-3xl cursor-pointer active:text-slate-500"></i>
        <i class="fa-brands fa-square-facebook text-3xl cursor-pointer active:text-slate-500"></i>
        <i class="fa-brands fa-square-x-twitter text-3xl cursor-pointer active:text-slate-500"></i>
        <i class="fa-brands fa-linkedin text-3xl cursor-pointer active:text-slate-500"></i>
        <i class="fa-brands fa-square-github text-3xl cursor-pointer active:text-slate-500"></i>
      </div>
      <p>*Terms & conditions</p>
    </footer>
  );
}

export default Footer;

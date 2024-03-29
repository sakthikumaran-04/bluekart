import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300 font-body grid grid-cols-2 text-center p-5 gap-4">
      <div className="flex-1">
        <h3 className="font-medium text-lg">Shop</h3>
        <p className="cursor-pointer text-sm">Men's</p>
        <p className="cursor-pointer text-sm">Women's</p>
        <p className="cursor-pointer text-sm">Electronics</p>
        <p className="cursor-pointer text-sm">Jewelry</p>
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-lg">Help</h3>
        <p className="cursor-pointer text-sm">Contact us</p>
        <p className="cursor-pointer text-sm">FAQ</p>
        <p className="cursor-pointer text-sm">Copyright</p>
      </div>
      <div className="flex gap-1 items-center justify-center">
        <i class="fa-brands fa-square-instagram text-3xl cursor-pointer active:text-slate-500"></i>
        <i class="fa-brands fa-square-facebook text-3xl cursor-pointer active:text-slate-500"></i>
        <i class="fa-brands fa-square-x-twitter text-3xl cursor-pointer active:text-slate-500"></i>
        <i class="fa-brands fa-linkedin text-3xl cursor-pointer active:text-slate-500"></i>
        <i class="fa-brands fa-square-github text-3xl cursor-pointer active:text-slate-500"></i>
      </div>
      <p className="text-sm pt-2">*Terms & conditions</p>
    </footer>
  );
}

export default Footer;

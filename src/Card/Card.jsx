import React from "react";

function Card(props) {
  return (
    <div className="w-[220px]">
      {props.label && (
        <span className="material-symbols-outlined bg-blue-500 p-1 rounded-lg">
          trending_up
        </span>
      )}
      <div className="flex items-center justify-center">
        <img
          className="w-[150px] h-[200px] object-contain p-3"
          src={props.image}
          alt="image"
        />
      </div>
      <div>
        <h2 className="py-1 text-lg text-slate-700 text-ellipsis w-[220px] h-[28px] whitespace-nowrap overflow-hidden">
          {props.title}
        </h2>
        <h4 className="py-1 text-sm text-slate-400 text-ellipsis text-center line-clamp-3">
          {props.description}
        </h4>
      </div>
      <div className="flex items-center justify-between px-2 p-2">
        <h3 className="text-lg">{`$${props.price}`}</h3>
        <div className="flex gap-2">
          <button className="bg-blue-500 p-2 flex rounded-lg">
            <span className="material-symbols-outlined">favorite</span>
          </button>
          <button className="bg-blue-500 p-2 flex rounded-lg">
            <span className="material-symbols-outlined">add_shopping_cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

import React from "react";
import { useState, useEffect } from "react";
import Card from "../Card/Card";

function Popular() {
  const [popular, setPopular] = useState([]);
  const getPopularItems = async () => {
    let res = await fetch(
      `https://fakestoreapi.com/products/category/electronics`
    );
    let data = await res.json();
    setPopular((prev) => data);
  };
  useEffect(() => {
    getPopularItems();
  }, []);

  return (
    <div className="font-body py-5">
      <h2 className="py-5 text-3xl text-center underline underline-offset-4 decoration-blue-500 font-medium">
        Popular
      </h2>
      <div className="flex items-center justify-center p-4">
        <div className="flex gap-8 px-6 overflow-scroll p-4 ">
          {popular.map((item) => {
            return (
              <Card
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Popular;

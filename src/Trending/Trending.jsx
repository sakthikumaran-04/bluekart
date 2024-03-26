import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

function Trending() {
  const [trending, setTrending] = useState([]);

  const getTrendingItems = async () => {
    let res = await fetch(`https://fakestoreapi.com/products?limit=5`);
    let data = await res.json();
    setTrending((prev) => data);
  };
  useEffect(() => {
    getTrendingItems();
  }, []);

  return (
    <div className="font-body py-5">
      <h2 className="py-5 text-3xl text-center underline underline-offset-4 decoration-red-500 font-medium">
        Trending
      </h2>
      <div className="flex items-center justify-center">
        <div className="flex gap-8 px-6 overflow-scroll p-4 ">
          {trending.map((item) => {
            return (
              <Card
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                price={item.price}
                label={1}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Trending;

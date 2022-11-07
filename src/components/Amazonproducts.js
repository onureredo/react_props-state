import React, { useState } from "react";
import { products } from "../utils/utils";

const State = () => {
  
  const [price, setPrice] = useState(0);
  const [start, setStart] = useState(0);


  const handleInput = (e) => setPrice(e.target.value);

  const previous = () => setStart((prev) => prev - 3);
  const next = () => setStart((prev) => prev + 3);

  

  return (
    <div className="container">
      <div className="range">
      {/* RANGE INPUT TO FILTER THROUGH PRICES */}
        <input type="range" onInput={handleInput} max={200}></input>
        <h3>Filter by: $ {price}</h3>
      </div>

      {/* PRODUCT CONTAINER | METHODS: filter, slice & map */}
      <div className="product_container">
        <button id="btn_show" onClick={previous} disabled={start === 0}>◀</button>        

        {
        products
          .filter((product) => {
            return product.price > parseInt(price, 0);
          })
          .slice(start, start + 3)
          .map((product) => {
            return (
              <div className="products" key={product.id}>
                <h1>{product.title}</h1>
                <img src={product.image} alt="" />
                <h3>{product.description}</h3>
                <h4>Price: $ {product.price}</h4>
              </div>
            );
          })}
        <button id="btn_show" onClick={next} disabled={start === products.length - 1}>▶</button>
        
      </div>      
    </div>
  );
};

export default State;

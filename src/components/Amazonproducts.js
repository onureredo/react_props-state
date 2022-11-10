import React, { useState } from "react";
import { products } from "../utils/utils";

const Amazonproducts = () => {

  const [start, setStart] = useState(0);  
  const [price, setPrice] = useState(0);
  
  const prev = () => setStart((prev) => prev - 3);
  const next = () => setStart((prev) => prev + 3);
  
  const priceFilter = (e) => setPrice(e.target.value);  

  return (
    <div className="container">
      {/* RANGE INPUT TO FILTER PRICES */}
      <div className="range">
        <input type="range" onInput={priceFilter} max={200}></input>
        <h3>$ {price}</h3>
      </div>

      {/* PRODUCT CONTAINER | METHODS: map, slice & filter */}
      <div className="product_container">
        <button id="btn_show" onClick={prev} disabled={start === 0}>◀</button>        

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
                <h3>Price: $ {product.price}</h3>
              </div>
            )
          })
          }
        <button id="btn_show" onClick={next} disabled={start === products.length - 1}>▶</button>        
      </div>      
    </div>
  )
};

export default Amazonproducts

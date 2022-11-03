import React, { useState } from "react";
import { inventory } from "../utils/utils";

const State = () => {
  const [products] = useState(inventory);
  const [price, setPrice] = useState(0);
  const [start, setStart] = useState(0);

  const previous = () => start !== 0 && setStart((prev) => prev - 3);

  const next = () => setStart((prev) => prev + 3);

  const handleInput = (e) => setPrice(e.target.value);

  return (
    <div className="container">
      <div className="range">
        <input type="range" onInput={handleInput} max={250}></input>
        <h3>Sort by: $ {price}</h3>
      </div>
      <div className="product_container">
        <button id="btn_show" onClick={previous} disabled={start === 0}>
          ◀
        </button>
        {/* onClick={() => changeProduct()} */}

        {products
          .filter((product) => {
            return product.price > parseInt(price, 0);
          })
          .slice(start, start + 3)
          .map((product) => {
            return (
              <div className="products" key={product.id}>
                <h1>{product.title}</h1>
                <img src={product.image} />
                <h3>{product.description}</h3>
                <h4>Price: $ {product.price}</h4>
              </div>
            );
          })}
        <button id="btn_show" onClick={next} disabled={start === products.length - 1}
        >
          ▶
        </button>
        {/* onClick={() => changeProduct()}  */}
      </div>
      <div className="addItem"></div>
    </div>
  );
};

export default State;

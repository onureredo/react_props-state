import React, { useState } from 'react'
import echo from '../assets/images/echo.png'
import firestick from '../assets/images/firestick.png'
import smartled from '../assets/images/smartled.png'

function State() {

  const [price, setPrice] = useState(50);

  const handleInput = (e) => {
    setPrice(e.target.value);
  };
    
    const products = [
      { id: 1,
        title: "Amazon Echo",
        image: <img src={echo}/>,
        description: 'YOUR HOME ASSISTANT',
        price: 59.99,    
      },
      { id: 2,
        title: "Amazon Firestick",
        image: <img src={firestick}/>,
        description: 'YOUR HOME ASSISTANT',
        price: 84.99,    
      },
      
      { id: 3,
        title: "Smart LED Light Bar",
        image: <img src={smartled} alt="" />,
        description: 'WORK WITHS ALEXA AND GOOGLE',
        price: 74.99,    
      }     
    ];

    return (
      <div className='container'>        
        <div className="range">
          <input orient="vertical" type="range" onInput={handleInput}></input>
          <h3>Sort by: $ {price}</h3>
        </div>
        <div className="product_container">
        <button  id="btn_show">◀</button>
        {/* onClick={() => changeProduct()} */}
          {
          products.filter((product) => {
            return product.price > parseInt(price, 0);
          })
          .map((product) => {
            return (
              <>
                <div className='products'>
                  <h1 key={product.id}> {product.title} </h1>
                  {product.image}
                  <h3>{product.description}</h3>
                  <h3>Price: $ {product.price}</h3>                  
                </div>
              </>
            )
          })
        }
        <button id="btn_show">▶</button>
        {/* onClick={() => changeProduct()}  */}
        </div>    
        
    </div>
      
      
      
      
    )
  }

export default State





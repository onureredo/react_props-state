import React from 'react'

function Amazonproduct(props) {
  
  // Destructing
  // const {title, image, description, price} = props;
    
  return (
    <div className='products'>  
        <h2>{props.title}</h2>
        <img src={props.image} alt=""/>        
        <h3>{props.description}</h3>
        <h3>Price : {props.price} €</h3>        
    </div>
  )
}

export default Amazonproduct
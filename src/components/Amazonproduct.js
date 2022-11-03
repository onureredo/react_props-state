import React from 'react'

function Amazonproduct(props) {  
  // Destructing
  // const {title, image, description, price} = props;
    
  return (
    <div id='prime'>  
        <h1>{props.title}</h1>
        <img src={props.image} alt=""/>        
        <h3>{props.description}</h3>
        <h3>{props.price}</h3>        
    </div>
  )
}

export default Amazonproduct
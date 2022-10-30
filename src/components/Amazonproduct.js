import React from 'react'

function Amazonproduct(props) {
    
  return (
    <div>  
        <h2>{props.title}</h2>
        <img src={props.image} alt=""/>        
        <h3>{props.description}</h3>
        <h3>Price : {props.price} €</h3>
        <hr/>
    </div>
  )
}

export default Amazonproduct
import React from 'react'

function Amazonproduct(props) {
    
  return (
    <div>  
        <h2>{props.title}</h2>
        <img src={props.image}/>        
        <h4>{props.description}</h4>
        <h4>Price: {props.price} €</h4>
        <hr/>
    </div>
  )
}

export default Amazonproduct
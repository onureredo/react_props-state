import React, { Component } from 'react'

class Anothercomponent extends Component {
  render() {
    // Destruction
    const {title, name, job, image, comment} = this.props;

    return (
      <div className="person">  
        <h2>{title}</h2>
        <h3>{name}</h3>
        <h4>{job}</h4>
        <img src={image} alt=""/>        
        <h4>{comment}</h4>
        <hr/>
    </div>
    )
  }
}

export default Anothercomponent

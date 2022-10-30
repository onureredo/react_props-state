import React, { Component } from 'react'

export default class Anothercomponent extends Component {
  render() {
    // Destruction
    const {title, name, job, image, info} = this.props;

    return (
      <div className="person">  
        <h2>{title}</h2>
        <h3>{name}</h3>
        <h4>{job}</h4>
        <img src={image} alt=""/>        
        <h4>{info}</h4>
        <hr/>
    </div>
    )
  }
}

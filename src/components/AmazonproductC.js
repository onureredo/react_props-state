import React, { Component } from 'react'

class AmazonproductC extends Component {
  render(props) {
    //Destructing
    // const {title} = this.props;
    
    return (
      <div>
        <h1 id='title'>{this.props.title}</h1>
      </div>
    )
  }
}

export default AmazonproductC

import React, { Component } from 'react'

class Anothercomponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isVisible : false
    }
  }

  showEmployee = (e) => {
   this.setState({
    isVisible : !this.state.isVisible
   })
  }
  
  render() {
    // Destruction
    const {title, name, job, image, comment} = this.props;
    const {isVisible} = this.state;
    
    return (
      <div>
        {
          isVisible ? 
          <div className="person">
            <h2>{title}</h2>
            <h3>{name}</h3>
            <h5>{job}</h5>
            <img id="joey" src={image} alt=""/>        
            <h4>{comment}</h4>            
          </div> : null
        }

        <button          
          onClick={this.showEmployee}
          id="btn_show" 
          title="Show Employee of the Month">👀
      </button>
        
    </div>
    )
  }
}

export default Anothercomponent

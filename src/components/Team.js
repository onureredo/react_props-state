import React, { Component } from 'react'
import joey from '../images/minion.png'
import bob from '../images/minion2.png'
class Team extends Component {

  constructor() {
    super()    
    this.state = {
      title: "Meet Our Team" , 
      name: "Bob",
      job: "Junior Web Developer!",
      image: <img id="bob"src={bob} alt="" /> ,
      comment: "Let's code together folks!"

    }
  }

  changeEmployee() {
    this.setState({
      title: "Meet Our Team" , 
      name: "Joey",
      job: "Functional Tester",
      image: <img id="joey"src={joey} alt="" /> ,
      comment: 'I found another bug! BOOOB!'
      
    })
  }
 
  render() {
    // Destruction
    // const {title, name, job, image, comment} = this.state;

    return ( 
      <div className="person">          
        <h1 id="ph1">{this.state.title}</h1>        
        <h2>{this.state.name}</h2>
        <h2>{this.state.image}</h2> 
        <h2>{this.state.job}</h2>
        <h3>{this.state.comment}</h3>

        <button          
          onClick={() => this.changeEmployee()}
          id="btn_show" 
          title="Next">NEXT▸
        </button>
      </div>
    )
  }
}

export default Team

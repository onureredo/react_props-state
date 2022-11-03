import React, { Component } from 'react'
import bob from '../assets/images/minion2.png'
import kevin from '../assets/images/minion.png'
class Team extends Component {

  constructor() {
    super()    
      this.state = ({
        title: "Meet Our Team" , 
        name: "Bob",
        job: "Junior Web Developer!",
        image: <img id="bob"src={bob} alt="" /> ,
        comment: "Let's code together folks! 💻"
      });
  }

  nextEmployee() {
    this.setState({      
      name: "Kevin",
      job: "Functional Tester",
      image: <img id="kevin"src={kevin} alt="" /> ,
      comment: 'Another bug... BOOOB! 😡😡😡' 
    });
  }

  prevEmployee() {
    this.setState({
      title: "Meet Our Team" , 
      name: "Bob",
      job: "Junior Web Developer!",
      image: <img id="bob"src={bob} alt="" /> ,
      comment: "Let's code together folks! 💻"
    });
  }
    
  render() {
    // Destruction
    // const {title, name, job, image, comment} = this.state;

    return ( 
      <div className='team_container'>
        <div>
          <button onClick={() => this.prevEmployee()} 
                  id="btn_show" 
                  title="Previous">◀</button>
        </div>
      <div className="person">  
        <h1>{this.state.title}</h1>        
        <h2>{this.state.name}</h2>
        <h2>{this.state.image}</h2> 
        <h2>{this.state.job}</h2>
        <h3>{this.state.comment}</h3>
      </div>
        <div>
          <button onClick={() => this.nextEmployee()} 
                  id="btn_show" 
                  title="Next">▶</button>
        </div>      
      </div>
    )
  }
}

export default Team

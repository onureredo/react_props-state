import React, {useState} from 'react'

function Team() {
    const [team, setTeam] = useState({
        title: "Meet Our Team",
        name: "Bob",
        image: "/images/bob.png",
        job: "Junior Web Developer",
        comment: `" Let's code together 💻" `
    });

    const next = () => {
        setTeam(previousState => {
            return {...previousState,                
                name: "Kevin",
                image: "/images/kevin.png",
                job: "Functional Tester",
                comment: `"Another bug... 😡😡😡"`
            }
          })
        };

  return (
    <div className='team_container'>        
        <div className='person'>
            <h1>{team.title}</h1>
            <h2>{team.name}</h2>
            <img src={team.image} id={team.name.toLowerCase()} alt=""/>
            <h3>{team.job}</h3>
            <h4>{team.comment}</h4>
        </div>
        <button onClick={next} id="btn_show">NEXT</button>
    </div>
  )
}

export default Team
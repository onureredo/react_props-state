import React, {useState} from 'react'

function Team() {
    const [team, setTeam] = useState({
        title: "Meet Our Team",
        name: "Bob",
        image: "/images/bob.png",
        job: "Junior Web Developer",
        comment: `" Let's code together 💻" `
    });

    //Prev state
    const prev = () => {
        setTeam({
            title: "Meet Our Team",
            name: "Bob",
            image: "/images/bob.png",
            job: "Junior Web Developer",
            comment: `" Let's code together 💻" `
        });
      };

    const next = () => {
        setTeam(previousState => {
            return {...previousState,                
                name: "Kevin",
                image: "/images/kevin.png",
                job: "Functional Tester",
                comment: "Another bug... BOOOB! 😡😡😡"
            }
        });
      };

  return (
    <div className='team_container'>
        <button onClick={prev} id="btn_show">◀</button>
        <div className='person'>
            <h1>{team.title}</h1>
            <h2>{team.name}</h2>
            <img src={team.image} alt=""/>
            <h2>{team.job}</h2>
            <h3>{team.comment}</h3>
        </div>
        <button onClick={next} id="btn_show">▶</button>
    </div>
  )
}

export default Team
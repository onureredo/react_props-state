import React, {useState} from 'react'

function Firststeps() {

    const [color, setColor] = useState("Black");
    // const [brand, setBrand] = useState("Ford");
    // const [model, setModel] = useState("Mustang");
    // const [year, setYear] = useState("1964");

//OR WE CAN JUST USE ONE STATE AND INCLUDE ALL OF THESE AS AN OBJECT
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: 1964,
        color: "red"
      });

//UPDATING OBJECTS IN STATE
      const updateCar = () => {
        setCar(prevState => {
          return {
            ...prevState,
            color: "Black",            
          }
        })
      }

    return (   
        <div>
            {/* FIRST EXAMPLE */}
            <h1>My favorite Color is {color}!</h1>
            <button id="btn_show" onClick={() => setColor("Red")}>RED</button>            

            {/* SECOND EXAMPLE  */}
            <h1>My car is {car.brand} and It is a {car.color} {car.model} from {car.year}</h1>

            {/* UPDATING ARRAY OBJECTS IN STATE WITHOUT SPREAD OPERATOR WOULD BE LIKE:*/}
            <button id="btn_show" onClick={() => setCar({color: "blue"})}>UPDATE</button>

            {/* WITH SPREAD OPERATOR: */}
            <button id="btn_show" onClick={updateCar}>UPDATE AGAIN</button>
        </div>
      )
    }

export default Firststeps
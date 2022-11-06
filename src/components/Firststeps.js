import React, {useState} from 'react'

function FavoriteColor() {
    // FIRST EXAMPLE
    const [color, setColor] = useState("Black");

    // SECOND EXAMPLE    
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");

    // THIRD EXAMPLE
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: 1964,
        color: "red"
      });

      // FOURTH EXAMPLE UPDATING OBJECTS AND ARRAYS IN STATE
      const updateCar = () => {
        setCar(previousState => {
          return {...previousState, color: "Yellow", year: 1968}
        });
      }

    return (   
        <div>
            {/* FIRST EXAMPLE */}
            <h1>My favorite Color is {color}!</h1>
            <button onClick={() => setColor("Red")}>Red</button>
            <button onClick={() => setColor("Blue")}>Blue</button>

            {/* SECOND EXAMPLE */}
            <h1>My car is {brand}</h1>
            <p>It is a {color} {model} from {year}.</p>

            {/* THIRD EXAMPLE  */}
            <h1>My car is {car.brand}</h1>
            <p> It is a {car.color} {car.model} from {car.year}.</p>

            {/* FOURTH EXAMPLE UPDATING OBJECTS AND ARRAYS IN STATE */}
            <button type="button" onClick={updateCar}>UPDATE</button>
        </div>
  )
}

export default FavoriteColor












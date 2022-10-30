import './App.css';
import Amazonproduct from './components/Amazonproduct';
import Anothercomponent from './components/Anothercomponent';
import echo from './images/amazonecho.png';
import firestick from './images/firestick.png';
import firehd from './images/firehd.png';
import minion from './images/minion.png';


function App() {
  return (
    <div className="App">
      <h1>AMAZON PRIME SALE</h1>
      
      <Amazonproduct
        title="Amazon Echo"
        description="Your Home Assistant"
        image={echo}
        price={74.99}
        />

        <Amazonproduct
        title="Amazon Fire Stick 4K"
        description="Stream in 4K"
        image={firestick}
        price={59.99}
        />

        <Amazonproduct
        title="Amazon Fire HD 10' Tablet"
        description="12 Hours Battery!"
        image={firehd}
        price={100.99}
        />

        <Anothercomponent 
        title="Employee of the Month"
        name="Joey"
        job="JR Web-Developer"
        image={minion}   
        info="I try to be Creative..."
        />


    </div>
  );
}

export default App;

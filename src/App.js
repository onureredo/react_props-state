import './App.css';
import Amazonproduct from './components/Amazonproduct';
import EmployeeOfMonth from './components/EmployeeOfMonth';
import echo from './images/amazonecho.png';
import firestick from './images/firestick.png';
import firehd from './images/firehd.png';
import minion from './images/minion.png';


function App() {
 
  return (
    <div className="App">
      <h1>AMAZON PRIME SALE !</h1>

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
        description="12 Hours Battery"
        image={firehd}
        price={100.99}
      />

<EmployeeOfMonth 
        title="Employee of the Month"
        name="Joey"
        job="JR Web-Developer"
        image={minion}   
        comment='„I love working with ReactJS... “'
      />

      <button 
          onClick={() => {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
          }}
          id="btn_top" 
          title="Scroll to Top">▲
      </button>
      <button 
          onClick={() => {
            window.scrollTo({top: 5000, left: 0, behavior: 'smooth'});
          }}
          id="btn_down" 
          title="Scroll to Bottom">▼
      </button>
    
    </div>
  );
}

export default App;

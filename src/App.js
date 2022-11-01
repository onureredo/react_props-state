import './App.css';
import Amazonproduct from './components/Amazonproduct';
import AmazonproductC from './components/AmazonproductC';
import Team from './components/Team';
import echo from './assets/images/amazonecho.png'
import firestick from './assets/images/firestick.png'
import firehd from './assets/images/firehd.png'

function App() {
 
  return (
    <div className="App">

      <AmazonproductC 
        title="AMAZON PRIME SALE ! "
      />

      <AmazonproductC
        title="BIG DISCOUNT!!!"
      />    
            
      <Amazonproduct
        title="Amazon Echo"
        description="Your Home Assistant"
        image={echo}
        price='$ 74,99'
      />

      <Amazonproduct
        title="Amazon Fire Stick 4K"
        description="Stream in 4K"
        image={firestick}
        price='$ 59,99'
      />

      <Amazonproduct
        title="Amazon Fire HD 10' Tablet"
        description="12 Hours Battery"
        image={firehd}
        price='$ 100,99'
      /> 

      <Team />

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

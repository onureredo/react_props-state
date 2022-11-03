import './App.css';
import Amazonproduct from './components/Amazonproduct'
import State from './components/State';
import Team from './components/Team'
// import Scrollbutton from './components/Scrollbutton'

function App() {
 
  return (
    <div className="App">
      <Amazonproduct
        title="AMAZON PRIME SALE !"
      />

      <State />
      <Team />
      {/* <Scrollbutton /> */}


    </div>
  );
}

export default App;

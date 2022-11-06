import Firststeps from './components/Firststeps';
import State from './components/State';
import Team from './components/Team'
import './App.css';


function App() {
 
  return (
    <div className="App">
      <div id='prime'><h1>AMAZON PRIME SALE !</h1></div>

      <State />
      <Team />
      <Firststeps />
      
    </div>
  );
}

export default App;

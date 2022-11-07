import Firststeps from './Components/Firststeps';
import State from './Components/State';
import Team from './Components/Team'
import './App.css';
import Searchbar from './Components/Searchbar';


function App() {
 
  return (
    <div className="App">
      <div id='prime'><h1>AMAZON PRIME SALE !</h1></div>

      <Searchbar placeholder="What are you looking for?" />
      <State />
      <Team />
      <Firststeps />

      
    </div>
  );
}

export default App;

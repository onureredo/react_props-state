import Firststeps from './Components/Firststeps';
import Amazonproducts from './Components/Amazonproducts';
import Team from './Components/Team'
import Searchbar from './Components/Searchbar'
import Scrollbutton from './Components/Scrollbutton'
import './App.css';

function App() {
 
  return (
    <div className="App">
       <h1 id="prime">AMAZON PRIME SALE !</h1>
    
      {/* <Searchbar /> */}
      <Amazonproducts />
      <Team />
      <Scrollbutton />
    </div>
  );
}

export default App;
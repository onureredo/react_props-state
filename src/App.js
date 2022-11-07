import Firststeps from './Components/Firststeps';
import Amazonproducts from './Components/Amazonproducts';
import Team from './Components/Team'
import './App.css';



function App() {
 
  return (
    <div className="App">
      <h1 id='prime'>AMAZON PRIME SALE !</h1>
      
      <Amazonproducts />
      <Team />

    </div>
  );
}

export default App;

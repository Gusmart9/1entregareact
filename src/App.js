import ItemlistContainer from '../src/Components/ItemListContainer';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemlistContainer greeting="Esta es mi Tienda"/>
    </div>
  );
}

export default App;

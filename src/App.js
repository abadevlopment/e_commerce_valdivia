import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App" id="App" >            
      <Navbar />
      <ItemListContainer greeting="Bienvenido a TIENDA MIA, tu e-commerce de confianza" />      
    </div>
  );
}
export default App;

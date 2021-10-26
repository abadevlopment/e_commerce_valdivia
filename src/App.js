import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  let saludo = 'hola mundo'
  return (
    <>            
      <Navbar />
      <ItemListContainer greeting="Bienvenido a TIENDA MIA, tu e-commerce de confianza" />      
    </>
  );
}

export default App;


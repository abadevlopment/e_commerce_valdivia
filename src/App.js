import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer' ;
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartContextProvider  from './Context/CartContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App" id="App" >            
          <Navbar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer greeting="Bienvenido a tu e-commerce de confianza" />} />
            <Route exact path='/category/:categoryID' element={<ItemListContainer greeting="Bienvenido a tu e-commerce de confianza" />} />
            <Route exact path='/detail/:ID' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={ <Cart/> } />
          </Routes>            
        </div>
      </BrowserRouter>
    </CartContextProvider>

  );
}
export default App;

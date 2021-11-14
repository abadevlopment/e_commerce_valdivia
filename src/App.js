import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App" id="App" >            
        <Navbar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer greeting="Bienvenido a tu e-commerce de confianza" />} />
          <Route exact path='/category/:categoryID' element={<ItemListContainer greeting="Bienvenido a tu e-commerce de confianza" />} />
          <Route exact path='/detail/:ID' element={<ItemDetailContainer />} />
        </Routes>            
      </div>
    </BrowserRouter>
  );
}
export default App;

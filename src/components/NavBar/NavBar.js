import CartWidget from "../CartWidget/CartWidget";
import './NavBar.scss'
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <section id="header" className="fixed-top" >
            <Link id='divLogo' to='/'>
                <div  id="logo" ><img src='https://res.cloudinary.com/dvinxey2w/image/upload/v1636744931/ARDUINO/microchip_iwk9nc.png' alt='---' /></div>
                <div id="brand" ><p>ELECT-STORE</p></div>
            </Link>
            
            <div id="divInicio" >
                <Link id="inicio"  className="btn btn-primary" to='/'>
                    INICIO
                </Link>
            </div>
            <div id="divOpc" className="dropdown" >
                <button className="btn btn-primary dropdown-toggle" type="button" id=" opciones dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    CATEGORIAS
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <Link className="dropdown-item" to='/'> Inicio </Link>
                    <Link className="dropdown-item" to='/category/Tarjetas'> Tarjetas </Link>
                    <Link className="dropdown-item" to='/category/Kits'> Kits </Link>
                    <Link className="dropdown-item" to='/category/Robotica'> Robótica </Link>
                </div>
            </div>
            <div id="divCart" >
                <CartWidget />
            </div>
        </section>

    );
}
  export default NavBar
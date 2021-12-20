import CartWidget from '../CartWidget/CartWidget';
import './NavBar.scss'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary '>
            <div className='container-fluid d-flex'>
                <Link to='/' className='navbar-brand ' >
                    <img src='https://res.cloudinary.com/dvinxey2w/image/upload/v1638936956/ARDUINO/circuit_mq7718.png' alt='logo' className='d-inline-block align-text-top img-fluid'/>
                    ABA - STORE
                </Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                    <div className='navbar-nav'>
                        <Link className='btn btn-primary' to='/'>INICIO</Link>
                        <div className='nav-item dropdown'>
                            <button className='btn btn-primary dropdown-toggle' type='button' id='dropdownMenuButton1' data-bs-toggle='dropdown' aria-expanded='false'>
                                CATEGORIAS
                            </button>
                            <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                                <li><Link className='dropdown-item' to='/category/Tarjetas_Originales'> Tarjetas Originales</Link></li>
                                <li><Link className='dropdown-item' to='/category/Tarjetas_Compatibles'> Tarjetas Compatibles </Link></li>
                                <li><Link className='dropdown-item' to='/category/Kits'> Kits </Link></li>
                                <li><Link className='dropdown-item' to='/category/Robotica'> Robótica </Link></li>
                                <li><Link className='dropdown-item' to='/category/Accesorios'> Accesorios </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='d-flex'>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    );
}
export default NavBar
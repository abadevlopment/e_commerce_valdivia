import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
            <div className="container-fluid">
                <a  className="navbar-brand" href="#">
                    <img src="" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
                    ELECT-COMMERCE
                </a>
                    <div className=" navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav flex-row justify-content-around container">
                            <a className="nav-link active" aria-current="page" href="#">INICIO</a>
                            <a className="nav-link" href="#">CATALOGO</a>
                            <a className="nav-link" href="#">PROMOCIONES</a>
                            <CartWidget />
                        </div>
                    </div>
            </div>
        </nav>
    );
}
  export default NavBar
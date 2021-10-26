import CartWidget from "../CartWidget/CartWidget";

let styleTitulo = {
    fontSize: '4vh',
    fontWeight: 'bolder',
    color: 'white'
}
let styleMenu = {
    fontSize: '2vh',
    fontWeight: 'bolder',
    color: 'white'
}

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <a style={styleTitulo} className="navbar-brand" href="#">TIENDA MIA</a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a style={styleMenu}  className="nav-link active" aria-current="page" href="#">INICIO</a>
                            <a style={styleMenu}  className="nav-link" href="#">CATALOGO</a>
                            <a style={styleMenu}  className="nav-link" href="#">PROMOCIONES</a>
                        </div>
                    </div>
            </div>
            <CartWidget />
        </nav>
        
    );
}
  
  export default NavBar
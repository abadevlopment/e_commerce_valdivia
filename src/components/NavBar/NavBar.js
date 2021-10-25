function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">TIENDA MIA</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <h1>hola</h1>
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">INICIO</a>
                        <a className="nav-link" href="#">CATALOGO</a>
                        <a className="nav-link" href="#">PROMOCIONES</a>
                        </div>
                    </div>
            </div>
        </nav>
        
    );
}
  
  export default NavBar
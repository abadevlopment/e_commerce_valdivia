import Cart from './Cart.png'

let styleCart = {
    height: '4vh'
}

function CartWidget() {
    return (
        <div style={{marginRight: '2vw'}} class="dropdown">
            <button style={{backgroundColor: 'white'}} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <img style={styleCart} src={Cart} className="Cart-logo" alt="Cart" />
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Prueba1</a></li>
                <li><a class="dropdown-item" href="#">Prueba2</a></li>
                <li><a class="dropdown-item" href="#">Prueba3</a></li>
            </ul>
        </div>
    );
}
  export default CartWidget
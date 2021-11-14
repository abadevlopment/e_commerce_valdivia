import Cart from './Cart.png'

function CartWidget() {
    return (
        <div style={{marginRight: '2vw'}} className="dropdown">
            <button style={{backgroundColor: 'white'}} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <img style={ {height: '4vh'} } src={Cart} className="Cart-logo" alt="Cart" />
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
            </ul>
        </div>
    );
}
  export default CartWidget
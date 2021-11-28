import Cart from './Cart.png'
import { Link } from 'react-router-dom';
import {  useCartContext } from '../../Context/CartContext'

function CartWidget() {
    const {cartList, itCount} = useCartContext()

        // { () ?  true : false   }
    return (
        <>
            {(cartList.length > 0) ?
                <Link to='/cart'>
                    <button style={{backgroundColor: 'white'}} className="btn btn-secondary " type="button" >
                    <img style={ {height: '4vh'} } src={Cart} className="Cart-logo" alt="Cart" />
                    <span style={{color: 'black'}} > {itCount} </span>
                    </button>
                </Link>
            :
                <>
                </>
            }
        </> 
    );
}
  export default CartWidget
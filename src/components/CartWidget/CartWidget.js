import Cart from './Cart.png'
import { Link } from 'react-router-dom';
import {  useCartContext } from '../../Context/CartContext'
import { useState, useEffect } from 'react';

function CartWidget() {
    const {cartList} = useCartContext()

    const [wCount, setWCount] = useState(0)

    useEffect( () => {
        const handleWcount = () => {
            const Total = cartList.map( (sbt) => (sbt.qty))
            .reduce((previous, current) => {
                return previous + current;
            },0)
            setWCount(Total)
        }
        handleWcount()

    } )
        // { () ?  true : false   }
    return (
        <>
            {(cartList.length > 0) ?
                <Link to='/cart'>
                    <button style={{backgroundColor: 'white'}} className="btn btn-secondary " type="button" >
                    <img style={ {height: '4vh'} } src={Cart} className="Cart-logo" alt="Cart" />
                    <span style={{color: 'black'}} >{wCount}</span>
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
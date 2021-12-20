import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext'

function CartSummary() {
    const {cartList, total, itCount, clearCart, removeItem} = useCartContext()

    return (
        <>
            <thead>
                <tr>
                    <th scope='col' colSpan='5'><h3 >CARRITO DE COMPRAS</h3></th>
                </tr>
            </thead>
            <thead>
                <tr>
                    <th scope='col'>Producto</th>
                    <th scope='col'>Precio Unitario</th>
                    <th scope='col'>Cantidad</th>
                    <th scope='col'>SubTotal</th>
                    <th scope='col'></th>
                </tr>
            </thead>
            { cartList.map (prod =>
            <tbody className='align-middle' key={prod.id}>
                <tr>
                    <td>
                        <Link to={`/detail/${prod.id}`} >
                            {prod.title}
                        </Link>
                    </td>
                    <td> S/. {prod.price}.00 </td>
                    <td> {prod.qty} </td>
                    <td> S/. {(prod.price)*(prod.qty)}.00 </td>
                    <td>
                        <button onClick={() => removeItem(prod.id) } type='button' className='btn btn-outline-danger'>
                            <img src='https://res.cloudinary.com/dvinxey2w/image/upload/v1639369765/ICONOS/carrito_menos2_mci4g7.png' alt='cart-icon' />
                        </button>
                    </td>
                </tr>
            </tbody>
            ) }
            <thead>
                <tr>
                    <th scope='col' >
                        <Link to='/' type='button' className='btn btn-primary fw-bolder fs-6'>
                            AGREGAR MAS PRODUCTOS
                        </Link>
                    </th>
                    <th scope='col' colSpan='3' ></th>
                    <th scope='col'  >
                        <button onClick={clearCart}  type='button' className='btn btn-outline-danger'>
                            <img src='https://res.cloudinary.com/dvinxey2w/image/upload/v1639368037/ICONOS/borrar2_wtujuq.png' alt='delete' />
                        </button>
                    </th>
                </tr>
            </thead>
            <thead>
                <tr>
                    <th scope='col' colSpan='3' >TOTAL A PAGAR: S/.{total}.00 </th>
                </tr>
                <tr>
                    <th scope='col' colSpan='3' >ARTICULOS: {itCount} </th>
                </tr>
            </thead>
        </>
    )
}

export default CartSummary

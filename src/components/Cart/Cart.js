import React from 'react'
import {  useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './Cart.scss'


const Cart = () => {
    const {cartList, subtotal, wCount, clearCart, removeItem} = useCartContext()
        // { () ?  true : false   }
    return (
        <section id='cart'>

            <div id='titulo_cart' >
                <h3 >CARRITO DE COMPRAS</h3>
            </div>
            {(cartList.length > 0)?
            <div id='table_cart'>
            <table className="table table-light table-striped table-hover ">
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio Unitario</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">SubTotal</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                { cartList.map (prod => 
                <tbody key={prod.id}>
                    <tr>
                        <td> {prod.title} </td>
                        <td> S/. {prod.price}.00 </td>
                        <td> {prod.qty} </td>
                        <td> S/. {(prod.price)*(prod.qty)}.00 </td>
                        <td> <button onClick={() => removeItem(prod.id) } type="button" className="btn btn-danger">X</button> </td>
                    </tr>
                </tbody>    
                ) }
                <thead>
                    <tr>
                        <th scope='col' >PRODUCTOS :</th>
                        <th scope='col' > {wCount} </th>
                        <th scope='col' >TOTAL :</th>
                        <th scope='col' >S/. {subtotal}.00</th>
                        <th scope='col' ></th>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <th scope='col' ><button onClick={clearCart}  type="button" className="btn btn-danger">Borrar Productos</button></th>
                        <th scope='col' colSpan='2' >
                            <Link to='/'>
                                <button type="button" className="btn btn-primary">
                                    CONTINUAR COMPRANDO
                                </button>
                            </Link>
                        </th>
                        <th scope='col' colSpan='2' >
                            <button type="button" className="btn btn-success">
                                FINALIZAR COMPRA
                            </button>
                        </th>
                    </tr>
                </thead>
            </table>
            </div>
            :
            <div id='table_cart'>
                <Link to='/'>
                    <button type="button" className="btn btn-primary">
                        NO TIENEN PRODCUCTOS EN SU CARRITO DE COMPRAS, PUEDES IR A SELECCIONAR PRODUCTOS HACIENDO CLICK AQUI
                    </button>
                </Link> 
            </div>
            }

            

        </section>
    )
}

export default Cart
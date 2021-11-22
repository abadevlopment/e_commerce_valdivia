import React from 'react'
import {  useCartContext } from '../../Context/CartContext'
import './Cart.scss'
const Cart = () => {
    const {cartList, clearCart, removeItem} = useCartContext()


    return (
        <section id='cart'>
            <div id='titulo_cart' >
                <h3 >CARRITO DE COMPRAS</h3>
            </div>
           
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
                            <td> <button onClick={() => removeItem(prod.id) } type="button" class="btn btn-danger">X</button> </td>
                        </tr>
                    </tbody>    
                    ) }
                </table>
            </div>

            <div id='botones_cart' >
                <button onClick={clearCart}  type="button" class="btn btn-danger">Borrar Productos</button>
            </div>

        </section>
    )
}

export default Cart

/*<table> 
                            { itemDesc.map( produ => 
                                <tbody key={produ.id}>
                                    <tr >
                                        <td>{produ.desc1}</td>
                                        <td>{produ.desc2}</td>
                                    </tr>
                                </tbody>
                            )}
                        </table>*/
import React from 'react'
import {  useCartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import firebase from 'firebase'
import 'firebase/firestore'
import './Cart.scss'
import { getFirestore } from '../../service/getFirestore'
import { useState } from 'react/cjs/react.development'
import CartSummary from './CartSummary'


const Cart = () => {
    const {cartList, total, itCount, clearCart, removeItem} = useCartContext()
    //datos cliente
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    //setear orden final para renderizar
    const [finalOrder,setFinalOrder] = useState({})
    //setear visibilidad detalle
    const [view,setView] = useState(false)
    const [view1,setView1] = useState(false)


    const BuyerOrder = (e) => {
        e.preventDefault()

        const iBuyer = {name,phone,email}

        const order = {} 
        //agregar fecha
        order.date = firebase.firestore.Timestamp.fromDate( new Date() )
        //cliente
        order.buyer = {iBuyer}
        //monto total
        order.total = total
        //cant de items
        order.itCount = itCount
        //mapeo de items
        order.items = cartList.map( item => {
            const id = item.id
            const title = item.title
            const qty = item.qty
            const price = item.price 
            
            return {id, title, qty, price}
        })

        //cambiar a resumen
        //limpiar carrito
        clearCart()

        console.log(order);
        //add order a firestore
        const dbQuery = getFirestore()
        dbQuery.collection('orders').add(order)
        .then(res => setFinalOrder( { id: res.id, ...order } ))
        .catch(err => console.log(err))
        .finally( () => 
            setView(true)
        )
    }
    //console.log('este es para renderizar');
    //console.log(finalOrder);

        // { () ?  true : false   }
    
    return (
        <section id='cart'>
            {(view)?
            <CartSummary data={finalOrder}/>
            :
            <>
            {(cartList.length > 0)?
            <>
            <div id='table_cart'>
                <table className="table table-light table-striped table-hover ">
                    <thead>
                        <tr>
                            <th scope="col" colSpan='2'><h3 >CARRITO DE COMPRAS</h3></th>
                            <th scope="col" colSpan='3'> 
                            <Link to='/'>
                                <button type="button" className="btn btn-primary">
                                    AGREGAR MAS PRODUCTOS
                                </button>
                            </Link></th>
                        </tr>
                    </thead>
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
                            <th scope='col' > {itCount} </th>
                            <th scope='col' >TOTAL :</th>
                            <th scope='col' >S/. {total}.00</th>
                            <th scope='col' ></th>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <th scope='col' ><button onClick={clearCart}  type="button" className="btn btn-danger">Borrar Productos</button></th>
                            <th scope='col' colSpan='2' >
                               
                            </th>
                            <th scope='col' colSpan='2' >
                                <button onClick={()=> setView1(true)} type="button" className="btn btn-success">
                                    REGISTRAR
                                </button>
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div id='table_cart' >
            {(view1)?
            <form onSubmit={BuyerOrder} >
                <div className="mb-3">
                    <label  className="form-label">Nombre:</label>
                    <input required type="text" name='name' placeholder='Ingrese su nombre' className="form-control" id="name"  
                    value={name} onChange={ (e) => setName(e.target.value) } />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Teléfono:</label>
                    <input required type="number" name='phone' placeholder='Ingrese su teléfono' className="form-control" id="phone"  
                    value={phone} onChange={ (e) => setPhone(e.target.value) } />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Correo:</label>
                    <input required type="email" name='email' placeholder='Ingrese su correo electrónico' className="form-control" id="email"  
                    value={email} onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <button onSubmit={BuyerOrder} type='submit' className="btn btn-primary">REGISTRAR DATOS</button>
                
            </form>
            :
            <></>
            }
            </div>
            </>
            :
            <div id='table_cart'>
                <Link to='/'>
                    <button type="button" className="btn btn-primary">
                        NO TIENES PRODCUCTOS EN TU CARRITO DE COMPRAS, PUEDES IR A SELECCIONAR PRODUCTOS HACIENDO CLICK AQUI
                    </button>
                </Link> 
            </div>
            }
            </>
            }
        </section>
    )
}

export default Cart
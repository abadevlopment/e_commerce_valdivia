import React, {useState} from 'react'
import { useCartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import firebase from 'firebase'
import 'firebase/firestore'
import './Cart.scss'
import { getFirestore } from '../../service/getFirestore'
import CartSummary from './CartSummary'
import CartReport from './CartReport'
import User from '../User/User'

const Cart = () => {
    const {cartList, total, itCount, clearCart, buyer, endRegister} = useCartContext()
    const [finalOrder,setFinalOrder] = useState({})
    const [view, setView] = useState(false)

    const BuyerOrder = () => {

        const order = {}
        order.date = firebase.firestore.Timestamp.fromDate( new Date() )
        order.buyer = buyer
        order.total = total
        order.itCount = itCount
        order.items = cartList.map( item => {
            const id = item.id
            const title = item.title
            const qty = item.qty
            const price = item.price
            return {id, title, qty, price}
        })
        const dbQuery = getFirestore()
        dbQuery.collection('orders').add(order)
        .then(res => setFinalOrder( { id: res.id, ...order } ) )
        .then(() => clearCart())
        .catch(err => console.log(err))
        .finally(()=> setView(true))

        const stockUpdate = dbQuery.collection('WareHouse').where(
            firebase.firestore.FieldPath.documentId(), 'in', cartList.map(data => data.id)
        )
        const batchStock = dbQuery.batch()
        stockUpdate.get()
        .then( collection => {
            collection.docs.forEach(docSnapshot => {
                batchStock.update( docSnapshot.ref, {
                    stock : docSnapshot.data().stock - cartList.find( data => data.id === docSnapshot.id).qty
                } )
            })
            batchStock.commit()
        })
    }

    return (
        <>
            {(itCount > 0) ?
                <div className='container' >
                    <div className='row'>
                        <div className='col-sm-8'>
                            <table className='table table-light table-striped table-hover'>
                                <thead>
                                    <tr>
                                        <th scope='col' colSpan='3' >
                                            { endRegister ?
                                            <button onClick={()=> {BuyerOrder()}} type='button' className='btn btn-warning fw-bolder fs-5'>FINALIZAR COMPRA</button>
                                            :
                                            <span>DEBE REGISTRARSE PARA FINALIZAR LA COMPRA</span>
                                            }
                                        </th>
                                    </tr>
                                </thead>
                                <CartSummary />
                                <thead>
                                    <tr>
                                        <th scope='col' colSpan='3' >
                                            { endRegister ?
                                            <button onClick={()=> {BuyerOrder()}} type='button' className='btn btn-warning fw-bolder fs-5'>FINALIZAR COMPRA</button>
                                            :
                                            <span>DEBE REGISTRARSE PARA FINALIZAR LA COMPRA</span>
                                            }
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className='col-sm-4'>
                            <User/>
                        </div>
                    </div>
                </div>
            :
                <div className='main-cart container-fluid' >
                    { view ?
                        <CartReport order={finalOrder} />
                    :
                        <div className='card' style={{width: '20%'}}>
                            <img src='https://res.cloudinary.com/dvinxey2w/image/upload/v1639367180/ICONOS/carrito_vacio_xt18ar.png' className='card-img-top' alt='cart-icon' />
                            <div className='card-body'>
                                <h5 className='card-title'>NO HAY PRODUCTOS EN EL CARRITO</h5>
                                <button type='button' className='btn btn-primary' ><Link to='/' style={{textDecoration: 'none', color: 'white'}}>Agregar Productos</Link></button>
                            </div>
                        </div>
                    }
                </div>
            }
        </>
    )
}
export default Cart


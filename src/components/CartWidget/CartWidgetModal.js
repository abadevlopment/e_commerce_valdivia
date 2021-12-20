import { useCartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'

function CartWidgetModal() {
    const {cartList, total, itCount, removeItem} = useCartContext()

    return (
        <>
            <button type="button" class="btn btn-light " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <img src='https://res.cloudinary.com/dvinxey2w/image/upload/v1638937279/ARDUINO/shopping-cart_tqmhui.png' alt='cart-icon' />
                <span>[{itCount}] </span>
            </button>

            <div class="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable ">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">CARRITO DE COMPRAS</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <table className="table table-light table-striped table-hover ">
                                <thead>
                                    <tr>
                                        <th scope="col" colSpan='4' >Artículo(s) añadidos recientemente:</th>
                                    </tr>
                                </thead>
                                { cartList.map (prod =>
                                <tbody key={prod.id}>
                                    <tr>
                                        <td> {prod.title} </td>
                                        <td>{prod.qty} x</td>
                                        <td> S/.{prod.price}.00 </td>
                                        <td>
                                            <button onClick={() => removeItem(prod.id) } type="button" className="btn btn-danger">
                                                <img src='https://res.cloudinary.com/dvinxey2w/image/upload/v1639104661/ARDUINO/delete_idicqf.png' alt='delete' />
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                                ) }
                                <thead>
                                    <tr>
                                        <th scope='col'>ARTICULOS :</th>
                                        <th scope='col'>{itCount}</th>
                                        <th scope='col'>TOTAL:</th>
                                        <th scope='col'>S/.{total}.00</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal"><Link to='/cart' style={{textDecoration: 'none', color: 'white'}}>Ver Carrito</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartWidgetModal


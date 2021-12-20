import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext'
import './CartWidget.scss'

function CartWidget() {
    const {cartList, total, itCount, removeItem} = useCartContext()

    return (
        <>
            {(itCount>0)?
                <>
                    <div type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <div className="btn-group" role="group" >
                            <button type="button" className="btn btn-light btn-sm fs-6 fw-bolder" disabled >[ {itCount} ]</button>
                            <button type="button" className="btn btn-light btn-sm fs-6" disabled >
                                <img src='https://res.cloudinary.com/dvinxey2w/image/upload/v1639369765/ICONOS/carrito_lleno2_qlm2nm.png' alt='cart-icon' />
                            </button>
                            <button type="button" className="btn btn-light btn-sm fs-6 fw-bolder" disabled >S/.{total}.00</button>
                        </div>
                    </div>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                        <div className="modal-dialog modal-dialog-scrollable ">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">CARRITO DE COMPRAS</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <table className="table table-light table-striped table-hover vertical-align: middle ">
                                        <thead>
                                            <tr>
                                                <th scope="col" colSpan='4' >Artículo(s) añadidos recientemente:</th>
                                            </tr>
                                        </thead>
                                        { cartList.map (prod =>
                                        <tbody key={prod.id}>
                                            <tr>
                                                <td >
                                                    <Link to={`/detail/${prod.id}`} >
                                                        {prod.title}
                                                    </Link>
                                                </td>
                                                <td >{prod.qty}x</td>
                                                <td > S/.{prod.price}.00 </td>
                                                <td >
                                                    <button onClick={() => removeItem(prod.id) } type="button" className="btn btn-outline-danger">
                                                        <img src='https://res.cloudinary.com/dvinxey2w/image/upload/v1639369765/ICONOS/carrito_menos2_mci4g7.png' alt='delete' />
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
                                            <tr>
                                                <th scope='col' colSpan='4' >
                                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                                                    <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
                                                        AGREGAR MAS PRODUCTOS
                                                    </Link>
                                                </button>
                                                </th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    <Link to='/cart' className="btn btn-primary"  style={{textDecoration: 'none', color: 'white'}}>
                                        Ver Carrito
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            :
                <>
                    <div type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <div className="btn-group" role="group" >
                            <button type="button" className="btn btn-light btn-sm fs-6 fw-bolder" disabled >[ {itCount} ]</button>
                            <button type="button" className="btn btn-light btn-sm fs-6" disabled >
                                <img src='https://res.cloudinary.com/dvinxey2w/image/upload/v1639368037/ICONOS/carrito2_labmd0.png' alt='cart-icon' />
                            </button>
                            <button type="button" className="btn btn-light btn-sm fs-6 fw-bolder" disabled >S/.{total}.00</button>
                        </div>
                    </div>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-scrollable ">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">CARRITO DE COMPRAS</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <img src='https://res.cloudinary.com/dvinxey2w/image/upload/v1639367180/ICONOS/carrito_vacio_xt18ar.png' alt='cart-icon' />
                                    NO HAY PRODUCTOS EN EL CARRITO
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal"><Link to='/' style={{textDecoration: 'none', color: 'white'}}>Agregar Productos</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    );
}
    export default CartWidget
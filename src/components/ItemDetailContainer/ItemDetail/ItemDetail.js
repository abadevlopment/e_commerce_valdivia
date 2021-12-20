import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../../Context/CartContext'
import ItemCount from '../../ItemCount/ItemCount'

const ItemDetail = ({itemDet}) => {
    const {addtoCart, itCount} = useCartContext()

    const sendAdd = (setCount) => {
        addtoCart(itemDet,setCount)
    }
    return (
        <>
            <div key={itemDet.id}  className='card' id='cardDesc1' >
                <div className='card-header text-center fw-bolder fs-4' >
                    {itemDet.title}
                </div>
                <div className='card-body '>
                    <img src={itemDet.pictureUrl} className='card-img-top' alt='imagen itemDetucto'/>
                </div>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item text-center fw-bolder text-danger fs-4' >S/. {itemDet.price}.00</li>
                    <li className='list-group-item text-center' >
                        {(itemDet.stock > 0) ?
                            < ItemCount stock = {itemDet.stock} initial = {1} onAdd = {sendAdd}/>
                        :
                            <></>
                        }
                    </li>
                    <li className='list-group-item text-center fw-bolder fs-5'>
                        {(itemDet.stock > 0) ?
                            `Stock: ${itemDet.stock} und. disponibles`
                        :
                            `Stock no disponible`
                        }
                    </li>
                </ul>
            </div>
            <div  className='card' id='cardDesc2' >
                <div className='card-header text-center  fw-bolder fs-4'>
                    Especificaciones / Contenido
                </div>
                <div className='card-body overflow-auto'>
                    <table className='table table-borderless'>
                        {itemDet.description.map ( det =>
                            <tbody className='align-middle fs-6' key={det.id}>
                                <tr>
                                    <td>{det.c1}</td>
                                    <td>{det.c2}</td>
                                </tr>
                            </tbody>
                        )}
                    </table>
                </div>
                <div className='card-footer'>
                    {(itCount>0)?
                        <Link to='/cart'  className='btn btn-primary btn-sm' >
                            Ver carrito
                        </Link>
                    :
                        <></>
                    }
                    <button type='button' className='btn btn-outline-light btn-sm ' disabled ></button>
                    <Link to='/'  className='btn btn-secondary btn-sm' >
                        Regresar
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ItemDetail
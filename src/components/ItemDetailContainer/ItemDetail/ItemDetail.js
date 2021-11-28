import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../../Context/CartContext'
import ItemCount from '../../ItemCount/ItemCount'


const ItemDetail = ({itemDet}) => {
    const {AddtoCart} = useCartContext()

    const sendAdd = (setCount) => {
        AddtoCart(itemDet,setCount)
    }
  
    return (
        <>
            <div id="divDesc" >
                <div id="divDesc1" >
                    <div className="descTit" > {itemDet.title} </div>
                    <div className="descImg" > <img src={itemDet.pictureUrl} className="descImagen" alt="imagen producto"/> </div>
                    <div className="descPrec" > Precio: S/. {itemDet.price}.00 </div>
                    <div className="descCount" >
                        < ItemCount stock = {itemDet.stock} initial = {1} onAdd = {sendAdd}  />
                    </div>
                    <div className="descStock" > Stock: {itemDet.stock} und. </div>
                    <div className="descRet" > 
                        <Link to='/'>
                            <button type="button" className="btn btn-warning">
                                REGRESAR
                            </button>
                        </Link> 
                    </div>
                </div>
                <div id="divDesc2" >
                    <div id='divDescTit'>
                        ESPECIFICACIONES TECNICAS / CONTENIDO
                    </div>
                    <div id='divDescTab'>
                        <p>
                            {itemDet.description}
                        </p>
                        <table>
                            
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail
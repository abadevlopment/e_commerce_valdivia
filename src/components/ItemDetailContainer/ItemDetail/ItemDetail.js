import React from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({itemDet, itemDesc}) => {
  
    return (
        <>
            <div id="divDesc" >
                <div id="divDesc1" >
                    <div className="descTit" > {itemDet.title} </div>
                    <div className="descImg" > <img src={itemDet.pictureUrl} className="descImagen" alt="imagen producto"/> </div>
                    <div className="descPrec" > Precio: S/. {itemDet.price}.00 </div>
                    <div className="descCount" >
                        <div className='buttons' >
                            <div className='minus' >
                                <button className='butMin' >-</button>
                            </div>
                            <div className='count' >
                                1
                            </div>
                            <div className='add' >
                                <button className='butAdd' >AGREGAR</button>
                            </div>
                            <div className='plus' >
                                <button className='butPlu' >+</button>
                            </div>
                        </div>
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
                        DESCRIPCION / CONTENIDO
                    </div>
                    <div id='divDescTab'>
                        <table> 
                            { itemDesc.map( produ => 
                                <tbody key={produ.id}>
                                    <tr >
                                        <td>{produ.desc1}</td>
                                        <td>{produ.desc2}</td>
                                    </tr>
                                </tbody>
                            )}
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail
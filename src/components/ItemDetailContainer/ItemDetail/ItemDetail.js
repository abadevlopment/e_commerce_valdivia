import React from 'react'

const ItemDetail = ({itemDesc, description}) => {
    return (
        <div className="descripcion" >
            <div className="descTit" > {itemDesc.title} </div>
            <div className="descImg" > <img src={itemDesc.pictureUrl} className="descImagen" alt="imagen producto"/> </div>
            <div className="descPrec" > Precio: {itemDesc.price} </div>
            <div className="descCount" >contador y boton agregar</div>
            <div className="descStock" > Stock: {itemDesc.stock} </div>
            <div className="descRet" >boton retorno</div>
            <div className="descInfo" > 
                <table> 
                    {
                    description.map ( info => 
                    <tbody  key={info.id}  >
                        <tr>
                            <td> {info.desc1}: </td>
                            <td> {info.desc2} </td>
                        </tr>
                    </tbody>
                    )}
                </table> 

            </div>
        </div>
    )
}

export default ItemDetail

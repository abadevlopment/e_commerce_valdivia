import React from 'react'
import { Link } from 'react-router-dom';

function CartSummary({data}) {
    console.log(data);
    const buyer = data.buyer
    const items = data.items
    //console.log(buyer);
    //console.log(items);

    return (
        <section className='cartSummary'>
            <table className="table table-striped ">
                <thead>
                    <tr>
                    <th scope="col" colSpan='4'><h1>CONFIRMACION DE COMPRA</h1></th>
                    </tr>
                    <tr>
                        <th scope="col">CODIGO DEL PEDIDO:</th>
                        <th scope="col" style={{color: '#0d6efd'}} >{data.id}</th>
                        <th scope="col">Fecha del pedido:</th>
                        <th scope="col"></th>
                    </tr>
                    <tr>
                        <th scope='col' colSpan='4' ><h2>DATOS DEL CLIENTE</h2></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope='row' colSpan='4'><h2>PRODUCTOS</h2></th>
                    </tr>
                    <tr>
                        <td>Nombre:</td>
                        <td colSpan='3' >{buyer.iBuyer.name}</td>
                    </tr>
                    <tr>
                        <td>Correo Electrónico:</td>
                        <td colSpan='3' >{buyer.iBuyer.email}</td>
                    </tr>
                    <tr>
                        <td>Teléfono:</td>
                        <td colSpan='3' >{buyer.iBuyer.phone}</td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio Unitario</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Sub Total</th>
                    </tr>
                </thead>
            {items.map(data =>
                <tbody key={data.id}>
                    <tr>
                        <td>{data.title}</td>
                        <td>S/. {data.price}.00</td>
                        <td>{data.qty}</td>
                        <td>S/. {(data.qty)*(data.price)}.00</td>
                    </tr>
                </tbody> 
                   
            )}
                <thead>
                    <tr>
                        <th scope="col">ITEMS:</th>
                        <th scope="col">{data.itCount}</th>
                        <th scope="col">TOTAL:</th>
                        <th scope="col">S/. {data.total}.00</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td  colSpan='2'>
                            <Link to='/'>
                                <button type="button" class="btn btn-primary">SALIR</button>
                            </Link>
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default CartSummary

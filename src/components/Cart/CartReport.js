import React, {useRef} from 'react'
import { Link } from 'react-router-dom';
import './Cart.scss'
import { useReactToPrint } from 'react-to-print';


function CartReport({order}) {
    const toLocalDate1 = (new Date((order.date.seconds)*1000)).toLocaleString('es-PE', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})
    const toLocalDate2 = (new Date((order.date.seconds)*1000)).toLocaleString('es-PE', {hour: 'numeric', hour12:'false', minute: 'numeric', second: 'numeric'})
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    const setPrintMargins = () => {
        return `@page { margin: ${'10mm'} ${'10mm'} ${'10mm'} ${'15mm'} !important; }`
    };
    return (
        <>
        <table className='table table-secondary table-striped table-hover' >
            <thead>
                <tr>
                    <th scope='col'  >
                        <Link to='/'>
                            <button type='button' className='btn btn-primary'>SALIR</button>
                        </Link>
                    </th>
                    <th scope='col' >
                        <button type='button' className='btn btn-primary' onClick={handlePrint} >
                            IMPRIMIR
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan='5' >
                        <style>{setPrintMargins()}</style>
                        <table className='table table-light table-striped table-hover' ref={componentRef}>
                            <thead>
                                <tr>
                                <th scope='col' colSpan='5'><h1>RESUMEN DE COMPRA</h1></th>
                                </tr>
                                <tr>
                                    <th scope='col' colSpan='2'>CODIGO DE COMPRA:</th>
                                    <th scope='col'>Fecha:</th>
                                    <th scope='col' colSpan='2'> {toLocalDate1} </th>
                                </tr>
                                <tr>
                                    <th scope='col' colSpan='2' style={{color: '#0d6efd'}} >{order.id}</th>
                                    <th scope='col'>Hora:</th>
                                    <th scope='col' colSpan='2' > {toLocalDate2} </th>
                                </tr>
                                <tr>
                                    <th scope='col' colSpan='5' ><h2>CLIENTE:</h2></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Nombre:</td>
                                    <td colSpan='4' >{order.buyer.name}</td>
                                </tr>
                                <tr>
                                    <td>Correo Electrónico:</td>
                                    <td colSpan='4' >{order.buyer.email}</td>
                                </tr>
                                <tr>
                                    <td>Teléfono:</td>
                                    <td colSpan='4' >{order.buyer.phone}</td>
                                </tr>
                            </tbody>
                            <thead>
                                <tr>
                                    <th scope='row' colSpan='5'><h2>PRODUCTOS:</h2></th>
                                </tr>
                                <tr>
                                    <th scope='col' colSpan='2' >Producto</th>
                                    <th scope='col'>Precio Unitario</th>
                                    <th scope='col'>Cantidad</th>
                                    <th scope='col'>Sub Total</th>
                                </tr>
                            </thead>
                        {order.items.map(data =>
                            <tbody key={data.id}>
                                <tr>
                                    <td colSpan='2' >{data.title}</td>
                                    <td>S/. {data.price}.00</td>
                                    <td>{data.qty}</td>
                                    <td>S/. {(data.qty)*(data.price)}.00</td>
                                </tr>
                            </tbody>
                        )}
                            <thead>
                                <tr>
                                    <th scope='col' colSpan='2' >ITEMS:</th>
                                    <th scope='col'>{order.itCount}</th>
                                    <th scope='col'>TOTAL:</th>
                                    <th scope='col'>S/. {order.total}.00</th>
                                </tr>
                            </thead>

                        </table>
                    </td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th scope='col'  >
                        <Link to='/'>
                            <button type='button' className='btn btn-primary'>SALIR</button>
                        </Link>
                    </th>
                    <th scope='col' >
                        <button type='button' className='btn btn-primary' onClick={handlePrint} >
                            IMPRIMIR
                        </button>
                    </th>
                </tr>
            </thead>
        </table>
        </>
    )
}

export default CartReport

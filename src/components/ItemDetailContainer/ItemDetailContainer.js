import React from 'react'
import { useEffect, useState } from 'react';
//import { getFetch, getFetch2 } from '../Products/getFetch';
import ItemDetail from './ItemDetail/ItemDetail';
import './ItemDetailContainer.scss'
import { useParams } from 'react-router';
import { getFirestore } from '../../service/getFirestore';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const {ID} = useParams()

    useEffect(()=>{
        const dbQuery = getFirestore()

        dbQuery.collection('products').doc(ID).get() //traer uno por id
        .then(res => setProducto( { id: res.id, ...res.data() } ))
        .catch(err => console.log(err))
        .finally(setLoading(false))

    },[ID])

    //console.log(producto)

    return (
        
        <section className="idc" id="extra2" >
            { loading ? 
                <>
                    <div className="btn btn-primary" >
                        <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                        <span className="sr-only">Cargando...</span>
                    </div>
                </>
                :
            <ItemDetail itemDet={producto} />}
        </section>
    )
}

export default ItemDetailContainer


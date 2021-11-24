import React from 'react'
import { useEffect, useState } from 'react';
import { getFetch, getFetch2 } from '../Products/getFetch';
import ItemDetail from './ItemDetail/ItemDetail';
import './ItemDetailContainer.scss'
import { useParams } from 'react-router';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const [info, setInfo] = useState([])
    const {ID} = useParams()

    useEffect(()=>{
        getFetch
        .then( res => 
            setProducto(res.find (data => data.id === parseInt(ID))))
        .catch()
        .finally( () => setLoading(false) )        
    },[ID])
    //console.log(producto)

    useEffect(()=>{
        getFetch2
        .then( res => 
            setInfo((Object.values(res.find (data1 => data1.id === parseInt(ID))))[1]))
        .catch()
        .finally( () => setLoading(false) )        
    },[ID])
    //console.log(info)

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
            <ItemDetail itemDet={producto} itemDesc={info} />}
        </section>
    )
}

export default ItemDetailContainer


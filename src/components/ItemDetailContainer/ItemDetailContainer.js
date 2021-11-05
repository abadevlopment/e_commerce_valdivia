import React from 'react'
import { useEffect, useState } from 'react';
import { getFetch2, getFetch3 } from '../Products/getFetch';
import ItemDetail from './ItemDetail/ItemDetail';
import loadingArrow from './loadingArrow.png'
import './ItemDetailContainer.scss'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getFetch2
        .then( res => {
            setProducto(res)
        })
        .catch()
        .finally( () => setLoading(false) )        
    },[])

    useEffect(()=>{
        getFetch3
        .then( res => {
            setInfo(res)
        })
        .catch()
        .finally( () => setLoading(false) )        
    },[])

    return (
        <section className="idc" id="extra2" >
            { loading ? <img src={loadingArrow} className="App-logo" alt="logo" /> :
            <ItemDetail itemDesc={producto} description={info} />}
      
        </section>
    )
}

export default ItemDetailContainer


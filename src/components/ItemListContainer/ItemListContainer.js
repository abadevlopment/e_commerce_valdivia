import { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { getFetch } from '../Products/getFetch';
import ItemList from './ItemList/ItemList';
import './ItemListContainer.css';
import loadingArrow from './loadingArrow.png'
import './ItemListContainer.scss'


function ItemListContainer ({greeting}) {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getFetch
        .then( res => {
            setProduct(res)
        })
        .catch()
        .finally( () => setLoading(false) )        
    },[])

    return (
        <section className="ilc" id="main">
            <div id="greet" ><h1>{greeting="Bienvenido a ELECT-COMMERCE, tu tienda de electronica de confianza"}</h1></div>
            <div id="catalog" >
                { loading ? <img src={loadingArrow} className="App-logo" alt="logo" /> :
                            <ItemList items= {product} />}
                
            </div>
            <div id="extra" >
                <ItemCount initial={1} stock={5} />
            </div>
            
        </section>
    )
}
export default ItemListContainer
import { useEffect, useState } from 'react';
import { getFetch } from '../Products/getFetch';
import { useParams } from 'react-router';
import ItemList from './ItemList/ItemList';
import './ItemListContainer.scss'


function ItemListContainer ({greeting}) {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryID} = useParams()

    useEffect(()=>{
        if (categoryID) {
            getFetch
            .then( res => {
                setProduct(res.filter((data) => data.category === categoryID))
            })
            .catch()
            .finally( () => setLoading(false) )
        } else {
            getFetch
            .then( res => {
                setProduct(res)
            })
            .catch()
            .finally( () => setLoading(false) )
        }

    },[categoryID])

    return (
        <section className="ilc" id="main">
            <div id="greet" ><h1>{greeting}</h1></div>
            <div id="catalog" >
                { loading ? 
                <>
                    <div className="btn btn-primary" >
                        <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                        <span className="sr-only">Cargando...</span>
                    </div>
                </>
                :
                 <ItemList items= {product} />}                
            </div>   
        </section>
    )
}
export default ItemListContainer
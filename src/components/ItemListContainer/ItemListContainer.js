import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemList from './ItemList/ItemList';
import './ItemListContainer.scss'
import { getFirestore } from '../../service/getFirestore';


function ItemListContainer ({greeting}) {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryID} = useParams()

    useEffect(()=>{
        const dbQuery = getFirestore() // conexion con firestore

        //filtrado por categoria
        if(categoryID){
            dbQuery.collection('products')
            .where( 'category', '==' , categoryID ) 
            .get()
            .then(data => setProduct( data.docs.map( prod => ( {id: prod.id, ...prod.data() } ) ) ) )
            .catch(err => console.log(err))
            .finally(setLoading(false))

        }else{
            dbQuery.collection('products')
            .get() //traer todo
            .then(data => setProduct(data.docs.map( prod => ( {id: prod.id, ...prod.data()} ) ) ) )
            .catch(err => console.log(err))
            .finally( () => setLoading(false))
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
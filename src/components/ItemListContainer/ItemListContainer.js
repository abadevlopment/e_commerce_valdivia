import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemList from './ItemList/ItemList';
import './ItemListContainer.scss'
import { getFirestore } from '../../service/getFirestore';

function ItemListContainer ({greeting}) {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const {categoryID} = useParams()

    useEffect(()=>{
        const db = getFirestore()

        const dbQuery = categoryID ? db.collection('WareHouse').where( 'category', '==' , categoryID ) : db.collection('WareHouse')

            dbQuery.get()
            .then(data => setProduct( data.docs.map( prod => ( {id: prod.id, ...prod.data() } ) ) ) )
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

    },[categoryID])

    return (
        <div className='main-catalog container-fluid' >
                { loading ?
                <>
                    <div className='btn btn-primary loading' >
                        <span className='spinner-grow spinner-grow-sm' role='status' aria-hidden='true'></span>
                        <span className='sr-only'>Cargando...</span>
                    </div>
                </>
                :
                <ItemList items= {product} />}
        </div>
    )
}
export default ItemListContainer
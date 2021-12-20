import React, { useEffect, useState }  from 'react'
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

        dbQuery.collection('WareHouse').doc(ID).get()
        .then(res=>setProducto({id: res.id, ...res.data()}))
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))
    },[ID])

    return (
        <section className='main-catalog container-fluid' >
            { loading ?
                <>
                    <div className='btn btn-primary' >
                        <span className='spinner-grow spinner-grow-sm' role='status' aria-hidden='true'></span>
                        <span className='sr-only'>Cargando...</span>
                    </div>
                </>
            :
                <ItemDetail itemDet={producto} />
            }
        </section>
    )
}

export default ItemDetailContainer


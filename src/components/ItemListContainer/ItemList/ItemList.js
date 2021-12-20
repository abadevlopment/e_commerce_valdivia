import React, { memo }  from 'react'
import Item from '../Item/Item'

const ItemList = memo(
    ({items}) => {
        return (
            <>
            { items.map( prod => <Item key={prod.id} item={prod} /> ) }
            </>
        )
    }
)

export default ItemList
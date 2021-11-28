import React from 'react'
import Item from '../Item/Item'
import { memo } from 'react'

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
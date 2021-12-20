import React, {useState} from 'react'

function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = useState(initial)

    const addItem = () => {
        (stock > 0) ?
            <>
                {(count < stock) ?
                    setCount(count + 1)
                :
                    alert(`Stock maximo ${count}`)}
            </>
        :
            alert(`Stock no disponible`)
    }
    const reduItem = () => {
        if(count > initial && count <= stock && stock > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div className="btn-group" role="group" >
            <button type="button" className="btn btn-outline-success btn-sm fw-bolder fs-5" onClick={reduItem} >-</button>
            <button type="button" className="btn btn-outline-success btn-sm fw-bolder fs-5" disabled>{count}</button>
            <button type="button" className="btn btn-outline-success btn-sm fw-bolder fs-5" onClick={addItem} >+</button>
            <button type="button" className="btn btn-outline-light btn-sm " disabled ></button>
            <button type="button" className="btn btn-outline-success btn-sm " onClick={() => {onAdd(count)}} >
                <img src='https://res.cloudinary.com/dvinxey2w/image/upload/v1639369765/ICONOS/carrito_mas2_nmt7nj.png' alt='cart-icon' />
            </button>
        </div>
    )
}

export default ItemCount

import React, {useState} from 'react'

function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = useState(initial)
    const sumItem = () => {
        if (stock > 0) {
            if (count < stock ) {
                setCount(count + 1)
            } 
            else {
                alert(`Stock maximo ${count}`)
            }
        }
        else {
            alert(`Stock no disponible`)
        }
    }
    const resItem = () => {
        if(count > initial && count <= stock && stock > 0) {
            setCount(count - 1)
        }
    }
    const addProducto = () => {
        if (stock > 0) {    
            alert(`Agregaste ${count} productos`)
        }
        else {
            alert(`Stock no disponible`)
        }
    }

    return (
        <div className="div1">
            <div className="div2">Producto Prueba</div>
            <div className="div3">
                <button className="but1" onClick={resItem}>-</button>
                <div className="div4"> {count} </div>
                <button className="but2" onClick={sumItem}>+</button>
            </div>
            <div className="div5">
                <button className="but3" onClick={addProducto} >AGREGAR</button>
            </div>
        </div>
    )
}

export default ItemCount

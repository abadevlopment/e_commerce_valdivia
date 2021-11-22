import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = useState(initial)
    const [switchButton, setSwitchButton] = useState(false)
    const sumItem = () => {
        // { () ?  true : false   }
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
            setSwitchButton(true)
        }
        else {
            alert(`Stock no disponible`)
        }
    }

    const Buttons = () => {
        return(
            <div className='buttons' >
                { switchButton ?
                    <div className='cont1'>
                        { (count === 1) ?
                            <span>AGREGASTE {count} PRODUCTO</span>
                        :
                            <span>AGREGASTE {count} PRODUCTOS</span>
                        }
                    </div>
                :  
                    <div className='cont2'>
                        <div className='minus' >
                            <button className='butMin' onClick={resItem} >-</button>
                        </div>
                        <div className='count' >
                            {count}
                        </div>
                        <div className='plus' >
                            <button className='butPlu' onClick={sumItem} >+</button>
                        </div>
                    </div>
                }
                <div className='cont3' >
                    { switchButton ?
                        <Link className='butAdd2' to='/cart'>
                            TERMINAR COMPRA
                        </Link>
                    :  
                        <button className='butAdd' onClick={() => {onAdd(count) ; addProducto()}} >AGREGAR</button>
                    }
                </div>
            </div>
        )
    }

    return (
        <>
        {(stock >0) ?
            <Buttons/>
        :
            <div className='anuncio' >STOCK NO DISPONIBLE</div>    
        }
        </>
    )
}

export default ItemCount

import  { useState, useEffect } from "react";
import { createContext, useContext } from "react";

export const CartContext = createContext([]) 

export const useCartContext = () => {
    return useContext(CartContext)
}

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const [wCount, setWCount] = useState(0)
    const [subtotal, setSubtotal] = useState(0)

    const isInCart = (item) => {
        return cartList.some(data => data.id === item.id)
    }

    const AddtoCart = (itemtoAdd, qty) => {

        if(isInCart(itemtoAdd)){
            const newCart = cartList
            newCart.forEach( (data) => {
                if (data.id === itemtoAdd.id) {
                    data.qty += qty
                }}
            )
            setCartList(newCart)

            const Total = newCart.map( (cnt) => (cnt.qty))
            .reduce((previous, current) => {
                return previous + current;
            },0)
            setWCount(Total)
            
            const Total2 = newCart.map( (sbt) => ((sbt.price )*(sbt.qty)))
            .reduce((previous, current) => {
                return previous + current;
            },0)
            setSubtotal(Total2)

        }
        else{
            setCartList([...cartList , {...itemtoAdd, qty}])
        }
    }

    useEffect( () => {
        const handleWcount = () => {
            const Total = cartList.map( (cnt) => (cnt.qty))
            .reduce((previous, current) => {
                return previous + current;
            },0)
            setWCount(Total)
        }
        handleWcount()
    })

    useEffect( () => {
        const handleTotal = () => {
            const Total2 = cartList.map( (sbt) => ((sbt.price )*(sbt.qty)))
            .reduce((previous, current) => {
                return previous + current;
            },0)
            setSubtotal(Total2)
        }
        handleTotal()
    })


    const removeItem = (itemId) => {
        setCartList( 
            cartList.filter( (item) => item.id !== itemId )
         )
    }

    const clearCart = () => {
        setCartList([])
    }

    return (
        <div>
            <CartContext.Provider value ={{
                cartList,
                subtotal,
                wCount,
                AddtoCart,
                removeItem,
                clearCart
            }} >
                {children}
            </CartContext.Provider>
        </div>
    )
}

export default CartContextProvider


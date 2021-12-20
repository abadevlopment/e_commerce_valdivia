import  { useState, useEffect } from "react";
import { createContext, useContext } from "react";

export const CartContext = createContext([])

export const useCartContext = () => {
    return useContext(CartContext)
}

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const [itCount, setItCount] = useState(0)
    const [total, setTotal] = useState(0)
    const [newOrder, setNewOrder] = useState({})
    const [buyer, setBuyer] = useState({})
    const [endRegister, setEndRegister] = useState(false)

    const isInCart = (item) => {
        return cartList.some(data => data.id === item.id)
    }

    const addtoCart = (itemtoAdd, qty) => {
        if(isInCart(itemtoAdd)){
            const newCart = cartList
            newCart.forEach( (data) => {
                if (data.id === itemtoAdd.id) {
                    data.qty += qty
                }}
            )
            setCartList(newCart)

            const iCount = newCart.map( (cnt) => (cnt.qty))
            .reduce((previous, current) => {
                return previous + current;
            },0)
            setItCount(iCount)

            const Total2 = newCart.map( (sbt) => ((sbt.price )*(sbt.qty)))
            .reduce((previous, current) => {
                return previous + current;
            },0)
            setTotal(Total2)

        }
        else{
            setCartList([...cartList , {...itemtoAdd, qty}])
        }
    }

    useEffect( () => {
        const handleWcount = () => {
            const iCount = cartList.map( (cnt) => (cnt.qty))
            .reduce((previous, current) => {
                return previous + current;
            },0)
            setItCount(iCount)
        }
        handleWcount()

        const handleTotal = () => {
            const Total2 = cartList.map( (sbt) => ((sbt.price )*(sbt.qty)))
            .reduce((previous, current) => {
                return previous + current;
            },0)
            setTotal(Total2)
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

    const addOrder = (id, order) => {
        setNewOrder( {id: id, ...order} )
    }

    const addBuyer = (data) => {
        setBuyer(data)
        setEndRegister(true)
    }

    return (
        <div>
            <CartContext.Provider value ={{
                cartList,
                total,
                itCount,
                addtoCart,
                removeItem,
                clearCart,
                addOrder,
                newOrder,
                addBuyer,
                buyer,
                endRegister
            }} >
                {children}
            </CartContext.Provider>
        </div>
    )
}

export default CartContextProvider


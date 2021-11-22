import  { useState } from "react";
import { createContext, useContext } from "react";

export const CartContext = createContext([]) 

export const useCartContext = () => {
    return useContext(CartContext)
}

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

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
        }
        else{
            setCartList([...cartList , {...itemtoAdd, qty}])
        }
        
    }

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


import React, {useState, createContext} from 'react';

const CartContext = createContext()

const CartProvider = (elements) => {
   const [cart, setCart] = useState([]);
   
   const addItem = (item, cant) => {
      const aux = cart
      const indexCart = aux.findIndex(findItem => findItem.id === item.id)
      if(indexCart !== -1) {
         aux[indexCart].cantidad = cant
      } else {
         const id = item[0]
         const propiedades = item[1]
         const newItem = {id, ...propiedades, cantidad: cant}
         aux.push(newItem)
      }

      setCart(structuredClone(aux))
   }

   const removeItem = (item) => {
      const aux = cart
      let indexCart = aux.findIndex(findItem => findItem.id === item.id)

      aux.splice(indexCart, 1)
      setCart(structuredClone(aux))
   }

   const clear = () => {
      const aux = cart
      aux.splice(0, aux.length)
      setCart(structuredClone(aux))
   }

   return (
      <>
         <CartContext.Provider value={{cart, addItem, removeItem, clear}}>
            {elements.children}
         </CartContext.Provider>
      </>
   );
}

export {CartContext, CartProvider};

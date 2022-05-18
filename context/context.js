import React, { createContext, useContext, useEffect, useState } from "react";
import { useDate } from "../hooks/useDate";

const Context = createContext()

export const DataContext = ({ children }) => {

    const {date} = useDate()

    const [cart, setCart] = useState({
        client: "",
        proveedor: "StockSystem",
        date: date,
        listproduct: [],
        discount: 0,
        shipping: {
          name: "Retiro local",
          address: '',
          total: 0
        },
        subTotal: "0",
        payment: {
          method: 'Efectivo',
          month: 1,
          total: 0
        },
        total: "0"
    })

    useEffect(()=> console.log("cambio",cart), [cart])

    /* useEffect(()=>{

      if (listProduct.length !=  0) {

        const subtotal = listProduct.length != 0 && listProduct.map(item => item.total).reduce((a,t)=>(parseFloat(a)+parseFloat(t)).toFixed(2))
  
        const total = parseFloat(subtotal)-(parseFloat(subtotal)*(parseFloat(cart.discount)*100)).toFixed(2)
  
        setCart({...cart, listproduct: listProduct, subTotal: subtotal, total: total })

      }

    },[listProduct]) */

  const value = {
      cart, 
      addClient: (client) => {
        setCart({ ...cart, client: client})
      },
      addProduct: (item) => {
        console.log("add item",cart.listproduct, item.price);

        const subtotal = cart.listproduct.length != 0 && (parseFloat(cart.total)+parseFloat(item.price)).toFixed(2)
  
        const total = parseFloat(subtotal)-(parseFloat(subtotal)*(parseFloat(cart.discount)*100)).toFixed(2)

        console.log("totales",subtotal, total);

        if(cart.listproduct.length === 0){
          setCart({...cart, listproduct: [...cart.listproduct, item], subTotal: item.price, total: item.price, payment: {...cart.payment, total: item.price} })
        }else{
          cart.listproduct.find(i=>i.id===item.id) === undefined && setCart({...cart, listproduct: [...cart.listproduct, item], subTotal: subtotal, total: total, payment: {...cart.payment, total: total}  })
        }
      },
      onChangeAmount: ( id, color, size, amountItem) => {

        let cartTotal = 0
        console.log("changeamount",cart.listproduct);

        cart.listproduct.map(item=>{
          if(id === item.id && color === item.color && size === item.size){
            cartTotal = (parseFloat(cart.total)-parseFloat(item.total)).toFixed(2)
            item.amount = amountItem
            item.total = (parseFloat(amountItem)*parseFloat(item.price)).toFixed(2)
            cartTotal = (parseFloat(cartTotal)+parseFloat(item.total)).toFixed(2)
          }
        })
        setCart({...cart, total: cartTotal, subTotal: cartTotal})
      },
      deleteItemCart: ( id, color, size, total) => {
        console.log("delete item",cart.listproduct);
        let cartTotal = (parseFloat(cart.total)-parseFloat(total)).toFixed(2)
        const newList = cart.listproduct.filter(item => item.id !== id )
        setCart({...cart, total: cartTotal, subTotal: cartTotal, 
          listproduct: newList
        })
      },
      selectShipping : (element) => {
        setCart({...cart, shipping: element})
      },
      selectPayment : (element) => {
        console.log("payment",element);
        setCart({...cart, payment: {method: element.method, month: element.month, total: cart.total}})
      }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export function useAppContext() {
  return useContext(Context);
}
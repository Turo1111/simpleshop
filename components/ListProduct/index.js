import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useAppContext } from "../../context/context"
import useFetch from "../../hooks/useFetch"
import Alert from "../Alert"
import FilterProduct from "../FilterProduct"
import ItemProduct from "../ItemProduct"
import { Container } from "./styles"

const ListProduct = () => {

    const {data} = useFetch("/api/products")

    const [category, setCategory] = useState([])
    const [brand, setBrand] = useState([])
    const [color, setColor] = useState([])
    const [openAlert, setOpenAlert] = useState(false)

    const {addProduct} = useAppContext()

    const onSelectedProduct = (product) => {
        addProduct(
            {
                id: product.id,
                description: product.description,
                price: product.price,
                color: product.color,
                size: product.size,
                brand: product.brand,
                img: product.img,
                amount: 1,
                total: product.price
            }
        )
        setOpenAlert(true)
    }


    return (
        <>
        <FilterProduct category={category} brand={brand} color={color} />
        <div style={{ display: "flex", justifyContent: "center", width: "100%"}}>
            <Container>
                {
                    data.map(item =>{ 
                        if(!category.includes(item.category)){
                            setCategory([...category,item.category])
                        }
                        if(!brand.includes(item.brand)){
                            setBrand([...brand,item.brand])
                        }
                        for (let i = 0; i < item.color.length; i++) {
                            if(!color.includes(item.color[i].name)){
                                setColor([...color,item.color[i].name])
                            }
                        }

                        return <ItemProduct key={item.id} {...item} onClick={onSelectedProduct}/>    
                    })
                }
            </Container>
        </div>
        <Alert open={openAlert} bg='green' position="top-end" msg="Producto agregado al carrito !!" eClose={()=>setOpenAlert(false)}/>
        </>
    )
}

export default ListProduct
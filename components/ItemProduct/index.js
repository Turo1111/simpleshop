import React from "react"
import { Brand, Container, ContainerTags, Description, Price, Tag1, TagSale, Title } from "./styles"
import Image from 'next/image'
import { useState } from "react"
import Carrousel from "../Carrousel"
import CarrouselItemP from "../CarrouselItemP"
import Button from "../Button"
import { useEffect } from "react"

const ItemProduct = ({id, brand, description, price, tag1, tagSale, color, size, img, onClick}) => {

    const [open , setOpen] = useState(false)
    const [colorActive, setColorActive] = useState(0)
    const [sizeActive, setSizeActive] = useState(0)
    const [imgActive, setImgActive] = useState(img)

    const product = {
        id: id+"-"+color[colorActive].name+"-"+size[sizeActive], 
        brand, 
        description, 
        price, 
        tag1, 
        tagSale, 
        color : color[colorActive].name, 
        size : size[sizeActive], 
        img: imgActive
    }

    return(
        <Container onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <ContainerTags>
                <Tag1>{tag1}</Tag1>
                <TagSale>-{tagSale}%</TagSale>
            </ContainerTags>
            {
                !open ? 
                <Image className="img" src={imgActive} width={250} height={250} />
                :
                <CarrouselItemP
                    color={color}
                    size={size}
                    colorActive={colorActive}
                    sizeActive={sizeActive}
                    handleColor={(index, imagen)=>{
                        setColorActive(index)
                        setImgActive(imagen)
                    }}
                    handleSize={(index)=>setSizeActive(index)}
                />
            }
            
            <Brand >{brand}</Brand>
            <Description >{description}</Description>
            <Price >${price}</Price>
            {
                open && <Button
                    onClick={()=>onClick(product)}
                    background={"#9ADCFF"}
                >Añadir al carro</Button>
            }
        </Container>
    )
}

export default ItemProduct
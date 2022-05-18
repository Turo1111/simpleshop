import React from "react"
import { Circle, Container, ContainerArrow, ContainerCircle, ContainerColor, ContainerSize, IconWrapper, Img, Size } from "./styles"
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from "react-icons/md"
import { useState, useEffect } from "react"
import Image from 'next/image'

const CarrouselItemP = ({color, size, colorActive, sizeActive, handleColor, handleSize}) => {

    const [indexActive, setIndexActive] = useState(0)
    

    const setArrowLeft = () => {
        const index = indexActive-1
        if (index===-1) {
            index = color[colorActive].imgs.length-1
        }
        setIndexActive(index)
    }

    const setArrowRight = () => {
        const index = indexActive+1
        
        if (index===color[colorActive].imgs.length) {
            index = 0
        }
        setIndexActive(index)
    }

    return(
        <Container>
            {
                color[colorActive].imgs.map((item, index)=>{
                    return(
                        <Img
                            key={item}
                            active={indexActive === index ? true : false}
                        >
                            <Image
                            src={item}
                            alt="Picture of the author"
                            width={550}
                            height={550} 
                            />
                        </Img>
                        
                    )
                })
            }
            
            <ContainerArrow>
                <IconWrapper onClick={()=>setArrowLeft()}>
                    <MdKeyboardArrowLeft/>
                </IconWrapper>
                <IconWrapper onClick={()=>setArrowRight()}>
                    <MdKeyboardArrowRight/>
                </IconWrapper>
            </ContainerArrow>
            <ContainerColor>
            {
                color.map((item, index)=>{
                    return(
                        <Circle
                            key={item.name}
                            color={item.name}
                            active={colorActive === index ? true : false}
                            onClick={()=>handleColor(index, color[index].imgs[0])}
                            
                        />
                    )
                })
            }
            </ContainerColor>
            <ContainerSize>
            {
                size.map((item, index)=>{
                    return(
                        <Size
                            key={item}
                            active={sizeActive === index ? true : false}
                            onClick={()=>handleSize(index)}
                        >
                            {item}
                        </Size>
                    )
                })
            }
            </ContainerSize>
        </Container>
    )
}

export default CarrouselItemP
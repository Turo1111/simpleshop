import React from "react"
import { Circle, Container, ContainerArrow, ContainerCircle, IconWrapper, Img, Transition } from "./styles"
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from "react-icons/md"
import { useState, useEffect } from "react"
import Image from 'next/image'

const Carrousel = ({imgs}) => {

    const [indexActive, setIndexActive] = useState(0)

    const setArrowLeft = () => {
        const index = indexActive-1
        if (index===-1) {
            index = imgs.length-1
        }
        setIndexActive(index)
    }

    const setArrowRight = () => {
        const index = indexActive+1
        if (index===imgs.length) {
            index = 0
        }
        setIndexActive(index)
    }

    return(
        <Container>
            {
                imgs.map((item, index)=>{
                    return(
                        <Transition open={indexActive === index ? true : false}>
                            <Img
                                key={item}
                                active={indexActive === index ? true : false}
                            >
                                
                                    <Image
                                    src={item}
                                    alt="Picture of the author"
                                    /* width={1000}
                                    height={500} */ 
                                    layout="fill"
                                    />
                                
                            </Img>
                        </Transition>
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
            <ContainerCircle>
            {
                imgs.map((item, index)=>{
                    return(
                        <Circle
                            key={item}
                            onClick={()=>setIndexActive(index)}
                            active={indexActive === index ? true : false}
                        />
                    )
                })
            }
            </ContainerCircle>
        </Container>
    )
}

export default Carrousel
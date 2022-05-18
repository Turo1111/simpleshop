import React from "react"
import { Search } from "../Search"
import { Container, IconWrapper, LineMid, LinkTab, Title, User } from "./styles"
import {AiOutlineUser, AiOutlineShoppingCart} from "react-icons/ai"
import Link from 'next/link'
import Cart from "../Cart"
import { useState } from "react"
import useClickAway from '../../hooks/useClickAway'
import { useRef } from "react"
import Alert from "../Alert"


const Header = ( ) => {

    const [open, setOpen] = useState(false)
    const ModalCart = useRef()
    useClickAway(ModalCart, ()=> setOpen(false))

    
    

    return(
        <Container>
            <div style={{display: "flex"}}>
                <LineMid style={{alignItems: "start"}}>
                    <Search placeholder={"¿Que estas buscando?"} radius={"15px"} />
                </LineMid>
                <Title>Simpleshop</Title>
                <LineMid style={{justifyContent: "end", alignItems: "start", paddingTop: 10}}>
                    <User>usuario3123</User>
                    <IconWrapper>
                        <AiOutlineUser/>
                    </IconWrapper>
                    <IconWrapper onClick={()=>setOpen(true)}>
                        <AiOutlineShoppingCart/>
                        <Cart open={open} el={ModalCart}/>
                    </IconWrapper>
                </LineMid>
            </div>
            <div style={{display: "flex", justifyContent: "center",}}>
                <LinkTab><Link href={"/"}>TIENDA</Link></LinkTab>
                <LinkTab><Link href={"/checkout"}>CARRRITO</Link></LinkTab>
                <LinkTab><Link href={"/about"}>NOSOTROS</Link></LinkTab>
            </div>
        </Container>
    )
}

export default Header
import React from "react"
import { Container, IconWrapper, ItemUser, LineMid, LinkTab, ListLinks, ListUser, MenuContainer, SearchContainer, Title } from "./styles"
import {AiOutlineMenu, AiOutlineUser, AiOutlineShoppingCart, AiOutlineShopping} from 'react-icons/ai'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import { useState } from "react"
import useClickAway from '../../hooks/useClickAway'
import { useRef } from "react"
import { Search } from "../Search"
import Link from 'next/link'
import Cart from "../Cart"

const HeaderMobile = () => {

    const [open, setOpen] = useState(false)
    const [openCart, setOpenCart] = useState(false)
    const ModalCart = useRef()
    const ModalMenu = useRef()
    useClickAway(ModalMenu, ()=> setOpen(false))
    useClickAway(ModalCart, ()=> setOpenCart(false))

    return(
        <Container>
            <IconWrapper onClick={()=> !open && setOpen(true)} >
                <AiOutlineMenu/>
                {
                    open && 
                    <MenuContainer ref={ModalMenu}>
                        <SearchContainer>
                            <Search placeholder={"¿Que estas buscando?"} radius={"15px"} width={'100%'} margin={'15px 0'} />
                        </SearchContainer>
                        <ListLinks>
                            <LinkTab><Link href={"/"}>TIENDA</Link></LinkTab>
                            <LinkTab><Link href={"/checkout"}>CARRRITO</Link></LinkTab>
                            <LinkTab><Link href={"/about"}>NOSOTROS</Link></LinkTab>
                        </ListLinks>
                        <ListUser>
                            <ItemUser>
                                <IconWrapper><AiOutlineUser/></IconWrapper>
                                usuario3123
                            </ItemUser>
                            <ItemUser onClick={()=>{
                                    setOpenCart(true)
                                    setOpen(false)
                                }}>
                                <IconWrapper>
                                    <AiOutlineShoppingCart/>
                                </IconWrapper>
                                Mi carrito
                            </ItemUser>
                            <ItemUser>
                                <IconWrapper><HiOutlineLocationMarker/></IconWrapper>
                                Mis direcciones
                            </ItemUser>
                            <ItemUser>
                                <IconWrapper><AiOutlineShopping/></IconWrapper>
                                Mis Compras
                            </ItemUser>
                        </ListUser>
                    </MenuContainer>
                }
            </IconWrapper>
            <LineMid/>
            <Title>
                SimpleShop
            </Title>
            
            <Cart open={openCart} el={ModalCart} eClose={()=>setOpenCart(false)}/>
        </Container>
    )
}
 
export default HeaderMobile
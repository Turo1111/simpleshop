import React from "react"
import { Container, DropDown, Filter, IconWrapper, ItemDropDown } from "./styles"
import {AiOutlineUnorderedList} from "react-icons/ai"
import {MdArrowDropDown} from "react-icons/md"
import ModalFilters from "../ModalFilters"
import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"
import useClickAway from "../../hooks/useClickAway"

const FilterProduct = ({category, brand, color}) => {

    const [openFilters, setOpenFilters] = useState(false)
    const [openOrder, setOpenOrder] = useState(false)

    const OrderDropDown = useRef()

    useClickAway(OrderDropDown, ()=>setOpenOrder(false))

    return(
        <Container>
            <IconWrapper onClick={()=>setOpenFilters(!openFilters)}>
                <AiOutlineUnorderedList/>
                <Filter>Filtros</Filter>
            </IconWrapper>
            <IconWrapper onClick={()=>setOpenOrder(!openOrder)} >
                <Filter>Ordenar por : Mas relevantes</Filter>
                <MdArrowDropDown/>
                {
                    openOrder &&
                    <DropDown ref={OrderDropDown}>
                        <ItemDropDown>Mas relevantes</ItemDropDown>
                        <ItemDropDown>Menos relevantes</ItemDropDown>
                        <ItemDropDown>Mayor precio</ItemDropDown>
                        <ItemDropDown>Menor precio</ItemDropDown>
                    </DropDown>
                }
            </IconWrapper>
            <ModalFilters open={openFilters} eClose={()=>setOpenFilters(false)} category={category} brand={brand} color={color} />
        </Container>
    )
}

export default FilterProduct
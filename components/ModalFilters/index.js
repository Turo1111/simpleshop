import React from 'react'
import { useRef } from 'react'
import useClickAway from '../../hooks/useClickAway'
import Modal from '../Modal'
import { Circle, Tag, Title } from './styles'

const ModalFilters = ({open, eClose, category, brand, color}) => {
    
    const ModalFilters = useRef()
    useClickAway(ModalFilters, eClose)

 return (
  <Modal open={open} borderRadius={true} eClose={eClose} title={"Filtros"} height={"auto"} modalButton={true} el={ModalFilters} >
        <Title>Categorias</Title>
        <div style={{display: 'flex', flexWrap: "wrap"}}>
            <Tag>Todas</Tag>
            {
                category.map(item=>
                    <Tag key={item}>{item}</Tag>
                )
            }
        </div>
        <Title>Marcas</Title>
        <div style={{display: 'flex', flexWrap: "wrap"}}>
            <Tag>Todas</Tag>
            {
                brand.map(item=>
                    <Tag key={item}>{item}</Tag>
                )
            }
        </div>
        <Title>Color</Title>
        <div style={{display: 'flex', flexWrap: "wrap"}}>
            {
                color.map(item=>
                    <Circle color={item} key={item} />
                )
            }
            
        </div>
        <Title>Descuentos</Title>
        <div style={{display: 'flex', flexWrap: "wrap"}}>
            {
                ["-15%", "-30%", "-40%", "-50%"].map(item=>
                    <Tag key={item}>{item}</Tag>
                )
            }
            
        </div>
  </Modal>
 )
}

export default ModalFilters
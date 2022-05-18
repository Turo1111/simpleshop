import React from 'react'
import { Brand, Circle, Container, ContainerInput, Description, IconWrapper, InputNumber, Size, Total } from './styles'
import Image from 'next/image'
import {BsTrash} from "react-icons/bs"
import { useAppContext } from '../../context/context';
import { useState } from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { useEffect } from 'react';
import Alert from '../Alert';
import { useResize } from '../../hooks/useResize';

const ItemCart = ({id, amount, brand, description, color, size, img, price, total}) => {

  const [openAlert, setOpenAlert] = useState(true)

  const {onChangeAmount, deleteItemCart} = useAppContext()

  const {ancho,alto} = useResize() 

  /* const amountItem = useInputValue(amount) */


  const [value, setvalue] = useState(amount)
  const onChange = e =>{ 
    setvalue(e.target.value)
    onChangeAmount(id, color, size, e.target.value)
  }

  const onClickDelete = () => {
    console.log("aaaaaaaaaaaaaa");
    setOpenAlert(true)
    deleteItemCart( id, color, size, total)
  }

  useEffect(()=>console.log("cambia", openAlert),[openAlert])

 return(
  <Container>
      {
        ancho > 320 && <Image className="img" src={img} width={75} height={75} />
      }
      <div>
          <Brand>{brand}</Brand>
          <Description>
              {description}
          </Description>
      </div>
      <div style={{display: "flex", alignItems: 'center', justifyContent: 'center'}}>
        <Circle color={color}/>
        <Size>{size}</Size>
      </div>
      <ContainerInput>
        <InputNumber type={"number"} value={value} onChange={onChange} min={1}/>
      </ContainerInput>
      <Total>{total}</Total>
      <div style={{display: 'flex', alignItems: "center", justifyContent: 'end'}} >
        <IconWrapper onClick={onClickDelete}>
            <BsTrash/>
        </IconWrapper>
      </div>
      <Alert open={openAlert} bg='green' position="top-end" msg="Producto eliminado del carrito !!" eClose={()=>setOpenAlert(false)}/>
  </Container>
 )
}
 
export default ItemCart
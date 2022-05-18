import React from 'react'
import { Container, IconWrapper, SelectOption, TextOption, Total } from './styles'
import {RiArrowDownSLine, RiArrowRightSLine} from 'react-icons/ri'
import ListCart from '../ListCart'

const EndCart = ({listproduct, cart}) => {

    console.log("endcart",cart);

 return(
    <Container>
        <SelectOption>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <IconWrapper>
                    <RiArrowRightSLine/>
                </IconWrapper>
                <TextOption>
                    {cart.shipping.name} : {cart.shipping.address}
                </TextOption>
            </div>
            <div style={{fontFamily: 'CairoRegular', fontSize: 14}}>
                $ 0
            </div>
        </SelectOption>
        <SelectOption>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <IconWrapper>
                    <RiArrowRightSLine/>
                </IconWrapper>
                <TextOption>
                    {cart.payment.method}
                </TextOption>
            </div>
            <div style={{fontFamily: 'CairoRegular', fontSize: 14}}>
                {cart.payment.month} x $ {cart.payment.total}
            </div>
        </SelectOption>
            <ListCart listproduct={listproduct}/>
        <Total>SubTotal: ${cart.subTotal}</Total>
        <Total>Envio: $0</Total>
        <Total>Total: ${cart.total}</Total>
    </Container>
 )
}
 
export default EndCart
import React from 'react';
import ListCart from '../ListCart';
import { Container, ContainerButton, LineMid, Title, Total } from './styles';
import Button from "../Button"
import { useRef } from 'react';
import { useAppContext } from '../../context/context';

const Cart = ({open, el, eClose}) => { 

    const { cart } = useAppContext()

    return (
        <Container open={open} ref={el}>
            <div style={{display: 'flex'}}>
                <LineMid/>
                <Title>CART</Title>
                <LineMid/>
            </div>
            <ListCart
                listproduct={cart.listproduct}
            /> 
            <Total>SubTotal: ${cart.subTotal}</Total>
            <Total>Total: ${cart.total}</Total>
            <ContainerButton>
                <Button
                    background={"#9ADCFF"}
                    color={"white"}
                    height={"40px"}
                    onClick={eClose}
                >
                    Seguir comprando
                </Button>
                <Button
                    background={"#9ADCFF"}
                    color={"white"}
                    height={"40px"}
                    to="/checkout"
                >
                    Terminar compra
                </Button>
            </ContainerButton>
        </Container>
    )
}

export default Cart
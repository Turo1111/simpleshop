import React from 'react'
import { Container, ContentPayment, HeaderPayment, IconWrapper, ItemPayment, SelectCash, SelectDate, TextSelect, TitlePayment, TitleSelect } from './styles'
import {RiArrowDownSLine, RiArrowRightSLine} from 'react-icons/ri'
import Input from '../Input'
import { useArray } from '../../hooks/useArray'
import { useInputValue } from '../../hooks/useInputValue'
import CreditCard from '../CreditCard'
import { useState } from 'react'
import Button from '../Button'
import { useAppContext } from '../../context/context'
import { useRef } from 'react'
import { useEffect } from 'react'

const Payment = () => {

    const {cart, selectPayment} = useAppContext()

    const year = useArray(22 , 40)
    const month = useArray(1 , 12)

    const numberCard = useInputValue( '', 'number')
    const monthCard = useInputValue( month[0], 'number')
    const yearCard = useInputValue( year[0], 'number')
    const codeCard = useInputValue( '000' , '')/* 
    const monthAmount = useInputValue(cart.payment.month , '') */
    const [monthAmount, setMonthAmount] = useState(cart.payment.month)
    
    const [creditCard, setCreditCard] = useState(cart?.payment?.method === 'Tarjeta de credito/debito' ? true : false)
    const [mercadoPago, setMercadoPago] = useState(cart?.payment?.method === 'Mercado pago' ? true : false)
    const [cash, setCash] = useState(cart?.payment?.method === 'Efectivo' ? true : false)

    const refCreditCard = useRef()
    const refMercadoPago = useRef()
    const refCash = useRef()

    const onChangeMA = (e) => {
        console.log("cambiaaaaaaaaaaa", e.target.value);
        setMonthAmount(e.target.value)
        selectPayment({method : 'Tarjeta de credito/debito', month: e.target.value})
    }

    const onClickOption = (e) => {
        if(refCreditCard.current.contains(e.target)){
            setCreditCard(true)
            setMercadoPago(false)
            setCash(false)
            selectPayment({method : 'Tarjeta de credito/debito', month: monthAmount.value})
        }
        if(refMercadoPago.current.contains(e.target)){
            setCreditCard(false)
            setMercadoPago(true)
            setCash(false)
            selectPayment({method : 'Mercado pago', month: 1})
        }
        if(refCash.current.contains(e.target)){
            setCreditCard(false)
            setMercadoPago(false)
            setCash(true)
            selectPayment({method : 'Efectivo', month: 1})
        }
    } 
    

    /* useEffect(()=>creditCard && selectPayment({method : 'Tarjeta de credito/debito', month: monthAmount.value}) , [monthAmount.value]) */

 return(
    <Container>
        <ItemPayment>
            <HeaderPayment onClick={onClickOption} ref={refCreditCard}>
                {/* <IconWrapper>
                    {
                        itemActive === 0 ? <RiArrowRightSLine/> : <RiArrowDownSLine/>
                    }
                </IconWrapper> */}
                <input type={'radio'} style={{marginRight: 10}} checked={creditCard} name="group1" />
                <TitlePayment>Tarjeta de credito/debito</TitlePayment>
            </HeaderPayment>
            {
                creditCard &&
                <ContentPayment>
                    <CreditCard
                        year={year}
                        month={month}
                        numberCard={numberCard}
                        monthCard={monthCard}
                        yearCard={yearCard}
                        codeCard={codeCard}
                        total={cart.total}
                        monthAmount={monthAmount}
                        onChangeMA={onChangeMA}
                    />
                </ContentPayment>
            }
        </ItemPayment>
        <ItemPayment>
            <HeaderPayment  onClick={onClickOption} ref={refMercadoPago}>
                {/* <IconWrapper>
                    {
                        itemActive === 1 ? <RiArrowRightSLine/> : <RiArrowDownSLine/>
                    }
                </IconWrapper> */}
                <input type={'radio'} style={{marginRight: 10}} checked={mercadoPago} name="group1" />
                <TitlePayment>Mercado pago</TitlePayment>
            </HeaderPayment>
            {
                mercadoPago &&
                <ContentPayment style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Button background={'#009ee3'} backgroundHover={'#00869f'}>Abrir ventana Mercado Pago</Button>
                </ContentPayment>
            }
        </ItemPayment>
        <ItemPayment>
            <HeaderPayment onClick={onClickOption} ref={refCash}>
                {/* <IconWrapper>
                    <RiArrowDownSLine/>
                </IconWrapper> */}
                <input type={'radio'} style={{marginRight: 10}} checked={cash} name="group1" />
                <TitlePayment>Pago en efectivo</TitlePayment>
            </HeaderPayment>
            {
                cash &&
                <ContentPayment style={{display: 'block', margin: 'auto 0'}}>
                    <div style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                        <TitleSelect>
                            Elegir Metodo de pago :
                        </TitleSelect>
                        <SelectCash>
                            <option value={'RAPIPAGO'}>Rapipago</option>
                            <option value={'PAGOFACIL'}>Pagofacil</option>
                        </SelectCash>
                    </div>
                    <TextSelect>
                     Hacé click en finalizar compra y podrás imprimir tu cupón de pago para acercarte a cualquier sucursal de
                     Pago Fácil o Rapipago dentro del plazo de 3 días. Este cupón también lo recibirás por mail.
                    </TextSelect>
                </ContentPayment>
            }
        </ItemPayment>
    </Container>
 )
}
 
export default Payment
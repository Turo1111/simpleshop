import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useAppContext } from '../../context/context'
import { useInputValue } from '../../hooks/useInputValue'
import ModalNewAddress from '../ModalNewAddress'
import { AddressShipping, Container, OptionShipping, TextAddress } from './styles'

const Shipping = () => {

    const {selectShipping, cart} = useAppContext()

    const [localShipping, setlocalShipping] = useState(cart.shipping.name === 'Retiro local' ? true : false)
    const [homeShipping, sethomeShipping] = useState(cart.shipping.name === 'Envio a domicilio' ? true : false)

    const refLocalShipping = useRef()
    const refHomeShipping= useRef()

    const [selectAddress, setSA] = useState(AddressSave[0])

    const [openNewAddress, setOpenNA] = useState(false)

    const onChangeOptionLS = (e) => {
        console.log(e.target);
        setlocalShipping(e.target.checked)
        if(e.target.checked){
            selectShipping({
                name: 'Retiro local',
                address: '',
                total: 0
            })
        }
    }

    const onChangeOptionHS = (e) => {
        if(e.target.checked){
            selectShipping({
                name: 'Envio a domicilio',
                address: `${selectAddress.address}`+", "+`${selectAddress.city}`+", "+`${selectAddress.state}`,
                total: selectAddress.total
            })
            console.log(cart.shipping.address);
            
        }
    } 

    const onClickOption = (e) => {
       
        if(refLocalShipping.current.contains(e.target)){
            setlocalShipping(true)
            sethomeShipping(false)
        }
        if(refHomeShipping.current.contains(e.target)){
            sethomeShipping(true)
            setlocalShipping(false)
            if(cart.shipping.address === ''){
                selectShipping({
                    name: 'Envio a domicilio',
                    address: `${AddressSave[0].address}`+", "+`${AddressSave[0].city}`+", "+`${AddressSave[0].state}`,
                    total: AddressSave[0].total
                })
            }
        }
    }   

    const onClickOptionAddress = (item) => {
        if(homeShipping){
            selectShipping({
                name: 'Envio a domicilio',
                address: `${item.address}`+", "+`${item.city}`+", "+`${item.state}`,
                total: item.total
            })
        }
        setSA(item)
    }


 return(
    <Container>
        <OptionShipping ref={refLocalShipping} onClick={onClickOption} >
            <div style={{display: 'flex', alignItems: 'center'}} >
                <input type={'radio'} style={{marginRight: 10}} checked={localShipping} onChange={onChangeOptionLS}  name="group1" />
                <div style={{fontFamily: 'CairoRegular', fontSize: 18}}>
                    Retiro desde el local : {}
                </div>
            </div>
            <div style={{fontFamily: 'CairoRegular', fontSize: 14}}>
                $ 0
            </div>
        </OptionShipping>
        <OptionShipping ref={refHomeShipping} onClick={onClickOption}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <input type={'radio'} style={{marginRight: 10}} checked={homeShipping} onChange={onChangeOptionHS}  name="group1"/>
                <div style={{fontFamily: 'CairoRegular', fontSize: 18}}>
                    Envio a domicilio : {cart.shipping.address}
                </div>
            </div>
            <div style={{fontFamily: 'CairoRegular', fontSize: 14}}>
                $ 593.99
            </div>
        </OptionShipping>
        <div style={{overflowY: 'scroll', height: '40vh'}} >
            <AddressShipping onClick={()=>setOpenNA(true)}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <TextAddress>
                        Crear nueva direccion
                    </TextAddress>
                </div>
                <TextAddress>
                    +
                </TextAddress>
            </AddressShipping>
            {
                AddressSave.map(item=>
                    <AddressShipping 
                        key={item.address}
                        active={cart.shipping.address === `${item.address}`+", "+`${item.city}`+", "+`${item.state}` && true}
                        onClick={()=>onClickOptionAddress(item)}
                    >
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <TextAddress>
                                Domicilio : {item.address}, {item.city}, {item.state}
                            </TextAddress>
                        </div>
                        <TextAddress>
                            $ {item.total}
                        </TextAddress>
                    </AddressShipping>
                )
            }
        </div>
        <ModalNewAddress open={openNewAddress} eClose={()=>setOpenNA(false)} />
    </Container>
 )
}
 
export default Shipping

const AddressSave = [
    {
        address: 'Moreno 1450',
        city: 'Concepcion',
        state: 'Tucuman',
        total: 559.99
    },
    {
        address: 'ElviraRawson 938',
        city: 'Concepcion',
        state: 'Tucuman',
        total: 559.99
    },
    {
        address: '25 de Mayo 659',
        city: 'San Miguel de Tucuman',
        state: 'Tucuman',
        total: 559.99
    }
]
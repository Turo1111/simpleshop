import React from 'react'
import useClickAway from '../../hooks/useClickAway'
import Modal from '../Modal'
import { useRef } from 'react'
import { Container } from './styles'
import Input from '../Input'

const ModalNewAddress = ({open, eClose}) => {

    const ModalFilters = useRef()
    useClickAway(ModalFilters, eClose)

 return(
    <Modal open={open} borderRadius={true} eClose={eClose} title={"Nueva direccion"} height={"auto"} el={ModalFilters} >
        <Input placeHolder={'Direccion'} />
        <Input placeHolder={'Ciudad'} />
        <Input placeHolder={'Provincia'} />
    </Modal>
 )
}
 
export default ModalNewAddress
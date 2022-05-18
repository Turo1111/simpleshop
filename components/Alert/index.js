import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Container, Transition } from './styles'

const Alert = ({msg, open, eClose, bg = 'green', position = 'bottom-end'}) => {

    let colorBG = '#99ff99'
    let pos = {
        top: '6%',
        right: '0.5%'
    }

    if(bg === 'green') colorBG = '#99ff99'
    
    if(bg === 'red' ) colorBG = '#ff4d4d'

    if(position === 'top-start') pos = { top: '6%', right: '85%'}
    if(position === 'top-center') pos = { top: '6%', right: '44%'}
    if(position === 'bottom-center') pos = { top: '90%', right: '44%'}
    if(position === 'bottom-start') pos = { top: '90%', right: '85%'}
    if(position === 'bottom-end') pos = { top: '90%', right: '0.5%'}

    
    useEffect(()=>{
        if (open) {
            setTimeout(function(){
                eClose()
            }, 4000);
        }
    },[open])

 return(
     <Transition open={open}>
        <Container bg={colorBG} pos={pos} open={open}>
            {msg}
        </Container>
     </Transition>
 )
}
 
export default Alert
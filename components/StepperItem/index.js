import React from 'react'
import { IconWrapper, ItemStepper, Title } from './styles'

const StepperItem = ({title, icon, noAfter, noBefore, active}) => {
 return(
    <ItemStepper noAfter={noAfter} noBefore={noBefore} active={active}>
        <IconWrapper active={active}>
            {icon}
        </IconWrapper>
        <Title>{title}</Title>
    </ItemStepper>
 )
}
 
export default StepperItem
import React from 'react'
import { Container, IconWrapper, ItemStepper, LineMid, Title } from './styles'
import StepperItem from '../StepperItem'

const Steppers = ({array, indexActive, setArrowLeft, setArrowRight}) => {

 return(
    <Container>
        {
            array.map((item, index)=>
                <StepperItem
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                    noAfter={index === 0 && true}
                    noBefore={index === (array.length-1) && true}
                    active={index <= indexActive && true}
                />    
            )
        }
    </Container>
 )
}
 
export default Steppers
import React from 'react'
import ItemCart from '../ItemCart'
import { Container } from './styles'

const ListCart = ({listproduct, style}) => {

 return(
    <Container style={style} >
        {
            listproduct.length === 0 ? 
                "vacio"
                :
                listproduct.map(item=>
                    <ItemCart key={item.id} {...item}/>
                )
        }
    </Container>
 )
}
 
export default ListCart
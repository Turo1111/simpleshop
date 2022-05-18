import Link from 'next/link'
import React from 'react'
import { Container } from './styles'

const Button = ({children, borderRadius, width, height, background, to, onClick, border, color, colorHover, backgroundHover, fontSize}) => {
 return (
   <div style={{margin: '0 15px'}}>
     {
       to ? 
        <Link href={to}>
          <Container fontSize={fontSize} borderRadius={borderRadius} width={width} height={height} background={background} onClick={onClick} border={border} color={color} colorHover={colorHover} backgroundHover={backgroundHover} >
            {children}
          </Container>
        </Link>
       :
        <Container fontSize={fontSize} borderRadius={borderRadius} width={width} height={height} background={background} onClick={onClick} border={border} color={color} colorHover={colorHover} backgroundHover={backgroundHover} >
          {children}
        </Container>
     }
   </div>
 )
}

export default Button
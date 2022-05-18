import styled from "styled-components"

export const Title = styled.h2 `
    font-family: CairoRegular;
    font-weight: 500;
    font-size: 16px;
`

export const Tag = styled.a `
    border: 1px solid #d9d9d9;
    padding: 5px;
    font-family: CairoRegular;
    margin:5px;
    font-size: 12px;
    :hover{
        border: 1px solid #5584AC;
    }
    ::first-letter{
        text-transform: uppercase;
    }
`

export const Circle = styled.div `
     width: 20px;
     height: 20px;
     -moz-border-radius: 50%;
     -webkit-border-radius: 50%;
     border-radius: 50%;
     background: ${props => props.color && props.color};
     margin: 5px;
     border: 1px solid #494949;
     :hover{
        border: 1px solid #D9D9D9;
        width: 25px;
        height: 25px;
     }
`
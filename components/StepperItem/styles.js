
import styled from 'styled-components'


export const ItemStepper = styled.li `
text-align: center;
list-style: none;
position: relative;
margin: 0 50px;
min-width: 150px;
    @media only screen and (max-width: 768px) {
        min-width: 120px;
        margin: 0 35px;
    }
    @media only screen and (max-width: 480px) {
        min-width: 70px;
        margin: 0 25px;
    }
    @media only screen and (max-width: 425px) {
        min-width: 60px;
        margin: 0 20px;
    }
    @media only screen and (max-width: 375px) {
        min-width: 50px;
        margin: 0 15px;
    }
::after {
    content: "";
    position: absolute;
    width: 100%;
    height: ${props => !props.noAfter && "8px"};
    background-color: ${props => props.active ? "#FEB139" : "#d9d9d9"};
    top: 32%;
    left: -50%;
    z-index: -1;
    @media only screen and (max-width: 768px) {
        top: 25%;
    }
}
::before {
    content: " ";
    position: absolute;
    width: 100%;
    height: ${props => !props.noBefore && "8px"};
    background-color: ${props => props.active ? "#FEB139" : "#d9d9d9"};
    top: 32%;
    left: 50%;
    z-index: -1;
    @media only screen and (max-width: 768px) {
        top: 25%;
    }
}
`

export const IconWrapper = styled.span `
display: flex;
align-items: center;
justify-content: center;
font-size: 30px;
color: white;
padding: 20px;
max-width: 74.5px;
position: relative;
background-color: ${props => props.active ? "#FEB139" : "#d9d9d9"};
border-radius: 50%;
margin: 0 auto;
    @media only screen and (max-width: 480px) {
        font-size: 25px;
        padding: 15px;
    }
    @media only screen and (max-width: 425px) {
        max-width: 60px;
    }
    @media only screen and (max-width: 375px) {
        max-width: 50px;
    }
`

export const Title = styled.p `
font-family: CairoRegular;
font-size: 18px;
margin: 0;
text-transform: uppercase;
    @media only screen and (max-width: 480px) {
        font-size: 12px;
    }
    @media only screen and (max-width: 475px) {
        font-size: 10px;
    }
`
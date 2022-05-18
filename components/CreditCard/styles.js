import styled from 'styled-components'

export const ContainerCreditCard = styled.div `
width: 450px;
height: 220px;
border-radius: 15px;
padding: 10px;
background-color: #d9d9d9;
box-shadow: 1px 1px 5px black;
    @media only screen and (max-width: 480px) {
        width: auto;
    }
    @media only screen and (max-width: 480px) {
        height: 180px;  
    }
`

export const SelectDate = styled.select `
padding: 5px;
margin: 10px;
font-family: 'CairoRegular';
font-size: 14px;
`

export const ContainerForm = styled.div `
    width: 40%;
    height: 100%;
    padding: 15px;
    @media only screen and (max-width: 480px) {
        width: 90%;
    }
`

export const TitleCard = styled.div `
    height: 45%;
    width: 100%;
    text-align: center;
    font-family: CairoRegular;
    font-size: 22px;
    @media only screen and (max-width: 480px) {
        font-size: 18px;
    }
    @media only screen and (max-width: 360px) {
        font-size: 14px;
    }
`

export const NumberCard = styled.div `
    font-family: CairoRegular;
    font-size: 22px;
    @media only screen and (max-width: 480px) {
        font-size: 18px;
    }
    @media only screen and (max-width: 360px) {
        font-size: 14px;
    }
`

export const VencCard = styled.div `
    font-family: CairoRegular;
    font-size: 18px;
    display: flex;
    padding: 0 5%;
    @media only screen and (max-width: 480px) {
        font-size: 16px;
    }
    @media only screen and (max-width: 360px) {
        font-size: 14px;
    }
`

export const NameCard = styled.div `
    font-family: CairoRegular;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    padding: 0 2%;
    @media only screen and (max-width: 480px) {
        font-size: 16px;
    }
    @media only screen and (max-width: 360px) {
        font-size: 14px;
    }
`
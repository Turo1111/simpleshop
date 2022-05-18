import styled from 'styled-components'
import { keyframes } from 'styled-components'

export const move = keyframes`
 from { right: -41vw;}
 to {   }
`

export const Container = styled.div`
 display: ${props => props.open ? "block" : "none" } ;
 position: absolute;
 width: 40vw;
 height: 75vh;
 background-color: white;
 z-index: 5;
 border: 1px solid black;
 top: 100%;
 right: 0%;
 animation-name: ${move};
 animation-duration: 2s;
    @media only screen and (max-width: 1440px) {
        width: 45vw;
        height: 85vh;
    }
    @media only screen and (max-width: 1366px) {
        width: 55vw;
        height: 90vh;
    }
    @media only screen and (max-width: 1024px) {
        width: 65vw;
        height: 90vh;
    }
    @media only screen and (max-width: 960px) {
        top: 0%;
        right: 0%;
        height: 100vh;
    }
    @media only screen and (max-width: 768px) {
        width: 100vw;
        height: 100vh;
    }
    @media only screen and (max-width: 480px) {
        width: 100vw;
        height: 85vh;
    }
    @media only screen and (max-width: 360px) {
        width: 100vw;
        height: 95vh;
    }
`

export const LineMid = styled.div `
    width: 100%;
    height: 75px;
    position: relative;
    margin: 0 15px;
    display: flex;
    :before { 
        content: '';
        position: absolute;
        bottom: 45%;
        border-bottom: 1px #494949 solid;
        width: 100%;
        z-index:0;
    }
    @media only screen and (max-width: 1024px) {
        height: 50px;
    }
`


export const Title = styled.h2 `
    font-family: CairoRegular;
    font-size: 28px;
    margin: 0;
    display: flex;
    align-items: center;
    font-weight: 100;
    @media only screen and (max-width: 1024px) {
        font-size: 22px;
    }
`

export const Total = styled.div`
 width: 100%;
 text-align: end;
 font-family: CairoRegular;
 font-size: 16px;
 padding: 5px 15px; 
 @media only screen and (max-width: 1024px) {
     font-size: 14px;
 }
`

export const ContainerButton = styled.div `
    width: 100%;
    display: flex;
    justify-content: end;
    padding: 5px 15px;
    @media only screen and (max-width: 375px) {
        padding: 5px 0;
    }
`
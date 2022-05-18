import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    margin: 10px 0;
`

export const LineMid = styled.div `
    width: 100%;
    height: 100px;
    position: relative;
    margin: 0 15px;
    display: flex;
    
    :before { 
        content: '';
        position: absolute;
        bottom: 45%;
        border-bottom: 2px #494949 solid;
        width: 100%;
        z-index:0;
    }
    @media only screen and (max-width: 1024px) {
        height: 75px;
        padding-top: 0;
    }
`

export const Title = styled.h2 `
    font-family: CairoRegular;
    font-size: 45px;
    margin: 0;
    display: flex;
    align-items: center;
    font-weight: 100;
    @media only screen and (max-width: 1024px) {
     font-size: 30px;
    }
    @media only screen and (max-width: 768px) {
     font-size: 25px;
    }
    @media only screen and (max-width: 425px) {
     font-size: 14px;
    }
    @media only screen and (max-width: 320px) {
     margin: 0;
    }
`

export const IconWrapper = styled.span `
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  color: black;
  padding: 5px;
  position: relative;
  @media only screen and (max-width: 1024px) {
     font-size: 20px;
    }
`

export const User = styled.a `
    font-family: CairoRegular;
    font-size: 18px;
    margin: 0;
    font-weight: 600;
    @media only screen and (max-width: 1024px) {
     font-size: 14px;
    }
`

export const LinkTab = styled.a `
    font-family: CairoRegular;
    font-size: 20px;
    margin: 0 3%;
    font-weight: 600;
    @media only screen and (max-width: 1024px) {
     font-size: 16px;
    }
    @media only screen and (max-width: 768px) {
     font-size: 20px;
    }
    @media only screen and (max-width: 425px) {
     font-size: 14px;
    }
    @media only screen and (max-width: 320px) {
     margin: 0;
    }
`
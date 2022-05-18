import styled from 'styled-components'

export const Container = styled.ul`
 width: 50%;
 margin: 0 auto;
 @media only screen and (max-width: 1366px) {
    width: 70%;
 }
 @media only screen and (max-width: 1024px) {
    width: 80%;
 }
 @media only screen and (max-width: 960px) {
    width: 90%;
 }
 @media only screen and (max-width: 768px) {
    width: 100%;
 }
 @media only screen and (max-width: 480px) {
    padding: 5px;
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
`

export const ItemPayment = styled.li `
    padding: 0 30px;
    list-style: none;
    @media only screen and (max-width: 480px) {
        padding: 0 5px;
    }
`

export const HeaderPayment = styled.div `
    display: flex;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #d9d9d9;
`

export const TitlePayment = styled.p `
    font-family: CairoRegular;
    font-size: 16px;
    margin: 0px 0px 0px 15px;
`

export const ContentPayment = styled.div `
    width: 100%;
    height: 300px;
    padding: 15px;
    display: flex;
    @media only screen and (max-width: 480px) {
        padding: 5px;
        display: block;
        height: auto;
    }
`

export const SelectCash = styled.select `
padding: 5px;
margin: 10px;
font-family: 'CairoRegular';
font-size: 18px;
height: 50px;
width: 200px;
border-radius: 10px;
    @media only screen and (max-width: 480px) {
        font-size: 14px;
    }
    @media only screen and (max-width: 360px) {
        height: auto;
        width: auto;
    }
`

export const TitleSelect = styled.div `
    font-family: CairoRegular;
    font-size: 18px;
    @media only screen and (max-width: 480px) {
        font-size: 14px;
    }
`

export const TextSelect = styled.div `
    width: 70%;
    margin: 0 auto;
    font-family: CairoRegular;
    font-size: 18px;
    @media only screen and (max-width: 480px) {
        font-size: 14px;
    }
`
import styled from "styled-components";

export const Container = styled.div `
    width: 80%;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    @media only screen and (max-width: 480px) {
      width: 95%;
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
  @media only screen and (max-width: 480px) {
   font-size: 18px;
  }
  @media only screen and (max-width: 360px) {
   font-size: 14px;
  }
`

export const Filter = styled.a `
    font-family: CairoRegular;
    font-size: 18px;
    margin: 0 10px;
    @media only screen and (max-width: 480px) {
     font-size: 14px;
    }
    @media only screen and (max-width: 360px) {
     font-size: 13px;
    }
`

export const DropDown = styled.ul `
  position: absolute;
  width: 70%;
  height: auto;
  top: 20%;
  background-color: white;
  z-index: 2;
  padding: 10px 0;
  box-shadow: 1px 1px 1px #d9d9d9;
  border-radius: 0px 0px 15px 15px;
`

export const ItemDropDown = styled.li `
  width: 100%;
  font-family: CairoRegular;
  font-size: 16px;
  list-style: none;
  padding: 10px 15px;
  :hover{
    background-color: #d9d9d9;
  }
`
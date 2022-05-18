import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    padding: 5px 15px;
    display: flex;
    justify-content: space-between;
`

export const IconWrapper = styled.span `
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: black;
  padding: 5px;
  position: relative;
  @media only screen and (max-width: 320px) {
      font-size: 25px;
  }
`

export const Title = styled.h2 `
    font-family: CairoRegular;
    font-size: 45px;
    margin: 0;
    display: flex;
    align-items: center;
    font-weight: 100;
    @media only screen and (max-width: 425px) {
     font-size: 30px;
    }
    @media only screen and (max-width: 320px) {
        font-size: 26px;
    }
`

export const LineMid = styled.div `
    width: 100%;
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
`

export const SearchContainer = styled.div `
    border-bottom: 1px solid #d9d9d9;
    padding: 5px 15px;
    @media only screen and (max-width: 320px) {
        padding: 15px;
    }
`

export const MenuContainer = styled.div `
    position: absolute;
    width: 320px;
    background-color: white;
    top: 70%;
    left: 15%;
    z-index: 7;
    box-shadow: 1px 1px 5px black;
    @media only screen and (max-width: 320px) {
        width: 86vw;
    }
`

export const ListLinks = styled.ul `
    padding: 10px 0;
    margin: 0;
    border-bottom: 1px solid #d9d9d9;
`

export const LinkTab = styled.li `
    font-family: CairoRegular;
    font-size: 20px;
    font-weight: 600;
    list-style: none;
    padding: 5px 25px;
    :hover{
        background-color: #d9d9d9;
    }
`

export const ListUser = styled.ul `
    padding: 10px 0;
    margin: 0;
`

export const ItemUser = styled.li `
    font-family: CairoRegular;
    font-size: 16px;
    font-weight: 600;
    list-style: none;
    padding: 5px 25px;
    display: flex;
    align-items: center;
    :hover{
        background-color: #d9d9d9;
    }
`
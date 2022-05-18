import styled from 'styled-components'

export const Container = styled.div`
 width: 50%;
 height: 60vh;
 margin: 0 auto;
 @media only screen and (max-width: 1366px) {
       width: 70%;
       height: 90vh;
    }
    @media only screen and (max-width: 1024px) {
       width: 80%;
       height: 80vh;
    }
    @media only screen and (max-width: 768px) {
       width: 100%;
       height: 70vh;
    }
    @media only screen and (max-width: 360px) {
       width: 100%;
       height: 100vh;
    }
    @media only screen and (max-width: 320px) {
       width: 100%;
       height: 100vh;
    }
`

export const SelectOption = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 15px;
    border-bottom: 1px solid #d9d9d9;
    
`

export const TextOption = styled.div `
    font-family: CairoRegular;
    font-size: 18px;
    @media only screen and (max-width: 480px) {
      font-size: 15px;
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

export const Total = styled.div`
 width: 100%;
 text-align: end;
 font-family: CairoRegular;
 font-size: 16px;
 padding: 5px 15px; 
  @media only screen and (max-width: 360px) {
      font-size: 14px;
    }
`
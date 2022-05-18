import styled from 'styled-components'

export const Container = styled.li`
 width: 100%;
 display: grid;
 margin: 10px 0;
 padding: 0 5%;
 max-height: 80px;
 grid-template-columns: 12% 40% 15% 10% 13% 10%;
 @media only screen and (max-width: 480px) {
    padding: 0;
 }
 @media only screen and (max-width: 425px) {
  grid-template-columns: 12% 35% 15% 14% 14% 10%;
 }
 @media only screen and (max-width: 320px) {
  grid-template-columns: 47% 15% 10% 18% 10%;
 }
`

export const Brand = styled.div `
  font-size: 16px;
  margin: 5px 15px;
  font-family: CairoBold;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
  @media only screen and (max-width: 425px) {
    font-size: 10px;
  }
`

export const Description = styled.div `
  font-size: 14px;
  margin: 5px 15px;
  font-family: CairoLight;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
  @media only screen and (max-width: 425px) {
    font-size: 10px;
  }
`

export const Total = styled.div `
  display: flex;
  align-items: center;
  font-size: 14px;
  margin: 5px 15px;
  font-family: CairoRegular;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
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
  :hover{
    color: red;
  }
  @media only screen and (max-width: 480px) {
    font-size: 15px;
  }
  
`

export const Circle = styled.div `
     width: ${props => props.active ? "25px":"20px"};
     height: ${props => props.active ? "25px":"20px"};
     -moz-border-radius: 50%;
     -webkit-border-radius: 50%;
     border-radius: 50%;
     background: ${props => props.color && props.color};
     margin: 0 5px;
     border:  ${props => props.active && "2px solid #d9d9d9"};
     border: 1px solid #d9d9d9;
     :hover{
        border: 1px solid #D9D9D9;
        width: 25px;
        height: 25px;
     }
     @media only screen and (max-width: 480px) {
      width: 15px;
      height: 15px;
     }
`

export const Size = styled.div `
    font-family: CairoBold;
    font-size: 14px;
    margin: 0 5px;
    -webkit-text-stroke: ${props => props.active && "1px #d9d9d9"};
    font-size: ${props => props.active && "20px"};
    @media only screen and (max-width: 480px) {
      font-size: 12px;
    }
    @media only screen and (max-width: 425px) {
      font-size: 10px;
    }
`

export const ContainerInput = styled.div `
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 15px;
  @media only screen and (max-width: 425px) {
    padding: 0;
  }
`

export const InputNumber = styled.input `
  width: 35px;
  height: 35px;
  text-align: center;
  font-family: CairoRegular;
  font-size: 14;
  @media only screen and (max-width: 425px) {
    width: 25px;
    height: 25px;
    font-size: 12;
  }
`
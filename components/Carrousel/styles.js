import styled from "styled-components";

export const Container = styled.div `
        width: 50vw;
    height: 50vh;
    position: relative;
    padding: 20px;
    margin: 30px auto;
    @media only screen and (max-width: 1024px) {
      width: 60vw;
    }
    @media only screen and (max-width: 768px) {
      width: 95vw;
      height: 45vh;
    }
    @media only screen and (max-width: 425px) {
      height: 30vh;
    }
    @media only screen and (max-width: 320px) {
      width: 100vw;
    }
`
export const Img = styled.div `
    width: 100%;
    height: 100%;
    display: ${props => props.active ? "flex" : "none"};
    justify-content: center;
    border-radius: 10px;
    transition: all 5000ms;
`

export const Circle = styled.div `
     width: 10px;
     height: 10px;
     -moz-border-radius: 50%;
     -webkit-border-radius: 50%;
     border-radius: 50%;
     background: ${props => props.active && "#d9d9d9"};
     margin: 0 5px;
     border: 1px solid #494949;
     :hover{
        width: 12px;
        height: 12px;
     }
`

export const ContainerCircle = styled.div `
    display: flex;
    position: absolute;
    left: 50%;
    top: 90%;
    transform: translate(-50%, -50%);
`

export const ContainerArrow = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    padding: 0 20px;
`

export const IconWrapper = styled.span `
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  padding: 5px;
  color: #d9d9d9;
  height: 100%;
  :hover{
    font-size: 30px;
  }
`

export const Transition = styled.div `
   opacity: ${props => props.open ? "1" : "0"};
   transition: all 2500ms;
`
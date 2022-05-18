import styled from "styled-components";

export const Container = styled.div `
    height: 250px;
    position: relative;
    @media only screen and (max-width: 1024px) {
        height: 200px;
    }
    @media only screen and (max-width: 768px) {
        height: 150px;
    }
    @media only screen and (max-width: 425px) {
        height: 200px;
    }
`
export const Img = styled.div `
    width: 100%;
    height: 100%;
    display: ${props => props.active ? "flex" : "none"};
    opacity: ${props => props.active ? "1" : "0"};
    justify-content: center;
    /* background-color: ${props => props.bg && props.bg}; */
    background-image: ${props => props.src && `url(${props.src})`};
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    transition: all 1500ms;
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
     :hover{
        border: 1px solid #D9D9D9;
        width: 25px;
        height: 25px;
     }
`

export const ContainerColor = styled.div `
    display: flex;
    position: absolute;
    left: 40%;
    top: 80%;
    transform: translate(-50%, -50%);
`

export const ContainerSize= styled.div `
    display: flex;
    position: absolute;
    left: 40%;
    top: 68%;
    transform: translate(-50%, -50%);
`

export const Size = styled.div `
     font-family: CairoBold;
     margin: 0 5px;
     -webkit-text-stroke: ${props => props.active && "1px #d9d9d9"};
     font-size: ${props => props.active && "20px"};
     :hover{
        font-size: 20px;
        -webkit-text-stroke: 1px #d9d9d9;
     }
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
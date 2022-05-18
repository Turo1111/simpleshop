import styled from "styled-components";

export const Container = styled.button `
  width: ${props => props.width ? props.width : "100%"};
  height: ${props => props.height ? props.height : "50px"};
  border: 0;
  background-color: ${props => props.background ? props.background : "#EA5455"};
  border-radius: ${props => props.borderRadius ? props.borderRadius : "10px"};
  display: flex;
  justify-content:center;
  align-items:center;
  font-weight: 300;
  font-family: CairoRegular;
  color: ${props => props.color ? props.color : "white"};
  border-radius: ${props => props.border ? props.border : "0"};
  padding: 0 20px;
  font-size: ${props => props.fontSize ? props.fontSize : "15px"};
  :hover {
    border: 2px solid ${props => props.background ? props.background : "#EA5455"};
    background-color: ${props => props.backgroundHover ? props.backgroundHover : "none"};
    color: ${props => props.colorHover ? props.colorHover : "0"};
  }
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`
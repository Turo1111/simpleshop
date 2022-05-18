import styled from "styled-components";
import {ImSearch} from 'react-icons/im'

export const InputSearch = styled.input `
  width: 100%;
  height: ${props => props.height ? props.height : "30px"};
  border: none;
  box-shadow: 1px 1px 5px black;
  font-size: 15px;
  padding: 20px;
  border-radius: ${props => props.radius ? props.radius : "none"};
  ::placeholder {
    font-size: 15px;
  }
  :focus{
    border:none;	
    outline:none;
  }
  @media only screen and (max-width: 1024px) {
    padding: 15px;
    font-size: 12px;
  }
`

export const Container = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: search;
  width: ${props => props.width ? props.width : "50%"};
  margin: ${props => props.margin ? props.margin : "0"};
  @media only screen and (max-width: 1024px) {
    width: ${props => props.width ? props.width : "50%"};
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

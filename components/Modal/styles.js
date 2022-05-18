import styled from "styled-components"

export const Container = styled.div `
  display: ${props => props.open ? 'flex': 'none'};
  position: fixed; /* Stay in place */
  z-index: 2; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  justify-content: center;
  align-items: center;
  
`


export const Content = styled.div `
  background-color: rgba(250, 250, 250);
  /* margin: 10% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: ${props => props.width && props.width }; /* Could be more or less, depending on screen size */
  height: ${props => props.height && props.height };
  border-radius: ${props => props.borderRadius ? '10px': '0'};
  position: relative;
  overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
    }
  @media only screen and (max-width: 1440px) {
   width: ${props => props.width && '40%' };
  }
  @media only screen and (max-width: 1366px) {
    width: ${props => props.width && '50%' };
  }
  @media only screen and (max-width: 1024px) {
    width: ${props => props.width && '60%' };
  }
  @media only screen and (max-width: 1024px) {
    height: 90vh;
  }
  @media only screen and (max-width: 768px) {
    width: ${props => props.width && '90%' };
  }
  @media only screen and (max-width: 375px) {
    width: ${props => props.width && '98%' };
  }
`

export const IconWrapper = styled.div `
    margin: 0 10px;
    font-size: 15px;
    text-align: end;
    :hover{
        color: #FF7878;
    }
`

export const ModalContent = styled.div `
  width: 100%;
  padding: 5px 20px;
`

export const ModalButton = styled.div `
  display: ${props => props.modalButton ? "flex" : "none" };
  justify-content: end; 
  bottom: 0;
  width: 94%;
  margin-bottom: 5px;
`

export const Button = styled.button `
    padding: 10px 30px;;
    font-size: 12px;
    color: #5584AC;
    border: 1px solid #5584AC;
    background: transparent;
    border-radius: 10px;
    margin: 5px;
    :hover{
        background-color: #5584AC;
        color: white;
    }
`

export const ModalHeader = styled.div `
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: ${props => props.title ? "10px" : "none" };
  border-bottom: ${props => props.title ? "1px solid gray" : "none" };
`

export const Title = styled.div `
  font-size: 20px;
  font-weight: 400;
`
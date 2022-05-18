import styled from "styled-components";

export const Container = styled.div `
  width: 250px;
  margin: 10px;
  margin: 15px;
  /* box-shadow: 1px 2px 3px black; */
  position: relative;
  border-radius: 5px;
  @media only screen and (max-width: 1024px) {
    width: 200px;
  }
  @media only screen and (max-width: 768px) {
    width: 150px;
  }
  @media only screen and (max-width: 425px) {
    width: 200px;
  }
`

export const Brand = styled.div `
  font-size: 16px;
  margin: 5px 15px;
  font-family: CairoBold;
  @media only screen and (max-width: 1024px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const Description = styled.div `
  font-size: 14px;
  margin: 5px 15px;
  font-family: CairoLight;
  @media only screen and (max-width: 1024px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const Price = styled.div `
  font-size: 16px;
  margin: 5px 15px;
  font-family: CairoBold;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const ContainerTags = styled.div `
    display: flex;
    width: 100%;
    justify-content: space-between;
    position: absolute;
    padding: 0px 15px;
    z-index: 1;
`

export const Tag1 = styled.p `
    padding: 2px 15px;
    font-family: CairoRegular;
    font-weight: 600;
    border: 1px solid black;
    @media only screen and (max-width: 1024px) {
      font-size: 14px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 10px;
    }
`

export const TagSale = styled.p `
    padding: 5px;
    font-family: CairoRegular;
    border-radius: 50%;
    font-weight: 600;
    background-color: #FF9100;
    @media only screen and (max-width: 1024px) {
      font-size: 14px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 10px;
    }
`

export const Transition = styled.div `
   opacity: ${props => props.open ? "1" : "0"};
   transition: all 2500ms;
`

export const Transition2 = styled.div `
   opacity: ${props => props.open ? "0" : "1"};
   transition: all 2500ms;
`
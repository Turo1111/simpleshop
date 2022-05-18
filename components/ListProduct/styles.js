import styled from "styled-components";

export const Container = styled.div `
  width: 80%;
  padding: 30px 50px;
  display: flex;
  -webkit-flex-wrap: wrap;
   -ms-flex-wrap: wrap;
   flex-wrap: wrap;
  justify-content: center;
  @media only screen and (max-width: 1024px) {
    padding: 0;
  }
`
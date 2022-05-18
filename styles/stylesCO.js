import styled from 'styled-components'

export const ContainerListCart = styled.div`
 width: 50%;
 margin: 0 auto;
 height: 50vh;
 @media only screen and (max-width: 1366px) {
    width: 70%;
    height: 60vh;
 }
 @media only screen and (max-width: 1024px) {
    width: 80%;
    height: 60vh;
 }
 @media only screen and (max-width: 768px) {
    width: 100%;
 }
`

export const ContainerButton = styled.div `
    display: flex;
    justify-content: end;
    width: 50%;
    margin: 15px auto;
    @media only screen and (max-width: 1366px) {
        width: 80%;
    }
    @media only screen and (max-width: 1024px) {
       width: 90%;
    }
`
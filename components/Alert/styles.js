import styled from 'styled-components'

export const Container = styled.div`
 position: fixed;
 /* background-color: #99ff99; */
 /* background-color: #ff4d4d; */
 background-color: ${props => props.bg && props.bg};
 width: 250px;
 height: 50px;
 border-radius: 15px 0px 15px 15px;
 right: ${props => props.pos && props.pos.right};
 top: ${props => props.pos && props.pos.top};
 display: ${props => props.open ? 'flex' : 'none'};;
 justify-content:center;
 align-items: center;
 font-family: CairoBold;
 color: white;
 z-index: 8;
 transition: display 5s;
`

export const Transition = styled.div `
   opacity: ${props => props.open ? "1" : "0"};
   transition: all 2500ms;
`
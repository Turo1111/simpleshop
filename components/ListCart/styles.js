import styled from 'styled-components'

export const Container = styled.ul`
 padding: 10px;
 height: 65%;
 margin-top: 0;
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
`
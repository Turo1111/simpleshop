import styled from 'styled-components'

export const Container = styled.div`
    width: 50%;
    height: 50vh;
    margin: 0 auto;
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

export const OptionShipping = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 15px;
    border-bottom: 1px solid #d9d9d9;
    
`

export const AddressShipping = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    padding: 10px;
    border-bottom: 1px solid #d9d9d9;
    margin: 10px auto;
    border-left: ${props => props.active && '5px solid #2a6fdb'};
    :hover{
        border-bottom: 1px solid #2a6fdb;
        background-color: #d9d9d9;
    }
    @media only screen and (max-width: 480px) {
        width: 90%;
    }
    @media only screen and (max-width: 360px) {
        width: 95%;
        padding: 10px 5px;
    }
`

export const TextAddress = styled.div `
    font-family: CairoRegular;
    font-size: 14px;
    @media only screen and (max-width: 360px) {
        font-size: 12px;
    }
`
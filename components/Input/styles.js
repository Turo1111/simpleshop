import styled from "styled-components";

export const Input = styled.input `
    margin: 15px 0;
    width: 100%;
    font-size: 15px;
    padding: 10px;
    border-radius: 10px;
    background-color: #f7f7f7;
    border: 1px solid gray;
    box-shadow: 1px 1px 1px gray;
    :focus {
      border-radius: 10px;
      outline:none;
    }
    @media only screen and (max-width: 425px) {
      padding: 6px;
      margin: 5px 0;
    }
`

export const IconWrapper = styled.div `
  font-size: 15px;
  display: flex;
  margin: 0px 10px;
  align-items: center;
  position: absolute;
  top: 40%;
  left: 88%;
  color: #757575;
`

const InputWrapper = ({className, placeholder, icon, input, type="text", max}) => {
    return (
        <div className={className}>
            <Input placeholder={placeholder} {...input} type={type} maxLength={max}/>
            <IconWrapper>{icon}</IconWrapper>
        </div>
    )
  }
  
  export const TextField = styled(InputWrapper) `
    font-size: 14px;
    position: relative;
    margin: 0px 0;
  `
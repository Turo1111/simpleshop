import React from "react"
import { AiOutlineClose } from "react-icons/ai"
import { useRef } from "react"
import { Button, Container, Content, IconWrapper, ModalButton, ModalContent, ModalHeader, Title } from "./styles"

const Modal = ({
    children,
    open = false,
    eClose,
    title,
    modalButton = false,
    onButton1,
    onButton2,
    borderRadius = false,
    width = "30%",
    height = "35%",
    el
}) => {


    return (
        <Container open={open} 
        >
            <Content
                borderRadius = {borderRadius}
                width = {width}
                height = {height}
                ref={el}
            >   
                <ModalHeader title={title}>
                    <Title>
                        {title}
                    </Title>
                    <IconWrapper onClick={eClose} >
                        <AiOutlineClose/>
                    </IconWrapper>
                </ModalHeader>
                <ModalContent>
                    {children}
                </ModalContent>
                <ModalButton modalButton={modalButton}>
                    <Button onClick={onButton1} >Cancelar</Button>
                    <Button onClick={onButton2} >Aceptar</Button>
                </ModalButton>
            </Content>
        </Container>
    )
}

export default Modal
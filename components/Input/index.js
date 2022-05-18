import React from "react"
import { TextField } from "./styles"

const Input = ({
    placeHolder,
    input,
    icon,
    type,
    max
}) => {
    return (
        <TextField placeholder={placeHolder} icon={icon} input={input} type={type} max={max}></TextField>
    )
}

export default Input
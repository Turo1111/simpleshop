import { useState } from "react"

export const useInputValue = (initialValue, onlyType) => {

  const esLetra = (caracter) => {
    let ascii = caracter.toUpperCase().charCodeAt(0);
    return ascii > 64 && ascii < 91;
  };

  const [value, setvalue] = useState(initialValue)
  const onChange = e => {
    if (onlyType === 'number') {
      !isNaN(e.target.value)  && setvalue(e.target.value)
      console.log("solo acepta numeros");
    }
    if (onlyType === 'string'){
      esLetra(e.target.value) && setvalue(e.target.value)
      console.log("solo acepta letras");
    }
    if(onlyType === ''){
      setvalue(e.target.value)
    }
  }
  
  return { value, onChange }
}
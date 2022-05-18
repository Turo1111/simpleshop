import React from 'react'
import { Container, DivSearch, IconSearch, InputSearch } from './styles'

export const Search = ({placeholder, search, margin, radius='0', width}) => {

  return (
    <Container margin={margin} width={width}>
      <InputSearch placeholder={placeholder} radius={radius} {...search}  />
    </Container>
  )
}
import React from 'react'
import { HeaderContainer, Logo, SearchInput } from '../styles/Header.styled'
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <HeaderContainer>
        <Logo/>
        <SearchInput placeholder='search'/>
    </HeaderContainer>
  )
}

export default Header
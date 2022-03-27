import React, { useState } from 'react';
import {
  NavContainer,
  Logo,
  Hamburger,
  Menu,
  LeftSideContainer,
} from '../styles/Nav.stayled';
import { SearchInput } from '../styles/Header.styled';
import { NavLink } from 'react-router-dom';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Create', path: '/create' },
  { name: 'About us', path: '/about' },
  { name: 'Explore', path: '/explore' },
  { name: 'S', path: '/settings' },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavContainer>
      <LeftSideContainer>
        <Logo />
        <SearchInput placeholder='search' />
      </LeftSideContainer>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        {links.map((link, index) => (
          <NavLink key={index} to={link.path} exact>
            {link.name}
          </NavLink>
        ))}
      </Menu>
    </NavContainer>
  );
};

export default Nav;

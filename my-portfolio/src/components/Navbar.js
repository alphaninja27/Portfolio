// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.header`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;

  li a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }
`;

const Navbar = ({ toggleTheme, theme }) => (
  <NavbarWrapper>
    <h1>Your Name</h1>
    <NavLinks>
      <li><a href="#home">Home</a></li>
      <li><a href="#work">Work Experience</a></li>
      <li><a href="#education">Education</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#achievements">Achievements</a></li>
      <li><a href="#contact">Contact</a></li>
      <li>
        <label className="switch">
          <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
          <span className="slider"></span>
        </label>
      </li>
    </NavLinks>
  </NavbarWrapper>
);

export default Navbar;

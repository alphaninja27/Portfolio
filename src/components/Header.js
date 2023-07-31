import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AnimatedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Dot = styled.div`
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  pointer-events: none;
  animation: moveDots 10s linear infinite; /* Use the same keyframes as in GlobalStyles.js */

  /* Randomize initial position */
  left: ${(props) => `${Math.random() * 100}vw`};
  top: ${(props) => `${Math.random() * 100}vh`};
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 1rem;

    li {
      cursor: pointer;
      transition: color 0.2s;

      &:hover {
        color: #e31b6d;
      }
    }
  }
`;

const Nav = styled.nav`
  /* Your navigation styles here */
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  /* Your navigation link styles here */
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #e31b6d;
  }
`;

const Header = () => {
    return (
      <HeaderContainer>
        <Logo>Armaan Nayyar</Logo>
        <Nav>
          <NavLink to="/Portfolio">Home</NavLink>
          {/* Add links for other sections here */}
          {/* <NavLink to="/education">Education</NavLink> */}
          {/*<NavLink to="/work-experience">Work Experience</NavLink> */}
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/passion-projects">Achievements & Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </Nav>
      </HeaderContainer>
    );
  };

export default Header;

import React from 'react';
import styled from 'styled-components';

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavList>
        <NavItem><Cv href="#cv">Curriculum Vitae</Cv></NavItem>
        <NavItem><SayHello href="https://www.linkedin.com/in/sammy-olsson/" target="_blank">Say Hello</SayHello></NavItem>
      </NavList>
    </NavbarWrapper>
  );
}

// STYLING

const NavbarWrapper = styled.div`
  padding: 10px 0;
  padding: 1.2rem 0;
  display: flex;
  justify-content: flex-end;
  margin-right: 250px;
  margin-top: 20px;

  @media (max-width: 768px) {
    display: none;
    
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  font-family: 'IBM Plex Sans', sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavItem = styled.li`
  margin: 0 10px;
  font-size: 18px;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const Cv = styled.a`
  text-decoration: none;
  color: #000000;
`;

const SayHello = styled.a`
  text-decoration: none;
  color: #6E07F3;
  border: 3px solid #6E07F3;
  border-radius: 50px;
  padding: 10px 20px;
  transition: border-color 0.3s, color 0.3s; 

  &:hover {
    background-color: #6E07F3; 
    color: #FFFFFF;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;
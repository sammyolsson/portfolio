import React from 'react';
import styled from 'styled-components';

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavList>
        <NavItem><Cv href="https://www.linkedin.com/in/sammy-olsson/" target="_blank">Curriculum Vitae</Cv></NavItem>
        <NavItem><SayHello href="https://www.linkedin.com/in/sammy-olsson/" target="_blank">Say Hello</SayHello></NavItem>
      </NavList>
    </NavbarWrapper>
  );
}

// Updated STYLING

const NavbarWrapper = styled.nav`
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: transparent;

  @media (max-width: 768px) {
    justify-content: center;
    padding: 1.2rem 1rem;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NavItem = styled.li`
  font-size: 1rem;
  font-weight: 600;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const linkStyle = `
  text-decoration: none;
  color: inherit;
  padding: 8px 16px;
  border-radius: 25px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #CCF381; // Adjust hover effect color if needed
    color: #4731D3; // Adjust for contrast
  }
`;

const Cv = styled.a`${linkStyle}`;
const SayHello = styled.a`
  ${linkStyle}
  border: 2px solid #000000;
`;


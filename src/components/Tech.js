/* eslint-disable max-len */
// IMPORTS //

import React from 'react';
import styled from 'styled-components';

// COMPONENT //

export const Tech = () => {
  return (
    <TechContainer>
      <SectionTitle>Tech I know and love</SectionTitle>
      <TechParagraph>
        HTML, CSS, <TechMark>JavaScript</TechMark>, Flexbox, Responsive Design,<br />
        Git, <TechMark>React</TechMark>,
        Web Accessibility,  Styled Components<br />
        Redux, Express, Mongo DB, <TechMark>Node.js</TechMark>,
        RESTful API:s,<br />
        Github, Mob- and Pair-programming, Grid.
      </TechParagraph>
    </TechContainer>
  )
}

// STYLING //
const TechContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #4731D3;
    padding-top: 250px;
    padding-bottom: 250px;
    justify-content: center;

    @media (max-width: 768px) {
    padding: 60px 10px;
  }
`;

const SectionTitle = styled.h2`
color: #CCF381;
font-weight: 700;
font-size: 80px;
line-height: 108px;

@media (max-width: 768px) {
    font-size: 32px;
    line-height: 42px;
  }
`;

const TechParagraph = styled.p`
color: #CCF381;
font-size: 1.8rem;
padding: 30px;

@media (max-width: 768px) {
    font-size: 1rem;
    line-height: 20px; 
  }
`;

const TechMark = styled.mark`
  background-color: #CCF381;
  padding: 3px;
  color: #4731D3;
`;
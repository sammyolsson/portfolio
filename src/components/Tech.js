// IMPORTS //

import React from 'react';
import styled from 'styled-components';

// COMPONENT //

export const Tech = () => {
  return (
    <TechContainer>
      <SectionTitle>Tech I know and love</SectionTitle>
      <TechParagraph>
      HTML, CSS, JavaScript, ES6, JSX, React,<br />
      Redux, Node.js, Mongo DB, API:s,<br /> Web Accessibly,
      mob-programming, pair-programming, GitHub.
      </TechParagraph>
    </TechContainer>
  )
}

// STYLING //
const TechContainer = styled.div`
background-color: #4731D3;
color: #4731D3;
display: flex;
height: 100%;
align-items: center;
flex-direction: column;
`;

const SectionTitle = styled.h2`
color: #CCF381;
font-size: 45px;
margin-bottom: 10px;
`;

const TechParagraph = styled.p`
display: flex;
text-align: center;
color: #CCF381;
font-size: 1.8rem;
padding: 30px;
`;
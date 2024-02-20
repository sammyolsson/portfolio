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
        <TechItem>HTML</TechItem><TechItem>CSS</TechItem> <TechItem>JavaScript</TechItem><TechItem>Responsive Design</TechItem>
        <TechItem>Git</TechItem> <TechItem>React</TechItem><TechItem>Flexbox</TechItem>
        <TechItem>Styled Components</TechItem>
        <TechItem>Redux</TechItem><TechItem>Express</TechItem><TechItem>Mongo DB</TechItem><TechItem>Node.js</TechItem>
        <TechItem>RESTful API:s</TechItem>
        <TechItem>Github</TechItem>
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
  padding-top: 50px;
  padding-bottom: 50px;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const SectionTitle = styled.h2`
  color: #CCF381;
  font-weight: 700;
  font-size: clamp(1.9rem, 5vw, 80px);
  line-height: 1.2;
  margin-bottom: 2rem;
  font-family: 'IBM Plex Sans', sans-serif;
`;

const TechParagraph = styled.p`
  color: #CCF381;
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  padding: 0 20px;
  line-height: 1.6;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

// Function to generate random rotation degrees
const getRandomRotation = () => `${Math.random() * 20 - 10}deg`; // Random rotation between -10deg and +10deg

// Function to generate random font size
const getRandomFontSize = () => `${Math.random() * 0.2 + 0.9}em`; // Random font size between 0.9em and 1.1em

const TechItem = styled.span`
  background-color: #CCF381;
  color: #4731D3;
  padding: 5px 10px;
  border-radius: 5px;
  display: inline-block;
  transform: rotate(${getRandomRotation});
  font-size: ${getRandomFontSize};
  margin: 5px;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(0deg) scale(1.1);
  }
`;
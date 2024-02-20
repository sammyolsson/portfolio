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
  padding-top: 150px;
  padding-bottom: 150px;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 60px 20px; // Increased side padding for smaller screens
  }
`;

const SectionTitle = styled.h2`
  color: #CCF381;
  font-weight: 700;
  font-size: clamp(1.9rem, 5vw, 80px); // Responsive font size
  line-height: 1.2;
  margin-bottom: 2rem; // Added margin for separation
  font-family: 'IBM Plex Sans', sans-serif;
`;

const TechParagraph = styled.p`
  color: #CCF381;
  font-size: clamp(1.2rem, 3vw, 1.8rem); // Responsive font size
  padding: 0 20px; // Adjusted padding
  line-height: 1.6; // Increased line height for readability
  text-align: center;
  display: flex; // Using flexbox
  flex-wrap: wrap; // Allow items to wrap
  gap: 10px; // Space between tech items
  justify-content: center; // Center items horizontally
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
  display: inline-block; // Use inline-block for better rotation handling
  transform: rotate(${getRandomRotation}); // Apply random rotation
  font-size: ${getRandomFontSize}; // Apply random font size
  margin: 5px; // Add some margin to prevent overlap
  transition: transform 0.3s ease; // Smooth transition for hover effect

  &:hover {
    transform: rotate(0deg) scale(1.1); // Reset rotation and scale up on hover
  }
`;
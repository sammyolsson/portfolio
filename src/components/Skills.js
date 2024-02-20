// IMPORTS //
import React from 'react';
import styled from 'styled-components';

// COMPONENT //
export const Skills = () => {
  return (
    <Section>
      <SectionTitle>My Developer Skills</SectionTitle>
      <SkillsGrid>
        <SkillSet>
          <SkillHeader>Frontend</SkillHeader>
          <SkillItem>HTML</SkillItem>
          <SkillItem>CSS</SkillItem>
          <SkillItem>JavaScript</SkillItem>
          <SkillItem>React</SkillItem>
          <SkillItem>Redux</SkillItem>
          <SkillItem>Styled Components</SkillItem>
        </SkillSet>
        <SkillSet>
          <SkillHeader>Backend</SkillHeader>
          <SkillItem>Node.js</SkillItem>
          <SkillItem>MongoDB</SkillItem>
          <SkillItem>Express</SkillItem>
          <SkillItem>RESTful APIs</SkillItem>
          <SkillItem>JSON</SkillItem>
        </SkillSet>
        <SkillSet>
          <SkillHeader>Tools</SkillHeader>
          <SkillItem>GitHub</SkillItem>
          <SkillItem>Postman</SkillItem>
          <SkillItem>Figma</SkillItem>
          <SkillItem>Slack</SkillItem>
          <SkillItem>Git</SkillItem>
        </SkillSet>
        <SkillSet>
          <SkillHeader>Other</SkillHeader>
          <SkillItem>UX/UI Design</SkillItem>
          <SkillItem>Microsoft Azure</SkillItem>
          <SkillItem>Microsoft 365</SkillItem>
          <SkillItem>Low-Code</SkillItem>
          <SkillItem>Agile Methodology</SkillItem>
          <SkillItem>Pair/Mob-Programming</SkillItem>
        </SkillSet>
        <SkillSet>
          <SkillHeader>Happening</SkillHeader>
          <SkillItem>TypeScript</SkillItem>
          <SkillItem>React Native</SkillItem>
          <SkillItem>Python</SkillItem>
        </SkillSet>
      </SkillsGrid>
    </Section>
  );
};

// STYLING //

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #4731D3;
  padding: 50px 20px;
  justify-content: center;
`;

const SectionTitle = styled.h2`
  color: #CCF381;
  font-weight: 700;
  font-size: clamp(1.9rem, 5vw, 80px);
  margin-bottom: 2rem;
  font-family: 'IBM Plex Sans', sans-serif;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  justify-items: center;
  padding: 0 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SkillSet = styled.div`
  background: #CCF381;
  color: #4731D3;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const SkillHeader = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 10px;
  text-align: center;
`;

const SkillItem = styled.p`
  margin: 5px 0;
  font-size: 1.4rem;
  text-align: center;
`;
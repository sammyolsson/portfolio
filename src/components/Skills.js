// IMPORTS //

import React from 'react';
import styled from 'styled-components';

// COMPONENT //

export const Skills = () => {
  return (
    <Section>
      <SectionTitle>My developer skills</SectionTitle>
      <SkillsLists>
        <SkillsUl>
          <MainSkill>Frontend</MainSkill>
          <SkillsLi>HTML</SkillsLi>
          <SkillsLi>CSS</SkillsLi>
          <SkillsLi>JavaScript</SkillsLi>
          <SkillsLi>React</SkillsLi>
          <SkillsLi>Redux</SkillsLi>
          <SkillsLi>Styled Components</SkillsLi>
        </SkillsUl>
        <SkillsUl>
          <MainSkill>Backend</MainSkill>
          <SkillsLi>Node.js</SkillsLi>
          <SkillsLi>MongoDB</SkillsLi>
          <SkillsLi>Express</SkillsLi>
          <SkillsLi>RESTful API:s</SkillsLi>
          <SkillsLi>JSON</SkillsLi>
        </SkillsUl>
        <SkillsUl>
          <MainSkill>Tools</MainSkill>
          <SkillsLi>GitHub</SkillsLi>
          <SkillsLi>Postman</SkillsLi>
          <SkillsLi>Figma</SkillsLi>
          <SkillsLi>Slack</SkillsLi>
          <SkillsLi>Git</SkillsLi>
        </SkillsUl>
        <SkillsUl>
          <MainSkill>Other</MainSkill>
          <SkillsLi>UX/UI Design</SkillsLi>
          <SkillsLi>Microsoft Azure & 365</SkillsLi>
          <SkillsLi>Low-Code</SkillsLi>
          <SkillsLi>Agile Methodology</SkillsLi>
          <SkillsLi>Pair/Mob-Programming</SkillsLi>
        </SkillsUl>
        <SkillsUl>
          <MainSkill>Happening</MainSkill>
          <SkillsLi>TypeScript</SkillsLi>
          <SkillsLi>React Native</SkillsLi>
          <SkillsLi>Python</SkillsLi>
        </SkillsUl>
      </SkillsLists>
    </Section>
  )
}

// STYLING //

const SectionTitle = styled.h2`
color: #CCF381;
font-size: 45px;
margin-bottom: 10px;
font-weight: 700;
font-size: 80px;
line-height: 108px;
margin: 35px 0 35px 0;
font-family: 'IBM Plex Sans', sans-serif;

@media screen and (max-width: 668px) {
font-size: 2.2rem;
line-height: 50px;
  }
`;

const Section = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #4731D3;
padding-top: 50px;
padding-bottom: 120px;
height: fit-content;


@media screen and (max-width: 668px) {
  flex-direction: column;
  }
`;

const SkillsLists = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
text-align: center;
width: 70%;
gap: 80px;
margin-top: 50px;
font-family: 'IBM Plex Sans', sans-serif;
gap: 30px;

@media screen and (max-width: 668px) {
  text-align: center;
  flex-direction: column;
  }
`

const SkillsUl = styled.ul`
font-size: 19px;
line-height: 32px;
list-style: none;
color: #CCF381;

@media screen and (max-width: 668px) {
  text-align: center;
  }
`

const SkillsLi = styled.li`
margin-bottom: 8px;
margin-top: 15px;
font-size: 20px;

@media screen and (max-width: 668px) {
  text-align: center;
  
  }
`

const MainSkill = styled.mark`
background-color: #CCF381;
color: #4731D3;
font-size: 1.3em;
padding: 8px;
justify-content: center;
border-radius: 3px;

@media screen and (max-width: 668px) {
  text-align: center;
  flex-direction: column;
}
`
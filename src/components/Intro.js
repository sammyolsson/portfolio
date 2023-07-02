// IMPORTS //

import React from 'react';
import styled from 'styled-components';
import ProfileImage from '../assets/placeholder.svg';

// COMPONENT //

export const Intro = () => {
  return (
    <IntroContainer>
      <TextSection>
        <h3>Sammy Olsson</h3>
        <h2>Fullstack Developer</h2>
        <h4>with +10 years experience in tech</h4>
        <Image src={ProfileImage} alt="Profile Picture" />
      </TextSection>
      <InfoSection>
        <h3>👋 Hello there!</h3>
        <p>I am Sammy. An experienced IT consultant with a proven track record of delivering
      successful projects across various industries.
      With over a decade of experience in the field, I specialize in Microsoft 365,
      low-code development, and automation using Power Apps and Power Automate.
        </p>
    👨‍💻 Prior to this I study Full Stack Development at<StyledLink href="https://www.technigo.io/" target="_blank">technigo.io</StyledLink>
      </InfoSection>
    </IntroContainer>
  )
}

// STYLING //

const IntroContainer = styled.div`
display: flex;
height: 100%;
text-align: left;
flex-direction: row;
justify-content: left;
padding: 30px;
gap: 30px;
`;

const InfoSection = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

const TextSection = styled.div`
`;

const Image = styled.img`
`;

const StyledLink = styled.a`
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
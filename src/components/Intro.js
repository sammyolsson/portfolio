/* eslint-disable max-len */
// IMPORTS //

import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import ProfileImage from '../assets/profile-img.png';

// COMPONENT //

export const Intro = () => {
  return (
    <LandingSectionContainer>
      <ProfileAndTitle>
        <ProfilePicture
          src={ProfileImage}
          alt="Picture of Sammy Olsson" />
        <TitleText>
          <NameStyling>Sammy Olsson</NameStyling>
          <JobTitleStyling>Full Stack Developer </JobTitleStyling>
          <ExtraInfo> & IT Consultant with +10years experience</ExtraInfo>
          <SocialMediaIcons>
            <SocialIcon href="mailto:sammyolsson@gmail.com.com" target="_blank">
              <FontAwesomeIcon icon={faInbox} />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/sammy-olsson/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </SocialIcon>
            <SocialIcon href="https://github.com/sammyolsson" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </SocialIcon>
          </SocialMediaIcons>
        </TitleText>
      </ProfileAndTitle>
      <Paragraph>
        <h1>👋 Hello there, I&apos;m Sammy! </h1> An experienced IT consultant with a proven track record of delivering successful projects across various industries. With over a decade of experience in the field.
        I specialize in Microsoft 365, low-code development, and automation using Power Apps and Power Automate.
        <br /><br />Prior to this I just completed a Web Development Bootcamp at <a href="https://www.technigo.io/web-development-boot-camp" target="_blank" rel="noreferrer">technigo.io </a>where I have learnt Frontend and Backend development using JavaScript, React Hooks, React NativeNode.js, Express, MongoDB and more.
      </Paragraph>
    </LandingSectionContainer>
  )
}

// STYLING //

const LandingSectionContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    margin-top: 70px;
    background-color: #FEFEFE;

    @media (max-width: 668px) {
    height: auto;
  }
`;

const ProfilePicture = styled.img`
border-radius: 50%;
width: 200x; 
height: 200px;
object-fit: cover;

@media screen and (max-width: 668px) {
width: 200x; 
height: 200px;
  }
  `

const TitleText = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'IBM Plex Sans', sans-serif;

  @media (max-width: 668px) {
    gap: 5px;
  }
  `;

const NameStyling = styled.h1`
  color: #4731D3;
  font-size: 30px;
  margin: 0;
  `

const JobTitleStyling = styled.h3`
  color: #000000;
  font-size: 28px;
  margin: 0;
  `;

const ExtraInfo = styled.h4`
  color: #565656;
  font-size: 22px;
  margin: 0;
`;

const ProfileAndTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 100px;
  align-items: center;

  @media screen and (max-width: 668px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 10px;

  @media (max-width: 668px) {
    flex-direction: row;
    justify-content: center
  }
`;

const SocialIcon = styled.a`
font-size: 25px;
color: #4731D3;

:hover {
  cursor: pointer;
  color: #000000;
}
`;

const Paragraph = styled.p`
  font-size: 1.3em;
  font-family: 'IBM Plex Sans', sans-serif;
  text-align: center; 
  line-height: 1.5; 
  max-width: 800px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 100px;

  @media (max-width: 668px) {
    margin-top: 20px;
    margin-bottom: 40px;
    padding: 20px;
  }
`;
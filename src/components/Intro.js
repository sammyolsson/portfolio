/* eslint-disable max-len */
// IMPORTS //

import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import ProfileImage from '../assets/profile-img.png';
import RightBG from '../assets/right-image.jpg';

// COMPONENT //

export const Intro = () => {
  return (
    <LandingSectionContainer>
      <LeftContainer>
        <ProfileAndTitle>
          <ProfilePicture
            src={ProfileImage}
            alt="Picture of Sammy Olsson" />
          <TitleText>
            <NameStyling>Sammy Olsson</NameStyling>
            <JobTitleStyling>Full Stack Developer</JobTitleStyling>
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
          <h1>Hello there! 👋</h1> I&apos;m Sammy. An experienced IT consultant with a proven track record of delivering successful projects across various industries. With over a decade of experience in the field, I specialize in Microsoft 365, low-code development, and automation using Power Apps and Power Automate.
          <br />
        </Paragraph>
      </LeftContainer>
      <RightImage />
    </LandingSectionContainer>
  )
}

// STYLING //

const LandingSectionContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 990px;
    top: 0;

    @media (max-width: 320px) {
        height: 1110px;
    }

    @media (min-width: 668px) and (max-width: 1023px) {
        height: 100vh;
    }

    @media (min-width: 1024px) {
        height: 100vh;
    }
`
const LeftContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 92%;
    height: 100vh;
    margin: 20px; 

    @media (min-width: 668px) and (max-width: 1023px) {
        width: 100%; 
    }

    @media (min-width: 1024px) {
        width: 50%;
    }

  @media screen and (max-width: 668px) {
  display: flex;
  margin-left: 50px;
  margin-top: 5px;
  }
`
const RightImage = styled.div`
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    left: 50%;
    background-image: url(${RightBG});
    background-size: cover;

    @media (min-width: 668px) and (max-width: 1023px) {
        display: none; 
    }

    @media (min-width: 1024px) {
        display: flex;
        background-image: url(${RightBG});
        background-size: cover;
    }
`
const ProfilePicture = styled.img`
border-radius: 50%;
width: 164px; 
height: 164px;
object-fit: cover;
  `

const TitleText = styled.div`
  display: flex;
  flex-direction: column;
  `

const NameStyling = styled.h1`
  color: #4731D3;
  font-weight: 700;
  font-size: 28px;
  margin: 0;
  `

const JobTitleStyling = styled.h3`
  color: #000000;
  font-weight: 700;
  font-size: 24px;
  margin: 0;
  `;

const ExtraInfo = styled.h4`
  color: #565656;
  font-weight: 600;
  font-size: 16px;
  margin: 0;
`

const ProfileAndTitle = styled.div`
display: flex;
flex-direction: row;
gap: 35px;
align-items: center;
margin-top: 100px;

@media screen and (max-width: 668px) {
  display: flex;
  flex-direction: column;
  text-align: center; 
  }
`

const SocialMediaIcons = styled.div`
    display: flex;
    margin-top: 40px;
    gap: 20px;

  @media screen and (max-width: 668px) {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  }

@media (min-width: 1024px) {
    margin-top: 20px;
    }
`
const SocialIcon = styled.a`
font-size: 25px;
color: #4731D3;
margin-right: 10px;

:hover {
  cursor: pointer;
  color: #000000;
}
`;

const Paragraph = styled.p`
    font-size: 1.2em;
    line-height: 30px;
    text-align: left;
    margin-right: 30px;
`;
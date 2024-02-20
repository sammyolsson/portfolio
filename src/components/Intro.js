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
    <IntroSection>
      <ContentWrapper>
        <ProfilePic src={ProfileImage} alt="Sammy Olsson" />
        <TextContent>
          <Name>Sammy Olsson</Name>
          <Role>Full Stack Developer</Role>
          <SecondaryTitle>+ all around good guy</SecondaryTitle>
          <SocialIcons>
            <IconLink href="mailto:sammyolsson@gmail.com">
              <FontAwesomeIcon icon={faInbox} />
            </IconLink>
            <IconLink href="https://www.linkedin.com/in/sammy-olsson/">
              <FontAwesomeIcon icon={faLinkedin} />
            </IconLink>
            <IconLink href="https://github.com/sammyolsson">
              <FontAwesomeIcon icon={faGithub} />
            </IconLink>
          </SocialIcons>
        </TextContent>
      </ContentWrapper>
      <IntroText>
        <Greeting>👋 Hello there, I am Sammy!</Greeting>
        An experienced IT consultant with a proven track record in delivering successful projects across various industries, specializing in Microsoft 365, low-code development, and automation. <br /><br />Recently, I completed a Web Development Bootcamp at Technigo, focusing on Full Stack development with JavaScript, React, Node.js, and more.
      </IntroText>
    </IntroSection>
  );
};

// STYLING //
const IntroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FEFEFE;
  padding: 50px 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
`;

const ProfilePic = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Name = styled.h1`
  color: #4731D3;
  font-size: 2.5rem;
  margin: 0;
  padding-bottom: 0.5rem;
`;

const Role = styled.h2`
  color: #000;
  font-size: 2rem;
  margin: 0;
  padding-bottom: 0.5rem;
`;

const SecondaryTitle = styled.h3`
  color: #565656;
  font-size: 1.4rem;
  margin-top: 5px;
  margin-bottom: 0;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;

const IconLink = styled.a`
  font-size: 2rem;
  color: #4731D3;
  &:hover {
    color: #000;
  }
`;

const IntroText = styled.p`
  margin-top: 30px;
  text-align: center;
  max-width: 800px;
  line-height: 1.6;
  font-size: 1.3rem;
`;

const Greeting = styled.span`
  display: block;
  font-size: 1.7rem;
  margin-bottom: 10px;
`;


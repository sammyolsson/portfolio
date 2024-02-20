/* eslint-disable max-len */
// IMPORTS //

import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import ProfileImage from '../assets/profile-img.png';

// COMPONENT //
export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <SectionTitle>Let us build <u>amazing</u> stuff together</SectionTitle>
        <SectionSubTitle>Interested in collaborating with me?</SectionSubTitle>
        <ContactInfo>
          <ProfilePicture src={ProfileImage} alt="Picture of Sammy Olsson" />
          <ContactText>
            <NameStyling>Sammy Olsson</NameStyling>
            <JobTitleStyling>Full Stack Developer</JobTitleStyling>
            <ExtraInfo>+ all around good guy.</ExtraInfo>
          </ContactText>
        </ContactInfo>
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
      </FooterContent>
    </FooterContainer>
  )
}

// STYLING //
const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #CCF381;
  padding: 50px 20px;
`;

const FooterContent = styled.div`
  text-align: center;
  max-width: 960px;
`;

const SectionTitle = styled.h2`
  color: #4731D3;
  font-size: 2.5rem;
  margin: 0 0 20px 0;
  font-family: 'IBM Plex Sans', sans-serif;
`;

const SectionSubTitle = styled.h3`
  color: #4831D3;
  font-size: 1.8rem;
  margin-bottom: 30px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 35px;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 668px) {
    flex-direction: column;
  }
`;

const ContactText = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameStyling = styled.h1`
  color: #4731D3;
  font-weight: 700;
  font-size: 1.75rem;
  margin: 0;
`;

const JobTitleStyling = styled.h3`
  color: #000;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 5px 0;
`;

const ExtraInfo = styled.h4`
  color: #565656;
  font-weight: 600;
  font-size: 1.25rem;
  margin: 0;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  font-size: 30px;
  color: #4731D3;

  &:hover {
    color: #000;
  }
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 164px;
  height: 164px;
  object-fit: cover;
`;
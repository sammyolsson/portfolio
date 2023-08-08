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
    <Section>
      <SectionTitle>Let&apos;s build <u>amazing</u> stuff together</SectionTitle>
      <ContactHeader>
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
      </ContactHeader>
    </Section>
  )
}

// STYLING //

const SectionTitle = styled.h2`
color: #4731D3;
font-size: 45px;
margin-bottom: 10px;
font-weight: 700;
font-size: 80px;
line-height: 108px;
margin: 35px 0 35px 0;

@media screen and (max-width: 668px) {
  font-size: 3rem;
  text-align: center;
  line-height: 50px;
  }
`;

const Section = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #CCF381;
padding-top: 100px;
padding-bottom: 120px;
height: fit-content;

@media (min-width: 1024px) {
    padding-top: 50px;
    padding-bottom: 150px;
}
`

const ContactHeader = styled.div`
    display: flex;
    flex-direction: row;
    gap: 35px;
    
@media screen and (max-width: 668px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 100px;
  }
`

const SocialIcon = styled.a`
  font-size: 30px;
  color: #4731D3;
  margin-right: 10px;

  :hover {
    cursor: pointer;
    color: #000000;
  }
`

const ProfilePicture = styled.img`
border-radius: 50%;
width: 164px; 
height: 164px;
object-fit: cover;

@media screen and (max-width: 668px) {
  display: flex;
  margin-left: 50px;
  }
  `;

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
const SocialMediaIcons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 180px;
    margin-top: 40px;

@media (min-width: 1024px) {
    margin-top: 20px;
    }
`

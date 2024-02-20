/* eslint-disable max-len */
// IMPORTS //

import React from 'react';
import styled from 'styled-components';
import MoviesIMG from '../assets/movies.png';
import HappyThoughtsIMG from '../assets/happy-thoughts.png';
import WeatherAppIMG from '../assets/weather.png';
import FinalProjectIMG from '../assets/final-project.png';
import authIMG from '../assets/auth.png';

// COMPONENT //

export const Projects = () => {
  return (
    <Section>
      <SectionTitle>My Recent Work</SectionTitle>
      <SectionSubTitle>Here are a few past design projects I have worked on. Want to see more? <EmailLink href="mailto: sammyolsson@gmail.com">Email me</EmailLink></SectionSubTitle>
      <AllProjectsStructure>
        {/* PROJECT TEMPLATE START */}
        <ProjectMainStructure>
          <ProjectTitle>Homeigo (Bootcamp final project)</ProjectTitle>
          <ProjectImage src={FinalProjectIMG} alt="Project Image" />
          <ProjectText>For our final project, we collaborated on creating a realtor homepage. Working as a team of three, we undertook the entire project – constructing the database, managing all the functionality, crafting the user interface and design. Our toolkit included a variety of technologies, such as React, Redux, Node.js, and MongoDB. A notable highlight was our integration of a user-friendly map feature along with a search function, elevating the overall user experience.</ProjectText>
          <TechStack>
            <TechItem>JavaScript</TechItem>
            <TechItem>React</TechItem>
            <TechItem>MongoDB</TechItem>
            <TechItem>Google Cloud</TechItem>
            <TechItem>Mob-programming</TechItem>
          </TechStack>
          <ButtonsContainer>
            <ProjectButton href="https://melodic-daffodil-115469.netlify.app/" target="_blank">Live</ProjectButton>
            <ProjectButton href="https://github.com/JohLeo/final-project" target="_blank">Code</ProjectButton>
          </ButtonsContainer>
        </ProjectMainStructure>
        {/* PROJECT TEMPLATE END */}
        <ProjectMainStructure>
          <ProjectTitle>Weather App</ProjectTitle>
          <ProjectImage src={WeatherAppIMG} alt="Weather app interface" />
          <ProjectText>A basic weather app with a five day forecast for Stockholm. This project focused on integrating APIs and retrieving external data for our website. It involved collaborative mob programming and provided foundational knowledge of working with basic JSON structures, utilizing promises and the fetch() function in JavaScript. Additionally, we gained practical experience in manipulating the Date() object.<br /><br /></ProjectText>
          <TechStack>
            <TechItem>HTML</TechItem>
            <TechItem>CSS</TechItem>
            <TechItem>JavaScript</TechItem>
            <TechItem>APIs</TechItem>
            <TechItem>Mob-programming</TechItem>
          </TechStack>
          <ButtonsContainer>
            <ProjectButton href="https://scintillating-tanuki-2a80a2.netlify.app/" target="_blank">Live</ProjectButton>
            <ProjectButton href="https://github.com/sammyolsson/project-weather-app" target="_blank">Code</ProjectButton>
          </ButtonsContainer>
        </ProjectMainStructure>
        <ProjectMainStructure>
          <ProjectTitle>Movie Releases</ProjectTitle>
          <ProjectImage src={MoviesIMG} alt="Project Image" />
          <ProjectText>A multi-page web application using React Router and an API from IMDB. It allows users to view a list of latest movie releases and select a movie to read more about. Built as a pair-programming project.<br /><br /><br /><br /><br /></ProjectText>
          <TechStack>
            <TechItem>HTML</TechItem>
            <TechItem>CSS</TechItem>
            <TechItem>JavaScript</TechItem>
            <TechItem>React</TechItem>
            <TechItem>Pair-programming</TechItem>
          </TechStack>
          <ButtonsContainer>
            <ProjectButton href="https://camilla-sammy-movie-site.netlify.app/" target="_blank">Live</ProjectButton>
            <ProjectButton href="https://github.com/sammyolsson/project-movies" target="_blank">Code</ProjectButton>
          </ButtonsContainer>
        </ProjectMainStructure>
        <ProjectMainStructure>
          <ProjectTitle>Happy Thoughts</ProjectTitle>
          <ProjectImage src={HappyThoughtsIMG} alt="Project Image" />
          <ProjectText>A Twitter-like message app but with more positivity and less Elon Musk. I developed both the backend and frontend, building an API that enables users to fetch and post data to and from the database. This functionality allows you to share happy thoughts on the feed. Utilizing MongoDB on the backend allowed me to delve deeper into setting up endpoints, storing data, and managing user input.</ProjectText>
          <TechStack>
            <TechItem>HTML</TechItem>
            <TechItem>CSS</TechItem>
            <TechItem>JavaScript</TechItem>
            <TechItem>React</TechItem>
            <TechItem>MongoDB</TechItem>
          </TechStack>
          <ButtonsContainer>
            <ProjectButton href="https://phenomenal-bavarois-c771f2.netlify.app/" target="_blank">Live</ProjectButton>
            <ProjectButton href="https://github.com/sammyolsson/project-happy-thoughts-mongo" target="_blank">Code</ProjectButton>
          </ButtonsContainer>
        </ProjectMainStructure>
        <ProjectMainStructure>
          <ProjectTitle>Authenticator</ProjectTitle>
          <ProjectImage src={authIMG} alt="Project Image" />
          <ProjectText>A pair programming project focused on developing an authenticator system. Our main objectives were to implement secure token-based authentication and ensure the safe storage of user passwords within the database. With an emphasis on security and defensive design, our goal was to create an authenticator solution that prioritizes safety and reliability.<br /><br /></ProjectText>
          <TechStack>
            <TechItem>HTML</TechItem>
            <TechItem>CSS</TechItem>
            <TechItem>JavaScript</TechItem>
            <TechItem>React</TechItem>
            <TechItem>Redux</TechItem>
            <TechItem>Node.js</TechItem>
          </TechStack>
          <ButtonsContainer>
            <ProjectButton href="https://superb-alfajores-2745c6.netlify.app/login" target="_blank">Live</ProjectButton>
            <ProjectButton href="https://github.com/sammyolsson/project-auth" target="_blank">Code</ProjectButton>
          </ButtonsContainer>
        </ProjectMainStructure>
      </AllProjectsStructure>
    </Section>
  );
};

// STYLING //

const Section = styled.section`
  background: #FAFAFA;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  color: #333;
  font-weight: 700;
  font-size: clamp(1.9rem, 5vw, 80px);
  margin-bottom: 1rem;
  font-family: 'IBM Plex Sans', sans-serif;
`;

const SectionSubTitle = styled.h3`
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const EmailLink = styled.a`
  color: #4731D3;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const AllProjectsStructure = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

const ProjectMainStructure = styled.div`
  width: 100%;
  max-width: 600px;
  background: #FFF;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h4`
  font-size: 1.7rem;
  color: #333;
  padding: 15px;
  text-align: center;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
`;

const ProjectText = styled.p`
  padding: 0 15px 15px;
  color: #666;
  font-size: 1rem;
`;

const TechStack = styled.div`
  padding: 0 15px 15px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const TechItem = styled.span`
  background: #EFEFEF;
  color: #333;
  font-size: 0.9rem;
  padding: 5px 10px;
  border-radius: 15px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 15px;
`;

const ProjectButton = styled.a`
  background: #4731D3;
  color: #FFF;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 15px;
  font-size: 0.9rem;
  transition: background 0.3s ease;

  &:hover {
    background: #0056b3;
  }
`;
/* eslint-disable max-len */
// IMPORTS //

import React from 'react';
import styled from 'styled-components';
import MoviesIMG from '../assets/movies.png';
import HappyThoughtsIMG from '../assets/happy-thoughts.png';
import WeatherAppIMG from '../assets/weather.png';
import FinalProjectIMG from '../assets/final-project.png';

// COMPONENT //

export const Projects = () => {
  return (
    <Section>
      <SectionTitle>Featured Projects</SectionTitle>
      <AllProjectsStructure>

        {/* FINAL PROJECT ////////////////////////////////////////////////////////////// */}
        <ProjectMainStructure>
          <ProjectTitle>Homeigo - Final Project</ProjectTitle>
          <ProjectImage src={FinalProjectIMG} alt="Final Project" />
          <ProjectTextStructure>
            <ParagraphText>
              In our final fullstack project, Homeigo,
              we worked on building a real estate market place.
              Building the database, backend and frontend ourselves.
              We wanted to implement all the techstack we have learnt during our time with Technigo.
            </ParagraphText>
          </ProjectTextStructure>
          <PurpleBackgroundAndProjectButtonStucture>
            <PurpleBackgroundStructure>
              <PurpleBackgroundText>JavaScript</PurpleBackgroundText>
              <PurpleBackgroundText>React</PurpleBackgroundText>
              <PurpleBackgroundText>Redux</PurpleBackgroundText>
              <PurpleBackgroundText>MongoDB</PurpleBackgroundText>
            </PurpleBackgroundStructure>
            <ProjectButtonStructure>
              <StyledLinkButton a href="https://melodic-daffodil-115469.netlify.app/" target="_blank" title="Link to the deployed project" rel="noreferrer">
                <StyledIcon fill="currentcolor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z" />
                </StyledIcon>
                  Live
              </StyledLinkButton>
              <StyledLinkButton a href="https://github.com/JohLeo/final-project" target="_blank" title="Link to the project on GitHub" rel="noreferrer">
                <StyledIcon fill="currentcolor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.9 2.3 1.6-1 1.6-3.6 0-5.9-1.6-2.3-4.3-3.3-5.9-2.3zm48.7-4c-1.3 1.6-.3 4.3 2.3 6.5 2.3 2.3 5.9 3 7.6 1.3 1.3-1.6.3-4.3-2.3-6.5-2.2-2-5.9-2.6-7.6-1.3zm19.7-10.4c-1.3 1-1.6 3.6-.3 6.2 1.3 2.3 3.9 3.6 5.9 2.6 1.3-1 1.6-3.6.3-6.2-1.3-2-3.9-3.3-5.9-2.4zm-18.7-10.4c-1.3 1.6-.7 4.3 1 6.5 1.6 2.3 4.6 3.3 6.5 1.6 1.3-1.6.7-4.3-1-6.5-1.7-2-4.6-2.6-6.5-1.6zm-14.5-7.3c-1.6 1.3-1.6 4.6 0 7.6 1.6 2.3 4.6 4.3 7.9 3 1.9-1.3 2.6-4.3 1.3-7.6-1.7-2.4-4.6-3.3-7.9-2zm-12.7-8.2c-1.3 1.6-.7 4.6 1.6 7.9 2.3 2.9 5.6 4.9 7.9 3.3 1.7-1.6 1-4.6-1.6-7.9-2.4-2.6-5.6-4.6-7.9-3.3zm-15.8-6.5c-1.6 1.6-1.3 5.2 1.6 8.5 2.3 3 6.2 5.2 8.5 3.6 1.7-1.6 1.3-5.2-1.6-8.5-2.2-2.9-6-4.9-8.5-3.6zm-15.9-5.3c-1.6 1.6-1 5.9 2.4 9.2 2.9 3 7.3 5.2 9.6 3.6 1.6-1.6 1-5.9-2.4-9.2-2.9-3-7.3-5.2-9.6-3.6zm-15.9-4c-1.3 1.6-1 6 2.6 9.6 3 3 7.6 5.2 10.2 3.6 1.3-1.3 1-6-2.6-9.6-3-3-7.6-5.2-10.2-3.6zm-15.9-4.7c-1.6 1.3-1.3 6 2.9 9.9 3.3 3 8 5.2 10.6 3.6 1.6-1.6 1.3-6-2.9-9.9-3.3-3-7.9-5.2-10.6-3.6zm-15.9-4.4c-1.6 1.3-1.6 6.2 0 10.2 2 3 8 5.2 10.6 3.6 1.6-1.3 1.6-6.2 0-10.2-2-2.9-7.9-5.2-10.6-3.6zm-15.9-3.7c-1.6 1.3-2 6.5-.3 11 1.6 3 8.3 5.6 10.9 4 1.6-1.3 2-6.5.3-11-1.6-2.9-8.3-5.3-10.9-4zm-15.9-3.7c-1.6 1.3-2.6 7.9-.3 12.6 1.6 3 9.2 6 11.5 4.4 1.6-1.6 2.3-7.6.6-12.3-1.7-2.6-9.2-5.3-11.8-4.7zm-15.9-3.4c-1.6 1-2.6 8.5-.7 13.9 1.6 3 9.6 6.4 12.2 4.7 1.6-1.6 2.6-8.2.7-13.6-1.6-2.9-9.7-6-12.2-4.6zm0 0" />
                </StyledIcon>
                  Code
              </StyledLinkButton>
            </ProjectButtonStructure>
          </PurpleBackgroundAndProjectButtonStucture>
        </ProjectMainStructure>

        {/* MOVIE PROJECT ////////////////////////////////////////////////////////////// */}
        <ProjectMainStructure>
          <ProjectTitle>Movies Project</ProjectTitle>
          <ProjectImage src={MoviesIMG} alt="Movies image" />
          <ProjectTextStructure>
            <ParagraphText>
              This was a project where we focused on making React apps with multiple pages using routes.
              We passed information such as product ID:s and titles in the URL and picked it up in the React router in order to load dynamic content.
              We worked with fetching from APIs and the combination of useState & useEffect.
            </ParagraphText>
          </ProjectTextStructure>
          <PurpleBackgroundAndProjectButtonStucture>
            <PurpleBackgroundStructure>
              <PurpleBackgroundText>JavaScript</PurpleBackgroundText>
              <PurpleBackgroundText>React</PurpleBackgroundText>
              <PurpleBackgroundText>CSS</PurpleBackgroundText>
              <PurpleBackgroundText>APIs</PurpleBackgroundText>
            </PurpleBackgroundStructure>
            <ProjectButtonStructure>
              <StyledLinkButton a href="https://camilla-sammy-movie-site.netlify.app/" target="_blank" title="Link to the deployed project" rel="noreferrer">
                <StyledIcon fill="currentcolor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z" />
                </StyledIcon>
                  Live
              </StyledLinkButton>
              <StyledLinkButton a href="https://github.com/sammyolsson/project-movies" target="_blank" title="Link to the project on GitHub" rel="noreferrer">
                <StyledIcon fill="currentcolor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.9 2.3 1.6-1 1.6-3.6 0-5.9-1.6-2.3-4.3-3.3-5.9-2.3zm48.7-4c-1.3 1.6-.3 4.3 2.3 6.5 2.3 2.3 5.9 3 7.6 1.3 1.3-1.6.3-4.3-2.3-6.5-2.2-2-5.9-2.6-7.6-1.3zm19.7-10.4c-1.3 1-1.6 3.6-.3 6.2 1.3 2.3 3.9 3.6 5.9 2.6 1.3-1 1.6-3.6.3-6.2-1.3-2-3.9-3.3-5.9-2.4zm-18.7-10.4c-1.3 1.6-.7 4.3 1 6.5 1.6 2.3 4.6 3.3 6.5 1.6 1.3-1.6.7-4.3-1-6.5-1.7-2-4.6-2.6-6.5-1.6zm-14.5-7.3c-1.6 1.3-1.6 4.6 0 7.6 1.6 2.3 4.6 4.3 7.9 3 1.9-1.3 2.6-4.3 1.3-7.6-1.7-2.4-4.6-3.3-7.9-2zm-12.7-8.2c-1.3 1.6-.7 4.6 1.6 7.9 2.3 2.9 5.6 4.9 7.9 3.3 1.7-1.6 1-4.6-1.6-7.9-2.4-2.6-5.6-4.6-7.9-3.3zm-15.8-6.5c-1.6 1.6-1.3 5.2 1.6 8.5 2.3 3 6.2 5.2 8.5 3.6 1.7-1.6 1.3-5.2-1.6-8.5-2.2-2.9-6-4.9-8.5-3.6zm-15.9-5.3c-1.6 1.6-1 5.9 2.4 9.2 2.9 3 7.3 5.2 9.6 3.6 1.6-1.6 1-5.9-2.4-9.2-2.9-3-7.3-5.2-9.6-3.6zm-15.9-4c-1.3 1.6-1 6 2.6 9.6 3 3 7.6 5.2 10.2 3.6 1.3-1.3 1-6-2.6-9.6-3-3-7.6-5.2-10.2-3.6zm-15.9-4.7c-1.6 1.3-1.3 6 2.9 9.9 3.3 3 8 5.2 10.6 3.6 1.6-1.6 1.3-6-2.9-9.9-3.3-3-7.9-5.2-10.6-3.6zm-15.9-4.4c-1.6 1.3-1.6 6.2 0 10.2 2 3 8 5.2 10.6 3.6 1.6-1.3 1.6-6.2 0-10.2-2-2.9-7.9-5.2-10.6-3.6zm-15.9-3.7c-1.6 1.3-2 6.5-.3 11 1.6 3 8.3 5.6 10.9 4 1.6-1.3 2-6.5.3-11-1.6-2.9-8.3-5.3-10.9-4zm-15.9-3.7c-1.6 1.3-2.6 7.9-.3 12.6 1.6 3 9.2 6 11.5 4.4 1.6-1.6 2.3-7.6.6-12.3-1.7-2.6-9.2-5.3-11.8-4.7zm-15.9-3.4c-1.6 1-2.6 8.5-.7 13.9 1.6 3 9.6 6.4 12.2 4.7 1.6-1.6 2.6-8.2.7-13.6-1.6-2.9-9.7-6-12.2-4.6zm0 0" />
                </StyledIcon>
                  Code
              </StyledLinkButton>
            </ProjectButtonStructure>
          </PurpleBackgroundAndProjectButtonStucture>
        </ProjectMainStructure>
        {/* HAPPY THOUGTHS ////////////////////////////////////////////////////////////// */}
        <ProjectMainStructure>
          <ProjectTitle>Happy Thoughts Project</ProjectTitle>
          <ProjectImage src={HappyThoughtsIMG} alt="Happy Thoughts image" />
          <ProjectTextStructure>
            <ParagraphText>
              A simple API to collect happy thoughts. I worked with the useEffect hook to perform actions when components mount, unmount or when state changes.
              I called the APIs from react and put the data into state as well as working with an API which you both send and receive data from.
              Think of it as a version of Twitter, but with less negativity, and 100% fewer Elon Musks using it.
            </ParagraphText>
          </ProjectTextStructure>
          <PurpleBackgroundAndProjectButtonStucture>
            <PurpleBackgroundStructure>
              <PurpleBackgroundText>JavaScript</PurpleBackgroundText>
              <PurpleBackgroundText>React</PurpleBackgroundText>
              <PurpleBackgroundText>Node.js</PurpleBackgroundText>
              <PurpleBackgroundText>MongoDB</PurpleBackgroundText>
            </PurpleBackgroundStructure>
            <ProjectButtonStructure>
              <StyledLinkButton a href="https://phenomenal-bavarois-c771f2.netlify.app/" target="_blank" title="Link to the deployed project" rel="noreferrer">
                <StyledIcon fill="currentcolor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z" />
                </StyledIcon>
                  Live
              </StyledLinkButton>
              <StyledLinkButton a href="https://github.com/sammyolsson/project-happy-thoughts-mongo" target="_blank" title="Link to the project on GitHub" rel="noreferrer">
                <StyledIcon fill="currentcolor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.9 2.3 1.6-1 1.6-3.6 0-5.9-1.6-2.3-4.3-3.3-5.9-2.3zm48.7-4c-1.3 1.6-.3 4.3 2.3 6.5 2.3 2.3 5.9 3 7.6 1.3 1.3-1.6.3-4.3-2.3-6.5-2.2-2-5.9-2.6-7.6-1.3zm19.7-10.4c-1.3 1-1.6 3.6-.3 6.2 1.3 2.3 3.9 3.6 5.9 2.6 1.3-1 1.6-3.6.3-6.2-1.3-2-3.9-3.3-5.9-2.4zm-18.7-10.4c-1.3 1.6-.7 4.3 1 6.5 1.6 2.3 4.6 3.3 6.5 1.6 1.3-1.6.7-4.3-1-6.5-1.7-2-4.6-2.6-6.5-1.6zm-14.5-7.3c-1.6 1.3-1.6 4.6 0 7.6 1.6 2.3 4.6 4.3 7.9 3 1.9-1.3 2.6-4.3 1.3-7.6-1.7-2.4-4.6-3.3-7.9-2zm-12.7-8.2c-1.3 1.6-.7 4.6 1.6 7.9 2.3 2.9 5.6 4.9 7.9 3.3 1.7-1.6 1-4.6-1.6-7.9-2.4-2.6-5.6-4.6-7.9-3.3zm-15.8-6.5c-1.6 1.6-1.3 5.2 1.6 8.5 2.3 3 6.2 5.2 8.5 3.6 1.7-1.6 1.3-5.2-1.6-8.5-2.2-2.9-6-4.9-8.5-3.6zm-15.9-5.3c-1.6 1.6-1 5.9 2.4 9.2 2.9 3 7.3 5.2 9.6 3.6 1.6-1.6 1-5.9-2.4-9.2-2.9-3-7.3-5.2-9.6-3.6zm-15.9-4c-1.3 1.6-1 6 2.6 9.6 3 3 7.6 5.2 10.2 3.6 1.3-1.3 1-6-2.6-9.6-3-3-7.6-5.2-10.2-3.6zm-15.9-4.7c-1.6 1.3-1.3 6 2.9 9.9 3.3 3 8 5.2 10.6 3.6 1.6-1.6 1.3-6-2.9-9.9-3.3-3-7.9-5.2-10.6-3.6zm-15.9-4.4c-1.6 1.3-1.6 6.2 0 10.2 2 3 8 5.2 10.6 3.6 1.6-1.3 1.6-6.2 0-10.2-2-2.9-7.9-5.2-10.6-3.6zm-15.9-3.7c-1.6 1.3-2 6.5-.3 11 1.6 3 8.3 5.6 10.9 4 1.6-1.3 2-6.5.3-11-1.6-2.9-8.3-5.3-10.9-4zm-15.9-3.7c-1.6 1.3-2.6 7.9-.3 12.6 1.6 3 9.2 6 11.5 4.4 1.6-1.6 2.3-7.6.6-12.3-1.7-2.6-9.2-5.3-11.8-4.7zm-15.9-3.4c-1.6 1-2.6 8.5-.7 13.9 1.6 3 9.6 6.4 12.2 4.7 1.6-1.6 2.6-8.2.7-13.6-1.6-2.9-9.7-6-12.2-4.6zm0 0" />
                </StyledIcon>
                  Code
              </StyledLinkButton>
            </ProjectButtonStructure>
          </PurpleBackgroundAndProjectButtonStucture>
        </ProjectMainStructure>
        {/* WEATHER APP ////////////////////////////////////////////////////////////// */}
        <ProjectMainStructure>
          <ProjectTitle>Weather App Project </ProjectTitle>
          <ProjectImage src={WeatherAppIMG} alt="Weather app image" />
          <ProjectTextStructure>
            <ParagraphText>
              This project was all about APIs and fetching external data to our website.
              It was a pair-programming project and we learnt basic JSON, how to use promises & fetch() in Javascript as well as how to work with the Date() object.
              I very much enjoyed working in a group on this project and I learnt a lot from my fellow coders!
            </ParagraphText>
          </ProjectTextStructure>
          <PurpleBackgroundAndProjectButtonStucture>
            <PurpleBackgroundStructure>
              <PurpleBackgroundText>JavaScript</PurpleBackgroundText>
              <PurpleBackgroundText>CSS</PurpleBackgroundText>
              <PurpleBackgroundText>HTML</PurpleBackgroundText>
              <PurpleBackgroundText>APIs</PurpleBackgroundText>
            </PurpleBackgroundStructure>
            <ProjectButtonStructure>
              <StyledLinkButton a href="https://scintillating-tanuki-2a80a2.netlify.app/ " target="_blank" title="Link to the deployed project" rel="noreferrer">
                <StyledIcon fill="currentcolor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z" />
                </StyledIcon>
                  Live
              </StyledLinkButton>
              <StyledLinkButton a href="https://github.com/sammyolsson/project-weather-app" target="_blank" title="Link to the project on GitHub" rel="noreferrer">
                <StyledIcon fill="currentcolor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.9 2.3 1.6-1 1.6-3.6 0-5.9-1.6-2.3-4.3-3.3-5.9-2.3zm48.7-4c-1.3 1.6-.3 4.3 2.3 6.5 2.3 2.3 5.9 3 7.6 1.3 1.3-1.6.3-4.3-2.3-6.5-2.2-2-5.9-2.6-7.6-1.3zm19.7-10.4c-1.3 1-1.6 3.6-.3 6.2 1.3 2.3 3.9 3.6 5.9 2.6 1.3-1 1.6-3.6.3-6.2-1.3-2-3.9-3.3-5.9-2.4zm-18.7-10.4c-1.3 1.6-.7 4.3 1 6.5 1.6 2.3 4.6 3.3 6.5 1.6 1.3-1.6.7-4.3-1-6.5-1.7-2-4.6-2.6-6.5-1.6zm-14.5-7.3c-1.6 1.3-1.6 4.6 0 7.6 1.6 2.3 4.6 4.3 7.9 3 1.9-1.3 2.6-4.3 1.3-7.6-1.7-2.4-4.6-3.3-7.9-2zm-12.7-8.2c-1.3 1.6-.7 4.6 1.6 7.9 2.3 2.9 5.6 4.9 7.9 3.3 1.7-1.6 1-4.6-1.6-7.9-2.4-2.6-5.6-4.6-7.9-3.3zm-15.8-6.5c-1.6 1.6-1.3 5.2 1.6 8.5 2.3 3 6.2 5.2 8.5 3.6 1.7-1.6 1.3-5.2-1.6-8.5-2.2-2.9-6-4.9-8.5-3.6zm-15.9-5.3c-1.6 1.6-1 5.9 2.4 9.2 2.9 3 7.3 5.2 9.6 3.6 1.6-1.6 1-5.9-2.4-9.2-2.9-3-7.3-5.2-9.6-3.6zm-15.9-4c-1.3 1.6-1 6 2.6 9.6 3 3 7.6 5.2 10.2 3.6 1.3-1.3 1-6-2.6-9.6-3-3-7.6-5.2-10.2-3.6zm-15.9-4.7c-1.6 1.3-1.3 6 2.9 9.9 3.3 3 8 5.2 10.6 3.6 1.6-1.6 1.3-6-2.9-9.9-3.3-3-7.9-5.2-10.6-3.6zm-15.9-4.4c-1.6 1.3-1.6 6.2 0 10.2 2 3 8 5.2 10.6 3.6 1.6-1.3 1.6-6.2 0-10.2-2-2.9-7.9-5.2-10.6-3.6zm-15.9-3.7c-1.6 1.3-2 6.5-.3 11 1.6 3 8.3 5.6 10.9 4 1.6-1.3 2-6.5.3-11-1.6-2.9-8.3-5.3-10.9-4zm-15.9-3.7c-1.6 1.3-2.6 7.9-.3 12.6 1.6 3 9.2 6 11.5 4.4 1.6-1.6 2.3-7.6.6-12.3-1.7-2.6-9.2-5.3-11.8-4.7zm-15.9-3.4c-1.6 1-2.6 8.5-.7 13.9 1.6 3 9.6 6.4 12.2 4.7 1.6-1.6 2.6-8.2.7-13.6-1.6-2.9-9.7-6-12.2-4.6zm0 0" />
                </StyledIcon>
                  Code
              </StyledLinkButton>
            </ProjectButtonStructure>
          </PurpleBackgroundAndProjectButtonStucture>
        </ProjectMainStructure>
      </AllProjectsStructure>
    </Section>
  )
}

// STYLING //

const Section = styled.section`
  background: #ffffff;
  height: 100%;
  color: #FFD93D;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px 0 24px;

  @media screen and (max-width: 668px) {
  display: flex;
  flex-direction: column;
  margin: 10px;
  }
  `;

const ProjectMainStructure = styled.div`
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 668px) {
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 700px;
  }

  @media screen and (min-width: 1024px) {
  margin: 0 25% 0 0;
  flex-direction: column;
  }
  `;

const ProjectTextStructure = styled.div`
  display: flex;
  flex-direction: column;
  `;

const PurpleBackgroundStructure = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  text-align: left;
  margin: 0px 4px 8px 0px;
  `;

const ProjectButtonStructure = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: left;
  gap: 2px;
  margin-top: 10px;

  @media screen and (min-width: 668px) {
  flex-direction: row;
  justify-content: flex-start;
  flex: wrap;
  }
  `;

const PurpleBackgroundAndProjectButtonStucture = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
  }
  `;

const AllProjectsStructure = styled.div`
  `;

const SectionTitle = styled.h2`
color: #4831D3;
font-size: 80px;
margin-bottom: 10px;
font-weight: 700;
line-height: 108px;

@media screen and (max-width: 668px) {
font-size: 2.2rem;
line-height: 50px;
  }
  `;

const ProjectTitle = styled.h2`
font-size: 32px;
line-height: 43.2px;
background-color: #000000;
color: #FFFFFF;
padding: 2px;
display: flex;
justify-content: center;
margin-bottom: 10px;
border-radius: 3px;

@media screen and (max-width: 668px) {
margin-top: 5px;
font-size: 1.7rem;
}
`

const ProjectImage = styled.img`
max-height: 600px;
width: 98%;
object-fit: cover;
object-position: 50%;

@media (min-width: 667px) and (max-width: 1024px) {
  width: 350px;
  height: 350px;
}

@media (min-width: 1024px) {
  max-height: 350px;
  width: 100%;
}
`;
const ParagraphText = styled.p`
    color: #000000;
    font-family: EB Garamond;
    font-weight: 400;
    font-size: 22px;
    line-height: 28.71px;
    `;

const PurpleBackgroundText = styled.p`
    color: #FFFFFF;
    background-color: #4731D3;
    font-size: 22px;
    line-height: 28.71px;
    display: inline;
    padding: 5px;
    `;

const StyledIcon = styled.svg`
width: 32px;
height: 32px;
margin-right: 10px;
`
const StyledLinkButton = styled.a`
background-color: #F5F5F5;
color: black;
font-size: 20px;
line-height: 27px;
border-radius: 40px;
max-height: 45px;
margin-bottom: 1rem;
text-decoration: none;
padding: 7px 15px 7px 10px;
border: solid black 1px;
width: fit-content;
display: flex;
flex-direction: row;
align-items: center;

&:hover {
  background: #4831D3;
  color: #FFFFFF;
  cursor: pointer;
  border: none;
  }
  `;
import React from 'react';
import styled from 'styled-components';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Section from './Section';
import profileImage from '../assets/profile.jpeg';
import { Element } from 'react-scroll';
import Typist from 'react-typist';

const MainContent = () => {
  return (
    <Container>
      {/* Home Screen */}
      <HomeSection>
        <ProfileImage src={profileImage} alt="Profile" />
        <Title>
          Welcome to My Portfolio
          <br />
          <Typist avgTypingDelay={100} cursor={{ show: false }}>
            <span>VENI</span>
            <Typist.Backspace count={19} delay={200} />
            <span>VIDI</span>
            <Typist.Backspace count={17} delay={200} />
            <span>VICI</span>
            <Typist.Backspace count={13} delay={200} />
          </Typist>
        </Title>
        <Subtitle>Software Developer | Passionate Techie | AI Enthusiast </Subtitle>
        <ButtonContainer>
          <StyledLink to="/education">View My Education</StyledLink>
          <StyledLink to="/work-experience">Explore Work Experience</StyledLink>
        </ButtonContainer>
      </HomeSection>
      <Element name="education">
        <Section>
          {/* Education Section */}
          {/* ... */}
        </Section>
      </Element>
      <Element name="work-experience">
        <Section>
          {/* Work Experience Section */}
          {/* ... */}
        </Section>
      </Element>
    </Container>
  );
};

const Container = styled.div`
  position: relative; /* Ensure the ParticleBackground takes the full width and height */
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
`;


const HomeSection = styled.div`
  text-align: center;
  position: relative;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid #0077b5;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: #888;
  margin-bottom: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  background-color: #0077b5;
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px;
  font-size: 18px;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005a8d;
  }
`;

// Rest of the code for other sections (Education, Work Experience, Skills, Passion & Projects, Contact) remains the same as before.

export default MainContent;

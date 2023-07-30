import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const ContactSection = () => {
  return (
    <Container>
      <Title>📞Contact</Title>
      <ContactText>
        My goal is to leverage my technical expertise and creativity to build innovative solutions that make a positive impact on people's lives. I thrive in dynamic environments and enjoy taking up new challenges.
        <br />
        Let's connect!
      </ContactText>
      <IconContainer>
        <IconLink href="https://www.linkedin.com/in/armaan-nayyar-5776a4206/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          <LinkText>LinkedIn</LinkText>
        </IconLink>
        <IconLink href="https://github.com/alphaninja27" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
          <LinkText>GitHub</LinkText>
        </IconLink>
      </IconContainer>
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const ContactText = styled.p`
  font-size: 18px;
  color: #777; /* Changed text color to a lighter gray */
  text-align: center;
  line-height: 1.6;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

const IconLink = styled.a`
  color: #333;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    color: #0077b5;
  }
`;

const LinkText = styled.span`
  font-size: 14px;
  margin-top: 5px;
  color: #777; /* Changed text color to a lighter gray */
`;

export default ContactSection;
import React from 'react';
import styled from 'styled-components';

const PassionProjectsSection = () => {
  return (
    <Container>
      <Title>📝Passion & Projects</Title>
      <SectionList>
        <ListItem>Actively involved in personal projects and communities to continuously learn and experiment with new technologies.</ListItem>
        <ListItem>Contributed to various open-source projects, enhancing collaboration and problem-solving skills.</ListItem>
      </SectionList>
      <Title>🏆Achievements</Title>
      <SectionList>
        <ListItem>Awarded Class of 1987 Alumni Scholarship for exceptional performance in extra-curricular activities.</ListItem>
        <ListItem>Selected for Nas Academy x Solana Developer Program 2023.</ListItem>
        <ListItem>Selected for Amazon ML Summer School 2022.</ListItem>
        <ListItem>Best Delegate in The Crisis Summit 2021, Thapar MUN Society and in Indian International MUN 2019.</ListItem>
        <ListItem>Amongst top 2% in Upraised Embark's ESAT 2021, subsequently becoming an Embark Fellow.</ListItem>
      </SectionList>
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

const SectionList = styled.ul`
  list-style-type: disc;
  padding: 0;
  margin-top: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 1.6;
`;

export default PassionProjectsSection;

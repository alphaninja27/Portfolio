import React from 'react';
import styled from 'styled-components';

const SkillsSection = () => {
  return (
    <Container>
      <Title>👨‍💻Skills</Title>
      <SectionList>
        <ListItem>🖥️Languages: Python, SQL, MATLAB, C/C++, HTML/CSS</ListItem>
        <ListItem>🛠️Tools: MS Excel, VS Code, GitHub, PowerBI, Cloud Platforms, Bugzilla, Ixia, Tmux</ListItem>
        <ListItem>🌐Frameworks: Django, Flask, React</ListItem>
        <ListItem>🗣Soft Skills: Public Speaking, Leadership, Event Management</ListItem>
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

export default SkillsSection;

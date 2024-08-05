import React from 'react';
import styled from 'styled-components';

const WorkExperienceSection = () => {
  return (
    <Container>
      <Title>‍💼Work Experience</Title>
      <SectionList><SectionListItem>
          <SectionTitle>Software Testing Intern at Arista Networks, January - June, 2024</SectionTitle>
          <SectionDescription>
            <ul>
              <li>Executing test plans to validate new features or products</li>
              <li>Working with other testers and developers to troubleshoot and diagnose software defects and validate fixes to
those defects.</li>
              <li>Using Ixia traffic generator tools to emulate real-world traffic flows as you perform tests.</li>
              <li>Setting up networking equipment in the lab to support test efforts.</li>
              <li>Collaborated with cross-functional teams to deliver high-quality software solutions.</li>
            </ul>
          </SectionDescription>
        </SectionListItem>
        <SectionListItem>
          <SectionTitle>Advanced Application Developer Analyst Intern at Accenture, June - July, 2023</SectionTitle>
          <SectionDescription>
            <ul>
              <li>Spearheaded the development of Healthcare Chatbot and data-driven dashboards.</li>
              <li>Collaborated with cross-functional teams to deliver high-quality software solutions.</li>
            </ul>
          </SectionDescription>
        </SectionListItem>
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
  list-style-type: none;
  padding: 0;
`;

const SectionListItem = styled.li`
  margin-bottom: 20px;
`;

const SectionTitle = styled.u`
  font-size: 22px;
  font-weight: bold;
`;

const SectionDescription = styled.div`
  margin-top: 10px;
  padding-left: 20px;

  ul {
    list-style-type: disc;
    padding-left: 20px;
    margin-top: 5px;
  }

  li {
    font-size: 18px;
    line-height: 1.6;
  }
`;

export default WorkExperienceSection;


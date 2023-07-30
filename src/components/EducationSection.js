import React from 'react';
import styled from 'styled-components';

const EducationSection = () => {
  return (
    <Container>
      <Title>🎓Education</Title>
      <EducationList>
        <EducationItem>
          <Degree>B.E. in Electronics and Computers</Degree>
          <University>Thapar University, 2024</University>
        </EducationItem>
        <EducationItem>
          <Degree>B.S. in Data Science and Programming</Degree>
          <University>IIT Madras, 2024</University>
        </EducationItem>
      </EducationList>
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

const EducationList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

const EducationItem = styled.li`
  margin-bottom: 20px;
`;

const Degree = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

const University = styled.p`
  font-size: 16px;
  color: #777;
`;

export default EducationSection;
import React from 'react';
import styled from 'styled-components';

const Section = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  margin-top: 40px;
`;

const SectionListItem = styled.li`
  margin-bottom: 20px;
`;




export default Section;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import EducationSection from './components/EducationSection';
import WorkExperienceSection from './components/WorkExperienceSection';
import SkillsSection from './components/SkillsSection';
import PassionProjectsSection from './components/PassionProjectsSection';
import ContactSection from './components/ContactSection';
import ParticleBackground from './components/ParticleBackground';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #000;
    color: #fff;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #000;
`;

const MainContentContainer = styled.main`
  padding: 2rem;
  color: #fff;
  flex: 1;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <AppContainer>
        <ParticleBackground />
          <Header />
          <MainContentContainer>
            <Routes>
            <Route path="/" element={<MainContent />} />
            {/* Add routes for other sections */}
            {/* Example: */}
            <Route path="/education" element={<EducationSection />} /> 
            <Route path="/work-experience" element={<WorkExperienceSection />} /> 
            <Route path="/skills" element={<SkillsSection />} /> 
            <Route path="/passion-projects" element={<PassionProjectsSection />} /> 
            <Route path="/contact" element={<ContactSection />} /> 
          </Routes>
          </MainContentContainer>
          <Footer />
        </AppContainer>
      </BrowserRouter>
    </>
  );
}

export default App;

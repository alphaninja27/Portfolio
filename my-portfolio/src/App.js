import React, { useState } from 'react';
import Confetti from 'react-confetti';
import styled, { ThemeProvider } from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './App.css';

const lightTheme = {
  body: '#f0f4f8',
  text: '#333',
  toggleBorder: '#FFF',
  background: '#0077b6',
  buttonBackground: 'gray',
  iconColor: '#0077b6',
};

const darkTheme = {
  body: '#333',
  text: '#f0f4f8',
  toggleBorder: '#6B8096',
  background: '#333',
  buttonBackground: '#555',
  iconColor: '#f0f4f8',
};

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

const AppWrapper = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all 0.25s linear;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
  margin: 1rem;
  transition: all 0.25s linear;

  &:hover {
    background: ${({ theme }) => theme.toggleBorder};
    color: ${({ theme }) => theme.background};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;

  a {
    color: ${({ theme }) => theme.iconColor};
    font-size: 2rem;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: ${({ theme }) => theme.toggleBorder};
  }
`;

function App() {
  const [theme, setTheme] = useState('light');
  const [activeSection, setActiveSection] = useState('home');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const sections = {
    home: (
      <section>
        <h2>Welcome to My Portfolio!</h2>
        //<img src="https://github.com/alphaninja27/Personal-Website/blob/676da091ed44aa582ed0de0d48f7880f3079de8a/my-portfolio/public/1614171945916.jpg" alt="" style={{ borderRadius: '50%', width: '150px', height: '150px' }} />
        <p>Hi! I'm Armaan!, a passionate techie with interest in various technologies. Welcome to my portfolio!</p>
      </section>

    ),
    work: (
      <section>
        <h2>‍💼Work Experience</h2>
        <p><strong>🎮Zupee</strong><br />Software Development Engineer in Test, October 2024 - Current</p>
        <ul>
          <li>Designed and executed comprehensive test plans and test cases for web, mobile, and backend APIs, ensuring
 high-quality deliverables through UI, functionality, and database testing.</li>
          <li>Automated mobile application testing using Jest and backend API testing with Postman, enhancing efficiency
 and test coverage across critical workflows.</li>
          <li> Implemented robust test automation frameworks integrated with Jenkins for CI/CD pipelines, enabling
 seamless continuous testing.</li>
          <li> Implemented robust test automation frameworks integrated with Jenkins for CI/CD pipelines, enabling
 seamless continuous testing.</li>
          <li> Performed device testing and contributed to building reusable and modular test automation solutions, improving
 scalability and maintainability of test suites.</li>
        </ul>
        <p><strong>📶Arista Networks</strong><br />Software Test Intern, January 2024 - June 2024</p>
        <ul>
          <li>Executing test plans to validate new features or products.</li>
          <li>Working with other testers and developers to troubleshoot and diagnose software defects.</li>
          <li>Using Ixia traffic generator tools to emulate real-world traffic flows.</li>
          <li>Setting up networking equipment in the lab to support test efforts.</li>
        </ul>
        <p><strong>📱Accenture</strong><br />Advanced Application Engineering Analyst Intern, June 2023 - July 2023</p>
        <ul>
          <li>Supported in building proprietary assets, prototypes, and innovative applications.</li>
          <li>Delivered presentations on Data Migration, SDLC, and created interactive Dashboards on PowerBI.</li>
        </ul>

   <h2> 👨‍💻Freelance Experience</h2>
   <p><strong><a href="https://sounding-the-invisible.vercel.app/">Sounding The Invisible</a></strong></p>
      </section>
    ),
    education: (
      <section>
        <h2>🎓Education</h2>
        <p><strong>Thapar Institute of Engineering and Technology</strong><br />B.E. in Electronics and Computers, 82.7%, 2024</p>
        <p><strong>Indian Institute of Technology Madras</strong><br />B.S. in Data Science and Programming, Expected September 2024</p>
        <p><strong>Army Public School, Bolarum</strong><br />CBSE - Grade XII, 94.6%, 2020</p>
        <p>Licenses and Certifications: Arista ACE L1, SQL (Basic) - Hackerrank</p>
      </section>
    ),
    skills: (
      <section>
        <h2>👨‍💻Skills Summary</h2>
        <ul>
          <li><strong>🖥️Languages:</strong> Python, SQL, C/C++, MATLAB, HTML, CSS</li>
          <li><strong>🛠️Tools:</strong> MS Excel, VS Code, GitHub, PowerBI, Cloud Platforms, Bugzilla, Ixia, Tmux</li>
          <li><strong>🌐Frameworks:</strong> Django, Flask, React, Firebase</li>
          <li><strong>🗣Soft Skills:</strong> Public Speaking, Leadership, Event Management, Collaboration</li>
          <li><strong>🤔Problem-Solving Acumen:</strong> Curious mindset for exploring new technologies and problem-solving.</li>
        </ul>
      </section>
    ),
    achievements: (
      <section>
        <h2>🏆Honors and Awards</h2>
        <ul>
          <li>Awarded Class of 1987 Alumni Scholarship for exceptional performance in extra-curricular activities.</li>
          <li>Selected for Nas Academy x Solana Developer Program 2023.</li>
          <li>Runner’s up in inter-college trading Competition, Wolf of Dalal Street 8.0</li>
          <li>Selected for Amazon ML Summer School 2022.</li>
          <li>Finished in TOP 5 in MLSC TIET Hackathon-MAKE4THON 2022.</li>
          <li>Best Delegate in The Crisis Summit 2021, Thapar MUN Society and Indian International MUN 2019.</li>
          <li>Amongst top 2% in Upraised Embark’s ESAT 2021, becoming an Embark Fellow.</li>
        </ul>
      </section>
    ),
    contact: (
      <section>
        <h2>📞Contact</h2>
        <p>
        My goal is to leverage my technical expertise and creativity to build innovative solutions that make a positive impact on people's lives. I thrive in dynamic environments and enjoy taking up new challenges.
        <br />
        Let's connect!
      </p>
        <IconWrapper>
          <a href="https://www.linkedin.com/in/armaan-nayyar-5776a4206/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/alphaninja27" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </IconWrapper>
        <p>Get in touch with me at <a href="mailto:your.email@example.com">armaannayyar@yahoo.com</a>.</p>
      </section>
    ),
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <AppWrapper>
        <Confetti />
        <header>
          <nav>
            <div className="navbar-left">
              <h1>Armaan Nayyar</h1>
              <Button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
              </Button>
            </div>
            <ul>
              <li><button onClick={() => setActiveSection('home')}>Home</button></li>
              <li><button onClick={() => setActiveSection('work')}>Work Experience</button></li>
              <li><button onClick={() => setActiveSection('education')}>Education</button></li>
              <li><button onClick={() => setActiveSection('skills')}>Skills</button></li>
              <li><button onClick={() => setActiveSection('achievements')}>Achievements</button></li>
              <li><button onClick={() => setActiveSection('contact')}>Contact</button></li>
            </ul>
          </nav>
        </header>

        <main>
          {sections[activeSection]}
        </main>

        <footer>
          <p>© 2024 Armaan Nayyar. All rights reserved.</p>
        </footer>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;

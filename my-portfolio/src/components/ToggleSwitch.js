// src/ToggleSwitch.js
import React from 'react';
import styled from 'styled-components';

const SwitchWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: "";
    height: 24px;
    width: 24px;
    left: 3px;
    bottom: 3px;
    background-color: ${({ theme }) => theme.text};
    border-radius: 50%;
    transition: 0.4s;
  }
`;

const SwitchLabel = styled.label`
  ${SwitchInput}:checked + ${Slider} {
    background-color: ${({ theme }) => theme.background};
  }

  ${SwitchInput}:checked + ${Slider}:before {
    transform: translateX(30px);
  }
`;

const ToggleSwitch = ({ theme, toggleTheme }) => (
  <SwitchWrapper>
    <SwitchLabel>
      <SwitchInput
        type="checkbox"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <Slider />
    </SwitchLabel>
  </SwitchWrapper>
);

export default ToggleSwitch;

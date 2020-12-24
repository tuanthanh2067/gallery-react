import React from "react";
import styled from "styled-components";

const Toggle = ({ themeToggler }) => {
  return <StyledToggle onClick={themeToggler}>Switch mode</StyledToggle>;
};

const StyledToggle = styled.button`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border: ${({ theme }) => theme.buttonBorder};
  border-radius: 12px;
  padding: 12px 26px;
  font-family: inherit;
  font-size: 1.005rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
  outline: none;
  cursor: pointer;
`;

export default Toggle;

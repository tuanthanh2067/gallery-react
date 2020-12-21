import React from "react";
import styled from "styled-components";

const NoFound = () => {
  return <StyledText>No Images Found</StyledText>;
};

const StyledText = styled.h2`
  width: 100%;
  text-align: center;
  margin-top: 1rem;
`;

export default NoFound;

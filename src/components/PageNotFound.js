import React from "react";
import styled from "styled-components";

const PageNotFound = () => {
  return (
    <StyledPageNotFound>
      <h1>Page Not Found</h1>
    </StyledPageNotFound>
  );
};

export default PageNotFound;

const StyledPageNotFound = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  text-align: center;
  padding: 10rem 0rem 0rem 0rem;
  width: 100%;
  height: 100%;
`;

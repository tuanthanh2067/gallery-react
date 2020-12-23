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
  text-align: center;
  margin: 10rem 0rem;
  width: 100%;
`;

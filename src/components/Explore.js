import React from "react";

// components, containers
import SearchBar from "./SearchBar";
import Container from "./Container";
import Toggle from "./Toggle";
// route
import { useLocation } from "react-router-dom";

import styled from "styled-components";

const Explore = ({
  photos,
  setPhotos,
  isLoading,
  setIsLoading,
  fetchHandler,
  themeToggler,
}) => {
  const location = useLocation();
  const pattern = location.pathname.split("/")[2];

  return (
    <StyledExplore>
      <Toggle themeToggler={themeToggler}></Toggle>
      <h2>Explore billions of photos</h2>
      <SearchBar></SearchBar>
      {pattern && (
        <Container
          photos={photos}
          setPhotos={setPhotos}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          fetchHandler={fetchHandler}
        ></Container>
      )}
    </StyledExplore>
  );
};

const StyledExplore = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10rem 20rem 0rem 20rem;
  align-items: center;
  transition: all 0.35s linear;
  h2 {
    font-size: 2.25rem;
  }

  @media (max-width: 1300px) {
    padding: 0 10rem;
  }
  @media (max-width: 900px) {
    padding: 0 3rem;
  }
  @media (max-width: 700px) {
    padding: 0 2rem;
    h2 {
      font-size: 1.75rem;
    }
  }
  @media (max-width: 430px) {
    h2 {
      font-size: 1.35rem;
    }
  }
`;

export default Explore;

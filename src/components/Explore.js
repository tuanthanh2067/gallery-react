import React from "react";

// components, containers
import SearchBar from "./SearchBar";
import Container from "./Container";

import styled from "styled-components";

const Explore = ({
  photos,
  setPhotos,
  pattern,
  setPattern,
  isLoading,
  setIsLoading,
  fetchHandler,
  page,
  setPage,
}) => {
  return (
    <StyledExplore>
      <h2>Explore billions of photos</h2>
      <SearchBar pattern={pattern} setPattern={setPattern}></SearchBar>
      <Container
        photos={photos}
        setPhotos={setPhotos}
        isLoading={isLoading}
        pattern={pattern}
        setIsLoading={setIsLoading}
        fetchHandler={fetchHandler}
        page={page}
        setPage={setPage}
      ></Container>
    </StyledExplore>
  );
};

const StyledExplore = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  padding: 0 20rem;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 2.25rem;
  }
`;

export default Explore;

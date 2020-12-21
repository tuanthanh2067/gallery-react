import React from "react";
import styled from "styled-components";

// components, containers
import Photos from "./Photos";

const Container = (props) => {
  let string = (
    <StyledContainer>
      <h3>No images</h3>
    </StyledContainer>
  );
  if (props.pattern !== "") {
    string = (
      <StyledContainer>
        <h3>{props.pattern} photos</h3>
        <Photos
          photos={props.photos}
          setPhotos={props.setPhotos}
          isLoading={props.isLoading}
          pattern={props.pattern}
          setIsLoading={props.setIsLoading}
        ></Photos>
      </StyledContainer>
    );
  }

  return string;
};

const StyledContainer = styled.div`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    text-transform: capitalize;
    font-size: 2.5rem;
  }
`;

export default Container;

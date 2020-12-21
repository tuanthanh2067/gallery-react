import React from "react";
import styled from "styled-components";

// components, containers
import Photos from "./Photos";

const Container = (props) => {
  const loadMoreHandler = () => {
    props.fetchHandler(props.page);
    const pagePlus = props.page + 1;
    props.setPage(pagePlus);
  };
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
          fetchHandler={props.fetchHandler}
        ></Photos>
        {props.photos.length > 0 ? (
          <button onClick={loadMoreHandler}>Load More...</button>
        ) : null}
      </StyledContainer>
    );
  }

  return string;
};

const StyledContainer = styled.div`
  margin: 5rem 0rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    text-transform: capitalize;
    font-size: 2.5rem;
  }
  button {
    padding: 18px 36px;
    background: #282828;
    font-size: 1.25rem;
    font-family: "Montserrat", sans-serif;
    border: none;
    margin-top: 2em;
    color: white;
    cursor: pointer;
  }
`;

export default Container;

import React from "react";
import styled from "styled-components";

// route
import { useHistory } from "react-router-dom";

// components, containers
import Photos from "./Photos";

const Container = (props) => {
  const history = useHistory();
  const location = history.location;
  const pattern = location.pathname.split("/")[2];
  let page = location.pathname.split("/")[3];
  const loadMoreHandler = () => {
    page = parseInt(page) + 1;
    history.push(`/photos/${pattern}/${page}`);
  };
  return (
    <StyledContainer>
      <h3>{pattern} photos</h3>
      <Photos
        photos={props.photos}
        setPhotos={props.setPhotos}
        isLoading={props.isLoading}
        setIsLoading={props.setIsLoading}
        fetchHandler={props.fetchHandler}
      ></Photos>
      {props.photos.length > 0 ? (
        <button onClick={loadMoreHandler}>Load More...</button>
      ) : null}
    </StyledContainer>
  );
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

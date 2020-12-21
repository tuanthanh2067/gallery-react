import React, { useEffect } from "react";
import styled from "styled-components";
// components, containers
import Photo from "./Photo";
import Loader from "./Loader";
import NoFound from "./NoFound";

// pexels
import { createClient } from "pexels";
const client = createClient(process.env.REACT_APP_API_KEY);

const Photos = (props) => {
  useEffect(() => {
    props.setIsLoading(true);
    const query = props.pattern;
    client.photos
      .search({ query, per_page: 20 })
      .then((photos) => {
        props.setPhotos(photos.photos);
        props.setIsLoading(false);
      })
      .catch((error) => {
        console.log("error from fetching");
      });
  }, [props.pattern]);

  let scripts = null;
  if (props.photos.length > 0) {
    scripts = props.photos.map((photo) => (
      <Photo key={photo.id} info={photo}></Photo>
    ));
  } else {
    scripts = <NoFound></NoFound>;
  }
  return props.isLoading ? <Loader /> : <StyledDiv>{scripts}</StyledDiv>;
};

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  min-height: 500px;
  flex-wrap: wrap;
`;

export default Photos;

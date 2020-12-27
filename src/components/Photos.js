import React, { useEffect } from "react";
import styled from "styled-components";
// components, containers
import Photo from "./Photo";
import Loader from "./Loader";
import NoFound from "./NoFound";

// route
import { useLocation } from "react-router-dom";

const Photos = (props) => {
  const location = useLocation();
  const pattern = location.pathname.split("/")[2];
  const page = location.pathname.split("/")[3];

  useEffect(() => {
    props.fetchHandler(page, pattern);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pattern, page]);

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
  @media (max-width: 540px) {
    justify-content: center;
  }
`;

export default Photos;

import React, { useEffect } from "react";
import styled from "styled-components";
// components, containers
import Photo from "./Photo";
import Loader from "./Loader";
import NoFound from "./NoFound";

const Photos = (props) => {
  useEffect(() => {
    props.fetchHandler(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
  @media (max-width: 430px) {
    justify-content: center;
  }
`;

export default Photos;

import React from "react";
import styled from "styled-components";

const Photo = ({ info }) => {
  const clickedHandler = () => {
    window.location.href = info.url;
  };

  return (
    <StyledPhoto>
      <div>
        <img
          src={info.src.medium}
          alt={info.url}
          onClick={clickedHandler}
        ></img>
      </div>
      <h4>{info.photographer}</h4>
    </StyledPhoto>
  );
};

const StyledPhoto = styled.div`
  width: 275px;
  height: 375px;
  border-radius: 18px;
  border: 1px solid #c4c4c4;
  margin: 1.25em 0em;
  div {
    width: 100%;
    height: 85%;
    overflow: hidden;
  }
  img {
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
    cursor: pointer;
  }
  h4 {
    height: 15%;
    width: 100%;
    margin-top: 0.25rem;
    text-align: center;
    font-size: 1.25rem;
  }
  img:hover {
    transform: scale(1.25);
  }
`;

export default Photo;

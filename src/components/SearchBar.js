import React from "react";
import styled from "styled-components";

const SearchBar = ({ pattern, setPattern }) => {
  let string = "";

  const clickedHandler = (e) => {
    setPattern(string);
    e.preventDefault();
    e.currentTarget.reset();
  };

  return (
    <>
      <StyledForm onSubmit={clickedHandler}>
        <input
          type="text"
          className="input"
          placeholder="Find something..."
          onChange={(e) => {
            string = e.target.value;
          }}
          required
        />
        <input className="submit" type="submit" value="Search" />
      </StyledForm>
      <StyledExample>For example: Food, Beach, Gaming, Relax,...</StyledExample>
    </>
  );
};

const StyledForm = styled.form`
  margin: 1em auto 0em auto;
  width: 50%;
  height: 40px;
  .input {
    width: 80%;
    height: 100%;
    font-size: 1.125rem;
    padding-left: 0.5rem;
    border: 1px solid #d4d4d4;
    border-right: none;
  }
  .submit {
    width: 20%;
    height: 100%;
    background: #282828;
    color: white;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    border: none;
    cursor: pointer;
  }
`;

const StyledExample = styled.h5`
  width: 50%;
  font-weight: normal;
  font-style: italic;
  padding-left: 0.25rem;
`;

export default SearchBar;

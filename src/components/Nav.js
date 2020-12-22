import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link to="/" className="logo">
          Your Gallery
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/aboutme">About me</Link>
        </li>
        <li>
          <Link to="/">Pexels</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  top: 0;
  height: 86px;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 20rem;
  background: #282828;
  z-index: 5;
  a {
    color: white;
    text-decoration: none;
    height: 100%;
    border-bottom: 4px solid transparent;
    padding: 36px 0px;
  }
  a:hover,
  a:active {
    border-bottom: 4px solid white;
  }
  ul {
    display: flex;
    list-style: none;
    align-items: center;
    width: 300px;
    display: flex;
    justify-content: space-between;
    height: 100%;
  }
  li {
    display: flex;
    height: 100%;
    align-items: center;
  }

  .logo {
    font-size: 1.75rem;
    font-family: "Lobster", sans-serif;
  }
  @media (max-width: 1300px) {
    padding: 0 10rem;
  }
  @media (max-width: 900px) {
    padding: 0 3rem;
  }
  @media (max-width: 700px) {
    padding: 0 2rem;
    ul {
      width: 200px;
    }
  }
  @media (max-width: 430px) {
    padding: 0 2rem;
    ul {
      width: 150px;
    }
  }
`;

export default Nav;

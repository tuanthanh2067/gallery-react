import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <a href="/" className="logo">
          Your Gallery
        </a>
      </h1>
      <ul>
        <li>
          <a href="/">About me</a>
        </li>
        <li>
          <a href="/">Contact me</a>
        </li>
        <li>
          <a href="/">Pexels</a>
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
    width: 500px;
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
`;

export default Nav;

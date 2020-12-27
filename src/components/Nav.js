import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <NavLink to="/" className="logo">
          Your Gallery
        </NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to="/aboutme">About me</NavLink>
        </li>
        <li>
          <NavLink to="/oops">Oops</NavLink>
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

  ul {
    display: flex;
    list-style: none;
    align-items: center;
    width: 300px;
    display: flex;
    justify-content: space-between;
    height: 100%;
    li {
      display: flex;
      height: 100%;
      align-items: center;
    }

    a:hover,
    a:active,
    a.active {
      border-bottom: 4px solid white;
    }
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
  @media (max-width: 360px) {
    padding: 0 1rem;
    .logo {
      font-size: 1.5rem;
    }
  }
`;

export default Nav;

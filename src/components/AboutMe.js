import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faFacebookSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

const AboutMe = () => {
  return (
    <StyledAboutMe>
      <h2>Full name: Tuan Thanh Tan</h2>
      <h2>Contact me via</h2>
      <StyledSection>
        <FontAwesomeIcon icon={faEnvelope} style={{ color: "brown" }} />
        <h3>tuanthanh2067@gmail.com</h3>
      </StyledSection>
      <StyledSection>
        <FontAwesomeIcon icon={faLinkedin} style={{ color: "#4294FF" }} />
        <h3>https://www.linkedin.com/in/tuan-thanh-tan-aa980419a/</h3>
      </StyledSection>
      <StyledSection>
        <FontAwesomeIcon icon={faFacebookSquare} style={{ color: "#4294FF" }} />
        <h3>https://www.facebook.com/profile.php?id=100010366298292</h3>
      </StyledSection>
      <StyledSection>
        <FontAwesomeIcon icon={faGithubSquare} />
        <h3>https://github.com/tuanthanh2067</h3>
      </StyledSection>
    </StyledAboutMe>
  );
};

const StyledAboutMe = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0rem 20rem;
  justify-content: center;
  @media (max-width: 1300px) {
    padding: 0 10rem;
  }
  @media (max-width: 900px) {
    padding: 0 3rem;
  }
  @media (max-width: 700px) {
    padding: 0 2rem;
  }
  @media (max-width: 500px) {
    h2 {
      font-size: 1.25rem;
    }
  }
`;

const StyledSection = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  font-size: 2.125rem;
  overflow: hidden;
  h3 {
    font-size: 1.25rem;
    margin-left: 0.75rem;
    font-weight: normal;
  }
  @media (max-width: 500px) {
    font-size: 1.5rem;
    h3 {
      font-size: 0.9rem;
    }
  }
`;

export default AboutMe;

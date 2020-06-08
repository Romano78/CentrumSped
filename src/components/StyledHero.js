import React from "react";
import BackgroundImage from "gatsby-background-image";
import styled from "styled-components";

const StyledHero = ({ img, className, children, home }) => {
  return (
    <BackgroundImage className={className} fixed={img} home={home}>
      {children}
    </BackgroundImage>
  );
};

export default styled(StyledHero)`
  width: 1440px;
  height: 495px;
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 78px;
  box-shadow: 0px 9px 19px rgba(0, 0, 0, 0.18), 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-height: 495px) {
    height: 100vh;
  }

  @media (max-width: 1440px) {
    width: 100vw;
  }
`;

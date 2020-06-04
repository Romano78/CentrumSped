import React from "react";
import BackgroundImage from "gatsby-background-image";
import styled from "styled-components";

const StyledHero = ({ img, className, children, home }) => {
  return (
    <BackgroundImage className={className} fluid={img} home={home}>
      {children}
    </BackgroundImage>
  );
};

export default styled(StyledHero)`
  width: 1440px !important;
  height: 533px !important;
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;

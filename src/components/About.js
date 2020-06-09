import React from "react";
import styled from "styled-components";
import Img from "gatsby-image/withIEPolyfill";
import { theme } from "../styles";

const About = ({ img, info, title, className, children }) => {
  return (
    <div className={className}>
      <div className="about">
        <h2>{title}</h2>
        <p>{info}</p>
      </div>
      <div className="about-image">
        <Img fixed={img} />
      </div>
      {children}
    </div>
  );
};

export default styled(About)`
  .about {
    background-color: ${theme.colors.primary};
    height: 500px;
    width: 100%;
    margin-top: 20px;
  }

  .about h2 {
    margin-left: 131px;
    padding-top: 50px;

    border-bottom: 1px solid;
    color: white;
  }

  .about p {
    margin-left: 131px;

    color: white;
  }
  .about-image {
    position: relative;
    top: 12px;
  }

  .about-image {
    text-align: end;
    position: relative;
    top: -100px;
  }

  img {
    box-shadow: 0px 9px 19px rgba(0, 0, 0, 0.18),
      0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

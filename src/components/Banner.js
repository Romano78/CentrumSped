import React from "react";
import styled from "styled-components";

const Banner = ({ title, info, children, className }) => {
  return (
    <div className={className}>
      <div className="banner-body">
        <h1>{title}</h1>
        <p>{info}</p>
        {children}
      </div>
    </div>
  );
};

export default styled(Banner)`
  position: absolute;
  left: 0px;
  width: 50vw;
  height: 100vh;
  max-height: 495px;
  top: 0px;
  background-color: white;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column-reverse;

  h1 {
    border-bottom: 1px solid;
    padding-bottom: 26px;
    font-size: 39px;
    text-transform: uppercase;
    padding-left: 144px;
  }

  p {
    text-align: center;
  }

  @media (max-width: 500px) {
    h1 {
      text-align: center;
      padding-left: 0px;
    }
  }
`;

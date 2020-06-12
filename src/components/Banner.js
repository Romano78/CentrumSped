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
  width: 400.99px;
  h1 {
    color: white;
    font-weight: 300;
    text-transform: uppercase;
    border-bottom: 1px solid;
    font-size: 36px !important;
    padding-bottom: 13px;
    margin-top: 73px;
  }

  p {
    color: white;
    text-transform: uppercase;
    font-size: 14px;
    margin-top: -12px;
  }

  @media (min-width: 993px) {
    width: 814px;
    position: absolute;
    bottom: 40px;
    left: 71px;
    h1 {
      color: white;
      font-weight: 300;
      text-transform: uppercase;
      border-bottom: 1px solid;
      font-size: 72px !important;
    }

    p {
      color: white;
      text-transform: uppercase;
      font-size: 24px;
      padding-left: 10px;
    }
  }
`;

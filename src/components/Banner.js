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
  width: 50%;
  position: absolute;
  left: 30px;
  bottom: 5px;

  h1 {
    color: white;
    font-weight: 300;
    text-transform: uppercase;
    border-bottom: 1px solid;
  }

  p {
    color: white;
    text-transform: uppercase;
  }
`;

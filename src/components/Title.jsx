import React from "react";
import styled from "styled-components";
import { theme } from "../styles";
import logo from "../images/title-logo.svg";

const Title = ({ title, className }) => {
  return (
    <div className={className}>
      <div className="title">
        <span className="title-logo">
          <img src={logo} alt="" />
        </span>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default styled(Title)`
  text-transform: uppercase;
  font-size: 36px;
  margin-left: 131px;
  font-weight: bold;

  color: ${theme.colors.primary};

  border-bottom: 1px solid;
  padding-bottom: 10px;

  .title h2 {
    margin-bottom: 0;
  }

  .title-logo {
    position: absolute;
    left: 10px;
  }
`;

import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { theme } from "../styles";

const StyledFooter = styled.footer`
  width: 100%;

  p {
    margin-bottom: 0px;
    text-align: center;
    font-size: 14px;
  }
  .footer {
    height: 205px;
    background-color: #331a80;
  }

  .top-footer {
    height: 50%;
    background-color: #f7f6fa;
    padding-top: 43px;
    color: ${theme.colors.primary};
  }

  .top-footer p {
    color: ${theme.colors.primary};
  }

  .bottom-footer {
    height: 50%;
    padding-top: 14px;
  }

  .bottom-footer p {
    color: white;
    padding-bottom: 22px;
  }
`;

const Footer = ({ children }) => <StyledFooter>{children}</StyledFooter>;

export default Footer;

// Footer.propTypes = {
//   children: PropTypes.node.isRequired,
// };

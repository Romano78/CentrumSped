import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import LocalizedLink from "./LocalizedLink";
// import { useStaticQuery, graphql } from "gatsby";
import { theme } from "../styles";

const StyledHeader = styled.nav`
  padding-bottom: 30px;
  /* a {
    color: ${theme.colors.primary};
    font-weight: 300;
    padding-right: 10px;
    font-style: normal;
    font-family: "proxima-nova";
  } */
`;

const Header = ({ invert, children }) => (
  <StyledHeader invert={invert}>{children}</StyledHeader>
);

export default Header;

Header.propTypes = {
  invert: PropTypes.bool,
};

Header.defaultProps = {
  invert: false,
};

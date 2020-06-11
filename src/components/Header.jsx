import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import LocalizedLink from "./LocalizedLink";
// import { useStaticQuery, graphql } from "gatsby";
import { theme } from "../styles";

const StyledHeader = styled.nav`
  padding-bottom: 30px;
  a {
    color: ${theme.colors.primary};
    font-weight: 300;
    padding-right: 10px;
    font-style: normal;
    font-family: "proxima-nova";
  }

  .nav-header {
    max-width: 1170px;
    height: 110px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.25rem;
    padding-top: 46px;
  }

  .nav-center {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
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

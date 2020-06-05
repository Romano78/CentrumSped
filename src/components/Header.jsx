import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import LocalizedLink from "./LocalizedLink";
import { useStaticQuery, graphql } from "gatsby";
import { theme } from "../styles";

const StyledHeader = styled.nav`
  a {
    display: flex;
    color: ${theme.colors.primary};
    font-weight: 400;
    padding-right: 10px;

    font-style: normal;
    font-family: "Source Sans Pro", -apple-system, "BlinkMacSystemFont",
      "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  .nav-header {
    max-width: 1170px;
    height: 110px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.25rem;
  }

  .nav-center {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-link {
    display: flex;
    padding-right: 50px;
    padding-top: 4px;
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

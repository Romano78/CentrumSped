import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  /* max-width: ${(props) => props.theme.maxWidth}; */
  width: 100%;
  margin: 6rem auto 0 auto;
  padding: 2rem;
  color: ${(props) => props.theme.colors.grey};
  background-color: ${(props) => props.theme.colors.primary};
`;

const Footer = ({ children }) => <StyledFooter>{children}</StyledFooter>;

export default Footer;

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

/* eslint no-unused-expressions: 0 */
/* eslint react/destructuring-assignment: 0 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import "@reach/skip-nav/styles.css";
import ReactCountryFlag from "react-country-flag";

import Footer from "./Footer";
import SkipNavLink from "./SkipNavLink";
import { theme, reset } from "../styles";
import i18n from "../../config/i18n";

import "typeface-lora";
import "typeface-source-sans-pro";

const globalStyle = css`
  ${reset}

  h1, h2, h3, h4, h5, h6, p {
    color: ${theme.colors.primary};
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    color: ${theme.colors.greyDarker};
    background-color: ${theme.colors.bg};
  }

  button:focus {
    outline: none;
  }

  ::selection {
    color: ${theme.colors.bg};
    background-color: ${theme.colors.primary};
  }
  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    font-weight: 300;
    padding-right: 10px;
    font-style: normal;
    font-family: "proxima-nova";
    text-transform: uppercase;
    letter-spacing: 1px;

    &:hover,
    &:active {
      border-bottom: none;
      background: linear-gradient(#133c8b, #133c8b) bottom
        /* left or right or else */ no-repeat;
      background-size: 35% 3px;
      padding-bottom: 10px;
    }
    &:focus {
      text-decoration: none;
      border: none;
    }
  }

  @media (max-width: ${theme.breakpoints.s}) {
    html {
      font-size: 24px !important;
    }
  }
  @media (max-width: ${theme.breakpoints.s}) {
    h1 {
      font-size: 36px !important;
    }
    p {
      font-size: 14px !important;
    }
    h2 {
      font-size: 24px !important;
    }
    h3 {
      font-size: 18px !important;
    }
    h4 {
      font-size: 1rem !important;
    }
    h5 {
      font-size: 0.75rem !important;
    }
    h6 {
      font-size: 0.563rem !important;
    }
  }
`;

const LocaleSwitcher = styled.div`
  position: absolute;
  top: -5px;
  right: 43px;
  padding: 1rem;

  a {
    padding: 2px;
  }

  a:hover {
    background: none;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

const LocaleContext = React.createContext();

const Layout = ({ children, pageContext: { locale } }) => {
  const data = useStaticQuery(query);

  return (
    <LocaleContext.Provider value={{ locale, i18n }}>
      <ThemeProvider theme={theme}>
        <>
          <Global styles={globalStyle} />
          <SkipNavLink />
          <LocaleSwitcher data-name="locale-switcher">
            <Link hrefLang="en-us" to="/en">
              <ReactCountryFlag
                countryCode="GB"
                svg
                style={{
                  width: "25px",
                  height: "17.2px",
                }}
              />
            </Link>
            <Link hrefLang="cs-cz" to="/">
              <ReactCountryFlag
                countryCode="CZ"
                svg
                style={{
                  width: "25px",
                  height: "17.2px",
                }}
              />
            </Link>
          </LocaleSwitcher>
          {children}
          <Footer></Footer>
        </>
      </ThemeProvider>
    </LocaleContext.Provider>
  );
};

export { LocaleContext, Layout };

const query = graphql`
  query LayoutQuery {
    allPrismicHomepage {
      edges {
        node {
          lang
        }
      }
    }
  }
`;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
  }).isRequired,
};

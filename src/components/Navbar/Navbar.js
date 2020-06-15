import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { slide as Menu } from "react-burger-menu";
import LocalizedLink from "../LocalizedLink";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

const Navbar = ({ className, children }) => {
  const data = useStaticQuery(graphql`
    {
      navbar: allPrismicHeader(filter: { lang: { eq: "cs-cz" } }) {
        nodes {
          lang
          data {
            links {
              produkty {
                raw {
                  text
                }
              }
            }
            logo {
              localFile {
                publicURL
                extension
              }
            }
          }
        }
      }
    }
  `);
  return (
    <>
      <div className={className}>
        <div className="navbar">
          <div className="navbar-mobile">
            <Menu width={"100%"}>
              {data.navbar.nodes[0].data.links.map((item, index) => {
                return (
                  <LocalizedLink
                    key={index}
                    to={`/#${item.produkty.raw[0].text}`}
                    aria-label={`${item.produkty.raw[0].text}`}
                    activeClassName="active"
                  >
                    <span>{item.produkty.raw[0].text}</span>
                  </LocalizedLink>
                );
              })}
              <h1 className="language-switcher">CS/CZ</h1>
            </Menu>
          </div>
          <div className="navbar-mobile-logo">
            <img
              src={data.navbar.nodes[0].data.logo.localFile.publicURL}
              alt=""
            />
            {console.log(data.navbar.nodes[0].data.logo.localFile)}
          </div>
        </div>
        <div className="navbar-desktop">
          <div className="navbar-desktop-logo">
            <img
              src={data.navbar.nodes[0].data.logo.localFile.publicURL}
              alt=""
            />
            {console.log(data.navbar.nodes[0].data.logo.localFile)}
          </div>
          <div className="navbar-desktop-links">
            {data.navbar.nodes[0].data.links.map((item, index) => {
              return (
                <LocalizedLink
                  key={index}
                  to={`/#${item.produkty.raw[0].text}`}
                  aria-label={`${item.produkty.raw[0].text}`}
                  activeClassName="active"
                >
                  {item.produkty.raw[0].text}
                </LocalizedLink>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default styled(Navbar)`
  height: 115px;

  .navbar-desktop {
    display: none;
  }

  .navbar-mobile-logo {
    padding-top: 45px;
    padding-left: 24px;
  }

  .navbar-mobile-logo img {
    width: 50%;
  }
  .navbar-mobile {
    .bm-burger-button {
      position: absolute;
      width: 52px;
      height: 30px;
      left: calc(100% - 75px);
      top: 43px;
      padding: 20px;
    }

    .bm-item span:after {
      width: 10%;
      height: 5px;
      background-color: white;
    }

    /* Color/shape of burger icon bars */
    .bm-burger-bars {
      background: #133c8b;
    }

    /* Color/shape of burger icon bars on hover*/
    .bm-burger-bars-hover {
      background: #133c8b;
    }

    /* Position and sizing of clickable cross button */
    .bm-cross-button {
      height: 24px;
      width: 24px;
      right: 25px !important;
      top: 35px !important;
      border: 1px solid white;
      border-width: 3px;
      padding: 12px;
    }

    .bm-cross-button span {
      top: 1px !important;
    }

    /* Color/shape of close button cross */
    .bm-cross {
      background: white;
      width: 4px !important;
      height: 20px !important;
    }

    /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
    .bm-menu-wrap {
      position: fixed;
      height: 100%;
    }

    /* General sidebar styles */
    .bm-menu {
      background: #133c8b;
      padding: 2.5em 1.5em 0;
      font-size: 1.15em;
    }

    /* Morph shape necessary with bubble or elastic */
    .bm-morph-shape {
      fill: #133c8b;
    }

    /* Wrapper for item list */
    .bm-item-list {
      color: white;
      width: 287px;
      height: 405px;
    }

    .bm-item-list a {
      color: white;
      font-weight: 300;
      font-size: 36px;
      line-height: 44px;
      padding-top: 30px;
    }

    .bm-item-list a {
      &:hover,
      &:active {
        background: none;
        outline: none;
      }

      &:focus {
        outline: none;
      }
    }

    .bm-burger-bars {
      width: 45px;
      height: 11% !important;
    }

    /* Individual item */
    .bm-item {
      display: inline-block;
    }

    .language-switcher {
      position: absolute;
      bottom: 2px;
      color: white;
    }
  }

  @media (min-width: 993px) {
    .navbar-mobile {
      display: none;
    }

    .navbar-desktop {
      display: inline;
    }

    .navbar-desktop {
      display: flex;
      justify-content: space-between;
      padding-top: 50px;
    }
    .navbar-desktop-logo {
      padding-left: 42px;
    }

    .navbar-desktop-links {
      padding-right: 49px;
      padding-top: 3px;
    }
  }
`;

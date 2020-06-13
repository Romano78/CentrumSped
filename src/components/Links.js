import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import LocalizedLink from "./LocalizedLink";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

const ScrollToLink = ({ className, props }) => {
  const data = useStaticQuery(graphql`
    {
      links: allPrismicHeader(filter: { lang: { eq: "cs-cz" } }) {
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
          }
        }
      }
    }
  `);
  return (
    <>
      <div className={className}>
        <div className="center">
          <div className="nav-header">
            <div className="nav-link">
              {data.links.nodes[0].data.links.map((item, index) => {
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
      </div>
    </>
  );
};

export default styled(ScrollToLink)`
  /* .nav-header {
    max-width: 1170px;
    height: 110px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 46px;
  }

  .nav-center {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-link {
    display: flex;
    padding-right: 26px;
    padding-top: 23px;
    height: 66px;
  }

  .nav-link a:active {
    text-decoration: none;
    border-bottom: none;
    background: linear-gradient(#39197a, #39197a) bottom no-repeat;
    background-size: 48% 2px;
    margin-bottom: 10px;
    text-decoration: none;
  }

  .nav-link a:hover {
    text-decoration: none;
    border-bottom: none;
    background: linear-gradient(#39197a, #39197a) bottom no-repeat;
    background-size: 48% 2px;
    margin-bottom: 10px;
    text-decoration: none;
  } */
`;

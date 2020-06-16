import React from "react";
import styled from "styled-components";
import Img from "gatsby-image/withIEPolyfill";
import { theme } from "../styles";
import { useStaticQuery, graphql } from "gatsby";
import logo from "../images/onas-logo.svg";

const About = ({ className, children }) => {
  const data = useStaticQuery(graphql`
    {
      about: allPrismicHomepage(filter: { lang: { eq: "cs-cz" } }) {
        nodes {
          data {
            oddil {
              sekce_polozka {
                document {
                  ... on PrismicProductSection {
                    id
                    data {
                      nadpis {
                        raw {
                          text
                        }
                      }
                      obsah {
                        raw {
                          text
                        }
                      }
                      foto {
                        localFile {
                          childImageSharp {
                            fluid {
                              ...GatsbyImageSharpFluid
                            }
                          }
                        }
                      }
                    }
                  }
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
      <div
        className="smooth-scrolling"
        id="o nás"
        style={{ paddingTop: "70px" }}
      ></div>
      <div className={className} id="about">
        <div className="about">
          <div className="about-header">
            <span className="title-logo">
              <img src={logo} alt="title-logo" />
            </span>
            {data.about.nodes[0] &&
            data.about.nodes[0].data.oddil[3].sekce_polozka.document[0].data
              .nadpis.raw[0].text ? (
              <h2>
                {
                  data.about.nodes[0].data.oddil[3].sekce_polozka.document[0]
                    .data.nadpis.raw[0].text
                }
              </h2>
            ) : (
              ""
            )}
          </div>
          <div className="about-info">
            {data.about.nodes[0] &&
            data.about.nodes[0].data.oddil[3].sekce_polozka.document[0].data
              .obsah.raw ? (
              <>
                {data.about.nodes[0].data.oddil[3].sekce_polozka.document[0].data.obsah.raw.map(
                  (item, index) => {
                    return <p key={index}>{item.text}</p>;
                  }
                )}
              </>
            ) : (
              ""
            )}
          </div>
          <div className="about-image">
            {data.about.nodes[0] &&
            data.about.nodes[0].data.oddil[3].sekce_polozka.document[0].data
              .foto.localFile.childImageSharp.fluid ? (
              <Img
                fluid={
                  data.about.nodes[0].data.oddil[3].sekce_polozka.document[0]
                    .data.foto.localFile.childImageSharp.fluid
                }
              />
            ) : (
              ""
            )}
          </div>
        </div>

        {children}
      </div>
    </>
  );
};

export default styled(About)`
  display: grid;
  grid-template-columns: 1fr;
  padding-top: 50px;

  .about {
    text-align: center;
    background-color: ${theme.colors.primary};
    width: 100vw;
  }
  .about h2 {
    padding-top: 50px;
    border-bottom: 1px solid;
    border-width: 5px;
    color: white;
    padding-bottom: 10px;
  }

  .about-info p {
    color: white;
  }

  .about-header span {
    display: none;
  }

  @media (min-width: 1025px) {
    .about {
      width: 100%;
      height: 874px;
      margin-top: 20px;
    }

    .about h2 {
      margin-left: 145px;
      border-bottom: 1px solid;
      text-align: left;
      padding-bottom: 0px;
    }

    .about-header span {
      display: inline;
      position: absolute;
      left: 21px;
      padding-top: 53px;
    }

    .about-info {
      max-width: 1133px;
      margin: 0 auto;
    }
    .about-info p {
      font-size: 24px;
    }

    .about-image {
      width: 911px;
      margin: 0 auto;
      box-shadow: 0px 9px 19px rgba(0, 0, 0, 0.18),
        0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
`;

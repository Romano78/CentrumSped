import React from "react";
import styled from "styled-components";
import Img from "gatsby-image/withIEPolyfill";
import { theme } from "../styles";
import { useStaticQuery, graphql } from "gatsby";
import logo from "../images/onas-logo.svg";

const About = ({ className, children }) => {
  const data = useStaticQuery(graphql`
    {
      about: allPrismicHomepage {
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
                            fixed(width: 866, height: 574) {
                              ...GatsbyImageSharpFixed
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
    <div className={className} id="about">
      <div className="about">
        <div className="floated">
          <div className="about-image">
            <Img
              fixed={
                data.about.nodes[2].data.oddil[3].sekce_polozka.document[0].data
                  .foto.localFile.childImageSharp.fixed
              }
            />
          </div>
        </div>
        <div className="about-header">
          <span className="title-logo">
            <img src={logo} alt="title-logo" />
          </span>
          <h2>
            {
              data.about.nodes[2].data.oddil[3].sekce_polozka.document[0].data
                .nadpis.raw[0].text
            }
          </h2>
        </div>
        <div className="about-info">
          {data.about.nodes[2].data.oddil[3].sekce_polozka.document[0].data.obsah.raw.map(
            (item, index) => {
              return <p key={index}>{item.text}</p>;
            }
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default styled(About)`
  .about {
    background-color: ${theme.colors.primary};
    width: 100%;
    height: 874px;
    margin-top: 20px;
  }

  .floated {
    float: right;
    width: 816px;
    height: 574px;
    position: relative;
    bottom: 52px;
    box-shadow: 0px 9px 19px rgba(0, 0, 0, 0.18),
      0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .about h2 {
    margin-left: 145px;
    padding-top: 50px;

    border-bottom: 1px solid;
    color: white;
  }
  .title-logo {
    padding-top: 51px;
  }

  .about-info {
    max-width: 1440px;
  }
  .about-info p {
    color: white;
    font-size: 24px;
    padding-left: 24px;
  }

  .about-header span {
    position: absolute;
    left: 21px;
  }
  .about-image {
  }
  .gatsby-image-wrapper {
    vertical-align: middle;
  }
`;

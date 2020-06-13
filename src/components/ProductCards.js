import React, { useState, Fragment } from "react";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { theme } from "../styles";
import { useStaticQuery, graphql } from "gatsby";
import { Transition } from "react-transition-group";

const ProductCards = ({ className, children }) => {
  const data = useStaticQuery(graphql`
    {
      allPrismicCards(filter: { lang: { eq: "cs-cz" } }) {
        nodes {
          data {
            productcards {
              cardimage {
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              cardinfo {
                raw {
                  text
                }
              }
              cardtitle {
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

  const [showInfo, setInfo] = useState(false);

  const toggleInfo = (id) => {
    setInfo((prevShowInfo) => ({
      ...prevShowInfo,
      [id]: !prevShowInfo[id],
    }));
  };

  return (
    <>
      <section className={className}>
        <div className="card">
          <div className="card-container">
            {data && data.allPrismicCards.nodes[0].data.productcards ? (
              <>
                {data.allPrismicCards.nodes[0].data.productcards.map(
                  (product, index) => {
                    return (
                      <Fragment key={index}>
                        <div className="grid-item">
                          <div className="image">
                            <BackgroundImage
                              onClick={() => toggleInfo(index)}
                              fluid={
                                product.cardimage.localFile.childImageSharp
                                  .fluid
                              }
                              className="background-image"
                            >
                              {product.cardtitle.raw[0].text ? (
                                <h3>{product.cardtitle.raw[0].text}</h3>
                              ) : null}
                            </BackgroundImage>
                            <div
                              className={
                                showInfo[index] ? "show-info" : "card-info"
                              }
                            >
                              {showInfo[index] ? (
                                <p>{product.cardinfo.raw[0].text}</p>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </Fragment>
                    );
                  }
                )}
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
      {children}
    </>
  );
};

export default styled(ProductCards)`
  .card {
    text-align: center;
    margin-top: 100px;
    margin-bottom: 200px;
    display: grid;
    grid-template-columns: 1fr;
    max-width: 1114px;
    margin: 0 auto;
  }

  .card-container {
    display: inline-grid;
    grid-column-gap: 136px;
    grid-row-gap: 50px;
  }

  .background-image {
    opacity: 1 !important;
    border-width: 6px;
    height: 234px;
    background: rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid ${theme.colors.primary};
    border-width: 6px;
    height: 325px;
  }

  .background-image h3 {
    position: relative;
    top: 45%;
    text-align: center;
  }

  .show-info {
    height: 300px;
    width: 100%;
    padding-left: 9px;
    text-align: left;
    max-width: 500px;
    transition: all 0.4s linear;
    overflow: hidden;
  }

  .card-info {
    list-style-type: none;
    transition: all 0.4s linear;
    height: 0;
    overflow: hidden;
    padding-left: 9px;
  }

  @media (min-width: 993px) {
    .card-container {
      display: inline-grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 136px;
      grid-row-gap: 100px;
    }

    .background-image h3 {
      position: relative;
      top: 45%;
      text-align: center;
    }

    .show-info {
      height: 300px;
      width: 100%;
      padding-left: 9px;
      text-align: left;
      max-width: 500px;
      transition: all 0.4s linear;
      overflow: hidden;
    }

    .card-info {
      list-style-type: none;
      transition: all 0.4s linear;
      height: 0;
      overflow: hidden;
      padding-left: 9px;
    }
  }

  .image:hover {
    cursor: pointer;
  }
`;

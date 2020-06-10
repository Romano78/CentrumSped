import React, { useState, Fragment } from "react";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { theme } from "../styles";
import { useStaticQuery, graphql } from "gatsby";
import { Transition } from "react-transition-group";

const ProductCards = ({ className, children }) => {
  const data = useStaticQuery(graphql`
    {
      allPrismicCards {
        nodes {
          data {
            productcards {
              cardimage {
                localFile {
                  childImageSharp {
                    fixed(quality: 90, width: 500, height: 325) {
                      ...GatsbyImageSharpFixed
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

  const [showInfo, setInfo] = useState({});

  const toggleInfo = (id) => {
    setInfo((prevShowInfo) => ({
      ...prevShowInfo,
      [id]: !prevShowInfo[id],
    }));
  };

  return (
    <>
      <section className={className}>
        <div className="card-container">
          {data.allPrismicCards.nodes[0] &&
          data.allPrismicCards.nodes[0].data.productcards ? (
            <>
              {data.allPrismicCards.nodes[0].data.productcards.map(
                (product, index) => {
                  return (
                    <Fragment key={index}>
                      <div className="grid-item">
                        <div className="image">
                          <BackgroundImage
                            fixed={
                              product.cardimage.localFile.childImageSharp.fixed
                            }
                            className="background-image"
                          >
                            {product.cardtitle.raw[0].text ? (
                              <h3 onClick={() => toggleInfo(index)}>
                                {product.cardtitle.raw[0].text}
                              </h3>
                            ) : null}
                          </BackgroundImage>
                          <div className="card-info">
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
      </section>
      {children}
    </>
  );
};

export default styled(ProductCards)`
  text-align: center;
  margin-top: 100px;
  margin-bottom: 100px;
  .card-container {
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 136px;
    grid-row-gap: 194px;
  }

  .background-image {
    opacity: 1 !important;
    border-width: 6px;
    height: 234px;
    background: rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid ${theme.colors.primary};
    border-width: 6px;
  }

  .background-image h3 {
    position: relative;
    top: 45%;
    text-align: center;
  }

  .card-info {
    width: 100%;
    padding-left: 9px;
    text-align: left;
    max-width: 500px;
  }

  .image:hover {
    cursor: pointer;
  }
`;

import React, { useState } from "react";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { theme } from "../styles";
import { useStaticQuery, graphql } from "gatsby";

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
                    fixed(quality: 90) {
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

  const [showInfo, setInfo] = useState(null);

  return (
    <>
      <section className={className}>
        <div className="card-container">
          {data.allPrismicCards.nodes[0].data.productcards.map(
            (product, index) => {
              return (
                <div className="image" key={index}>
                  <BackgroundImage
                    fixed={product.cardimage.localFile.childImageSharp.fixed}
                    className="background-image"
                  >
                    <h3
                      key={product}
                      onClick={() => {
                        setInfo(product);
                      }}
                    >
                      {product.cardtitle.raw[0].text}
                    </h3>
                  </BackgroundImage>
                  <div className="card-info">
                    {showInfo === product ? (
                      <p>{product.cardinfo.raw[0].text}</p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </section>
      {children}
    </>
  );
};

export default styled(ProductCards)`
  text-align: center;

  .card-container {
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 120px;
    grid-column-gap: 79px;
  }

  .card-title {
    border-bottom: 1px solid ${theme.colors.primary};
  }

  .background-image {
    opacity: 1 !important;
    border-width: 6px;
    height: 234px;
  }

  .background-image h3 {
    position: relative;
    top: 50%;
    text-align: center;
  }

  .card-info {
    width: 100%;
    padding-left: 50px;
    padding-right: 50px;
    word-break: break-all;
    text-align: left;
  }
`;

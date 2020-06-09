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

  const [showInfo, setInfo] = useState(null);

  return (
    <>
      <section className={className}>
        <div className="card-container">
          {data.allPrismicCards.nodes[0].data.productcards.map(
            (product, index) => {
              return (
                <div key={index} className="grid-item">
                  <div className="image">
                    <BackgroundImage
                      fixed={product.cardimage.localFile.childImageSharp.fixed}
                      className="background-image"
                    >
                      <h3>{product.cardtitle.raw[0].text}</h3>
                    </BackgroundImage>
                    <div className="card-info">
                      <p>{product.cardinfo.raw[0].text}</p>
                    </div>
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
  padding: 100px;
  .card-container {
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 79px;
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
`;

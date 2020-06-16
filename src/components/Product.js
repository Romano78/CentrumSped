import React, { Children } from "react";
import styled from "styled-components";
import Img from "gatsby-image/withIEPolyfill";
import logo from "../images/title-logo.svg";
import { useStaticQuery, graphql } from "gatsby";

const Product = ({ className, img, children, title, description }) => {
  const data = useStaticQuery(graphql`
    {
      product: allPrismicHomepage(filter: { lang: { eq: "cs-cz" } }) {
        nodes {
          data {
            oddil {
              sekce_polozka {
                document {
                  ... on PrismicProductSection {
                    data {
                      foto {
                        localFile {
                          childImageSharp {
                            fluid {
                              ...GatsbyImageSharpFluid
                            }
                          }
                        }
                      }
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
      <div className="smooth-scrool"></div>

      <div className={className} id="Produkty">
        <div className="product">
          <span className="title-logo">
            <img src={logo} alt="title-logo" />
          </span>
          <h2>
            {
              data.product.nodes[0].data.oddil[1].sekce_polozka.document[0].data
                .nadpis.raw[0].text
            }
          </h2>
          <p>
            {
              data.product.nodes[0].data.oddil[1].sekce_polozka.document[0].data
                .obsah.raw[0].text
            }
          </p>
        </div>
        <div className="product-image">
          <Img
            fluid={
              data.product.nodes[0].data.oddil[1].sekce_polozka.document[0].data
                .foto.localFile.childImageSharp.fluid
            }
          />
        </div>
        {children}
      </div>
    </>
  );
};

export default styled(Product)`
  display: grid;
  grid-template-columns: 1fr;
  padding-top: 50px;
  .product {
    text-align: center;
  }

  .product span {
    display: none;
  }

  .title-logo {
    padding-top: 5px;
  }

  .product h2 {
    border-bottom: 1px solid;
    border-width: 5px;
    letter-spacing: 2px;
    padding-bottom: 16px;
  }

  .gatsby-image-wrapper {
    vertical-align: middle;
  }

  .product-image {
    box-shadow: 0px 9px 19px rgba(0, 0, 0, 0.18),
      0px 4px 4px rgba(0, 0, 0, 0.25);
    position: relative;
    width: 100%;
  }

  .product p {
    padding: 10px;
  }

  @media (min-width: 1025px) {
    padding-top: 50px;
    min-height: 400px;
    .product {
      margin-left: 145px;
      text-align: left;
    }

    .product span {
      position: absolute;
      left: 24px;
      display: inline;
    }
    .product p {
      max-width: 38%;
      font-size: 24px;
      word-break: break-all;
    }

    .product h2 {
      border-bottom: 1px solid;
      border-width: 3px;
    }

    .product-image {
      box-shadow: 0px 9px 19px rgba(0, 0, 0, 0.18),
        0px 4px 4px rgba(0, 0, 0, 0.25);
      width: 50%;
      left: 47%;
      position: absolute;
    }
  }

  @media (min-width: 1440px) {
    padding-top: 50px;
    min-height: 500px;
    .product {
      margin-left: 145px;
      text-align: left;
    }

    .product span {
      position: absolute;
      left: 24px;
      display: inline;
    }
    .product p {
      max-width: 30%;
      font-size: 24px;
      word-break: break-all;
    }

    .product h2 {
      border-bottom: 1px solid;
      border-width: 3px;
    }

    .product-image {
      box-shadow: 0px 9px 19px rgba(0, 0, 0, 0.18),
        0px 4px 4px rgba(0, 0, 0, 0.25);
      width: 50%;
      left: 40%;
      position: absolute;
    }
  }

  .gatsby-image-wrapper {
    vertical-align: middle;
  }

  @media (min-width: 1680px) {
    height: 550px;
  }

  @media (min-width: 1920px) {
    height: 600px;
  }

  @media (min-width: 2500px) {
    height: 800px;
  }
`;

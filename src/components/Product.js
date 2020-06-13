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

  .product p {
    width: 100vw;
    text-align: left;
    font-size: 14px;
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
  }

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 50px;

    .product {
      margin-left: 145px;
      text-align: left;
      max-width: 1395px;
    }

    .product span {
      position: absolute;
      left: 24px;
      display: inline;
    }
    .product p {
      max-width: 50vw;
    }

    .product h2 {
      border-bottom: 1px solid;
    }

    .product-image {
      box-shadow: 0px 9px 19px rgba(0, 0, 0, 0.18),
        0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }

  .title-logo {
    padding-top: 5px;
  }

  .gatsby-image-wrapper {
    vertical-align: middle;
  }

  .product-image {
    box-shadow: 0px 9px 19px rgba(0, 0, 0, 0.18),
      0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

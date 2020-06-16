import React from "react";
import styled from "styled-components";
import Img from "gatsby-image/withIEPolyfill";
import { useStaticQuery, graphql } from "gatsby";

// import { theme } from "../styles";

const ProductCardNitra = ({ className, children }) => {
  const data = useStaticQuery(graphql`
    {
      singleProduct: allPrismicHomepage(filter: { lang: { eq: "cs-cz" } }) {
        nodes {
          data {
            oddil {
              sekce_polozka {
                document {
                  ... on PrismicOddilKarty {
                    data {
                      footer_image_text {
                        raw {
                          text
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
      <section className={className}>
        <div className="card-nitra">
          <div className="card-nitra-image-container">
            <div className="card-nitra-image">
              <Img
                fluid={
                  data.singleProduct.nodes[0].data.oddil[4].sekce_polozka
                    .document[0].data.foto.localFile.childImageSharp.fluid
                }
                objectFit="cover"
              />
            </div>
            <div className="card-nitra-text-body">
              {data.singleProduct.nodes[0] &&
              data.singleProduct.nodes[0].data.oddil[4].sekce_polozka
                .document[0].data.footer_image_text.raw ? (
                <>
                  {data.singleProduct.nodes[0].data.oddil[4].sekce_polozka.document[0].data.footer_image_text.raw.map(
                    (item, index) => {
                      return (
                        <div className="card-nitra-text">
                          <p key={index}>{item.text}</p>
                        </div>
                      );
                    }
                  )}
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="card-nitra-body">
            <div className="card-nitra-title">
              <h2>
                {
                  data.singleProduct.nodes[0].data.oddil[4].sekce_polozka
                    .document[0].data.nadpis.raw[0].text
                }
              </h2>
            </div>
            <div className="card-nitra-description">
              <p>
                {
                  data.singleProduct.nodes[0].data.oddil[4].sekce_polozka
                    .document[0].data.obsah.raw[0].text
                }
              </p>
            </div>
            <div className="card-nitra-text-mobile">
              {data.singleProduct.nodes[0] &&
              data.singleProduct.nodes[0].data.oddil[4].sekce_polozka
                .document[0].data.footer_image_text.raw ? (
                <>
                  {data.singleProduct.nodes[0].data.oddil[4].sekce_polozka.document[0].data.footer_image_text.raw.map(
                    (item, index) => {
                      return <p key={index}>{item.text}</p>;
                    }
                  )}
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </section>
      {children}
    </>
  );
};

export default styled(ProductCardNitra)`
  /* nitra card */

  text-align: center;

  .card-nitra-image {
    display: none;
  }

  .card-nitra-text {
    display: none;
  }

  .card-nitra-title {
    margin-top: 50px;
  }

  .card-nitra-description {
    padding: 10px;
  }

  .card-nitra-text-mobile {
    padding-bottom: 20px;
  }
  .card-nitra-text-mobile p {
    margin: 10px;
  }

  @media (min-width: 1025px) {
    .card-nitra {
      display: flex;
      margin-top: 100px;
      padding: 32px;
      margin-left: 75px;
      /* max-width: 1131px; */
    }
    .gatsby-image-wrapper {
      width: 400px;
      height: 300.25px;
    }
    .card-nitra-image {
      display: inline !important;
    }

    .card-nitra-title {
      margin-top: 0px;
      width: 80%;
    }

    .card-nitra-text-mobile {
      display: none;
    }

    .card-nitra-text {
      display: inline;
      text-align: left;
    }

    .card-nitra-text p {
      padding-left: 18px;
      margin-bottom: 0;
      font-size: 18px;
    }

    .card-nitra-body {
      padding-top: 10px;
      padding-left: 26px;
    }
    .card-nitra-image p {
      padding-left: 15px;
      font-size: 14px;
    }

    .card-nitra-title {
      text-align: left;
    }

    .card-nitra-description p {
      text-align: left;
      /* margin-right: 154px; */
      word-break: break-all;
      font-size: 24px;
      width: 80%;
    }
  }
`;

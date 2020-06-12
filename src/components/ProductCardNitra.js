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
            <div className="card-nitra-text">
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
          <div className="card-nitra-body">
            <div className="card-nitra-title">
              <h3>
                {
                  data.singleProduct.nodes[0].data.oddil[4].sekce_polozka
                    .document[0].data.nadpis.raw[0].text
                }
              </h3>
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

  @media (min-width: 993px) {
    .card-nitra-image {
      display: inline !important;
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
      font-size: 14px;
    }

    .card-nitra {
      display: grid;
      grid-template-columns: 1fr 2fr;
      margin-top: 100px;
      padding: 32px;
      max-width: 1131px;
    }

    .card-nitra-body {
      padding-top: 10px;
      padding-left: 10px;
    }
    .card-nitra-image p {
      padding-left: 15px;
      font-size: 14px;
    }

    .card-nitra-title {
      text-align: left;
    }

    .card-nitra-body p {
      text-align: left;
      margin-right: 154px;
      word-break: break-all;
    }
  }
`;

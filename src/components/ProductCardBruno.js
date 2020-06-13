import React from "react";
import styled from "styled-components";
import Img from "gatsby-image/withIEPolyfill";
import { useStaticQuery, graphql } from "gatsby";

// import { theme } from "../styles";

const ProductCardBruno = ({ className, children }) => {
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
        <div className="card-bruno">
          <div className="card-bruno-body">
            <div className="hide-in-mobile-view">
              <div className="card-bruno-title">
                {data.singleProduct.nodes[0] &&
                data.singleProduct.nodes[0].data.oddil[2].sekce_polozka
                  .document[0].data.nadpis.raw[0].text ? (
                  <h3>
                    {
                      data.singleProduct.nodes[0].data.oddil[2].sekce_polozka
                        .document[0].data.nadpis.raw[0].text
                    }
                  </h3>
                ) : (
                  ""
                )}
              </div>
              <div className="card-bruno-description">
                {data.singleProduct.nodes[0] &&
                data.singleProduct.nodes[0].data.oddil[2].sekce_polozka
                  .document[0].data.obsah.raw[0].text ? (
                  <p>
                    {
                      data.singleProduct.nodes[0].data.oddil[2].sekce_polozka
                        .document[0].data.obsah.raw[0].text
                    }
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="card-bruno-image-container">
            <div className="card-bruno-image">
              {data.singleProduct.nodes[0] &&
              data.singleProduct.nodes[0].data.oddil[2].sekce_polozka
                .document[0].data.foto.localFile.childImageSharp.fluid ? (
                <Img
                  fluid={
                    data.singleProduct.nodes[0].data.oddil[2].sekce_polozka
                      .document[0].data.foto.localFile.childImageSharp.fluid
                  }
                  objectFit="cover"
                />
              ) : (
                ""
              )}
            </div>
            <div className="hide-in-desktop-view">
              <div className="card-bruno-title">
                {data.singleProduct.nodes[0] &&
                data.singleProduct.nodes[0].data.oddil[2].sekce_polozka
                  .document[0].data.nadpis.raw[0].text ? (
                  <h3>
                    {
                      data.singleProduct.nodes[0].data.oddil[2].sekce_polozka
                        .document[0].data.nadpis.raw[0].text
                    }
                  </h3>
                ) : (
                  ""
                )}
              </div>
              <div className="card-bruno-description">
                {data.singleProduct.nodes[0] &&
                data.singleProduct.nodes[0].data.oddil[2].sekce_polozka
                  .document[0].data.obsah.raw[0].text ? (
                  <p>
                    {
                      data.singleProduct.nodes[0].data.oddil[2].sekce_polozka
                        .document[0].data.obsah.raw[0].text
                    }
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="card-bruno-text">
              {data.singleProduct.nodes[0] &&
              data.singleProduct.nodes[0].data.oddil[2].sekce_polozka
                .document[0].data.footer_image_text.raw ? (
                <>
                  {data.singleProduct.nodes[0].data.oddil[2].sekce_polozka.document[0].data.footer_image_text.raw.map(
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

export default styled(ProductCardBruno)`
  /* nitra card */
  display: flex;
  flex-direction: row-reverse;
  text-align: center;

  .hide-in-desktop-view {
    display: inline;
  }

  .hide-in-mobile-view {
    display: none;
  }

  .card-bruno-title {
    margin-top: 50px;
  }

  @media (min-width: 993px) {
    .card-bruno-image {
      display: inline !important;
    }

    .hide-in-desktop-view {
      display: none;
    }

    .hide-in-mobile-view {
      display: inline;
    }

    .card-bruno-text {
      display: inline;
      text-align: right;
    }

    .card-bruno-text p {
      padding-right: 18px;
      margin-bottom: 0;
      font-size: 14px;
    }

    .card-bruno-description {
      word-break: break-all;
    }

    .card-bruno {
      display: grid;
      grid-template-columns: 2fr 1fr;
      padding: 32px;
      /* max-width: 1131px; */
    }

    .card-bruno-body {
      padding-top: 10px;
      padding-right: 31px;
    }
    .card-bruno-image p {
      font-size: 14px;
    }

    .card-bruno-title {
      text-align: left;
    }

    .card-bruno-description p {
      text-align: left;
    }
  }
`;

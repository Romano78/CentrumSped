import React, { useState } from "react";
import styled from "styled-components";
import Img from "gatsby-image/withIEPolyfill";
import { useStaticQuery, graphql } from "gatsby";
import { theme } from "../styles";
import { FaSquareFull } from "react-icons/fa";

const BranchBruno = ({ className, children }) => {
  const data = useStaticQuery(graphql`
    {
      branch: allPrismicKontakty(filter: { lang: { eq: "cs-cz" } }) {
        nodes {
          data {
            kontakty_subtitle {
              raw {
                text
              }
            }
            kontakty_obsah {
              raw {
                text
              }
            }
            kontakty_list_title {
              raw {
                text
              }
            }
            kontakty_list {
              kontakty_image {
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              kontakty_item {
                raw {
                  text
                }
              }
            }
            kontakt_link {
              document {
                data {
                  kontakt__title {
                    raw {
                      text
                    }
                  }
                  kontakt_adresa {
                    raw {
                      text
                    }
                  }
                  kontakt_info {
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
  `);
  return (
    <section className={className}>
      <div className="branch-body-header">
        {data.branch.nodes[1] &&
        data.branch.nodes[1].data.kontakty_subtitle.raw[0].text ? (
          <h4>{data.branch.nodes[1].data.kontakty_subtitle.raw[0].text}</h4>
        ) : (
          ""
        )}
        {data.branch.nodes[1] &&
        data.branch.nodes[1].data.kontakty_obsah.raw[0].text ? (
          <p>{data.branch.nodes[1].data.kontakty_obsah.raw[0].text}</p>
        ) : (
          ""
        )}
      </div>
      <div className="branch-body-title">
        {data.branch.nodes[1] &&
        data.branch.nodes[1].data.kontakty_list_title ? (
          <h4>{data.branch.nodes[1].data.kontakty_list_title.raw[0].text}:</h4>
        ) : (
          ""
        )}
      </div>
      <div className="branch-body">
        <div className="branch-body-list">
          {data.branch.nodes[1] && data.branch.nodes[1].data.kontakty_list ? (
            <>
              {data.branch.nodes[1].data.kontakty_list.map((item, index) => {
                return (
                  <ol key={index}>
                    <span>
                      <FaSquareFull />
                    </span>
                    {item.kontakty_item.raw[0].text}
                  </ol>
                );
              })}
            </>
          ) : (
            ""
          )}
        </div>
        <div className="branch-body-img">
          {data.branch.nodes[1] &&
          data.branch.nodes[1].data.kontakty_list[0].kontakty_image ? (
            <Img
              fluid={
                data.branch.nodes[1].data.kontakty_list[0].kontakty_image
                  .localFile.childImageSharp.fluid
              }
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="branch-footer">
        {data.branch.nodes[1] &&
        data.branch.nodes[1].data.kontakt_link.document[0].data.kontakt__title
          .raw[0].text ? (
          <h4>
            {
              data.branch.nodes[1].data.kontakt_link.document[0].data
                .kontakt__title.raw[0].text
            }
          </h4>
        ) : (
          ""
        )}

        {data.branch.nodes[1] &&
        data.branch.nodes[1].data.kontakt_link.document[0].data.kontakt_adresa
          .raw[0].text ? (
          <p>
            {
              data.branch.nodes[1].data.kontakt_link.document[0].data
                .kontakt_adresa.raw[0].text
            }
          </p>
        ) : (
          ""
        )}

        {data.branch.nodes[1] &&
        data.branch.nodes[1].data.kontakt_link.document[0].data.kontakt_info
          .raw[0].text ? (
          <p>
            {
              data.branch.nodes[1].data.kontakt_link.document[0].data
                .kontakt_info.raw[0].text
            }
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="branch-list-border"></div>
      {children}
    </section>
  );
};

export default styled(BranchBruno)`
  background-color: ${theme.colors.primary};

  .branch-body-header {
    margin-left: 200px;
    padding-top: 30px;
  }

  .branch-body-header h4 {
    border-bottom: 1px solid white;
    border-width: 2.5px;
    padding-bottom: 4px;
    color: white;
    padding-top: 30x;
  }

  .branch-body-header p {
    width: 657px;
  }

  .branch-body-header p {
    color: white;
  }

  .branch-body-title {
    margin-left: 200px;
  }
  .branch-body-title h4 {
    color: white;
  }

  .branch-body-list {
    margin-right: 36px;
    color: white;
  }

  .branch-body-list span {
    padding-right: 4px;
    color: white;
    font-size: 12px;
  }

  .branch-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: 200px;
    color: white;
  }

  .branch-footer {
    margin-left: 200px;
    width: 300px;
  }

  .branch-footer h4 {
    color: white;
  }
  .branch-footer p {
    color: white;
  }

  .branch-body-img {
    position: relative;
    bottom: 39px;
    height: 348px;
  }

  .branch-list-border {
    border: 1px solid white;
    width: 247px;
    position: relative;
    bottom: 268px;
    left: 194px;
  }
`;

import React, { useState } from "react";
import styled from "styled-components";
import Img from "gatsby-image/withIEPolyfill";
import { useStaticQuery, graphql } from "gatsby";
import { theme } from "../styles";
import { FaSquareFull } from "react-icons/fa";

const BranchNitra = ({ className, children }) => {
  const data = useStaticQuery(graphql`
    {
      branch: allPrismicKontakty {
        nodes {
          data {
            kontakty_nadpis {
              raw {
                text
              }
            }
            kontakty_obsah {
              raw {
                text
              }
            }
            kontakty_subtitle {
              raw {
                text
              }
            }
            kontakty_list {
              kontakty_item {
                raw {
                  text
                }
              }
              kontakty_image {
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            kontakty_list_title {
              raw {
                text
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
        <h4>{data.branch.nodes[0].data.kontakty_subtitle.raw[0].text}</h4>
        <p>{data.branch.nodes[0].data.kontakty_obsah.raw[0].text}</p>
      </div>
      <div className="branch-body-title">
        <h4>{data.branch.nodes[0].data.kontakty_list_title.raw[0].text}</h4>
      </div>
      <div className="branch-body">
        <div className="branch-body-list">
          {data.branch.nodes[0].data.kontakty_list.map((item, index) => {
            return (
              <ol key={index}>
                <span>
                  <FaSquareFull />
                </span>
                {item.kontakty_item.raw[0].text}
              </ol>
            );
          })}
        </div>
        <div className="branch-body-img">
          <Img
            fluid={
              data.branch.nodes[0].data.kontakty_list[0].kontakty_image
                .localFile.childImageSharp.fluid
            }
          />
        </div>
      </div>
      <div className="branch-footer">
        <h4>
          {
            data.branch.nodes[0].data.kontakt_link.document[0].data
              .kontakt__title.raw[0].text
          }
        </h4>
        <p>
          {
            data.branch.nodes[0].data.kontakt_link.document[0].data
              .kontakt_adresa.raw[0].text
          }
        </p>
        <p>
          {
            data.branch.nodes[0].data.kontakt_link.document[0].data.kontakt_info
              .raw[0].text
          }
        </p>
      </div>

      <div className="branch-list-border"></div>
    </section>
  );
};

export default styled(BranchNitra)`
  .branch-body-header {
    margin-left: 200px;
    padding-top: 30px;
  }

  .branch-body-header h4 {
    border-bottom: 1px solid ${theme.colors.primary};
    border-width: 2.5px;
    padding-bottom: 4px;
    padding-top: 30x;
  }

  .branch-body-title {
    margin-left: 200px;
  }

  .branch-body-list {
    margin-right: 36px;
  }

  .branch-body-list span {
    padding-right: 4px;
    color: ${theme.colors.primary};
    font-size: 12px;
  }

  .branch-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: 200px;
  }

  .branch-footer {
    margin-left: 200px;
    width: 300px;
  }

  .branch-body-img {
    position: relative;
    bottom: 39px;
  }

  .branch-list-border {
    border: 1px solid ${theme.colors.primary};
    width: 247px;
    position: relative;
    bottom: 281px;
    left: 194px;
  }
`;

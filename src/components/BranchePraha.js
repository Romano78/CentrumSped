import React from "react";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";

import { useStaticQuery, graphql } from "gatsby";
import { theme } from "../styles";
import { FaSquareFull } from "react-icons/fa";
import logo from "../images/title-logo.svg";

const BranchePraha = ({ className, children }) => {
  const data = useStaticQuery(graphql`
    {
      branch: allPrismicKontakty(filter: { lang: { eq: "cs-cz" } }) {
        nodes {
          lang
          data {
            kontakty_list_title {
              raw {
                text
              }
            }
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
            kontakt_info {
              kontakt_obsah {
                raw {
                  text
                }
              }
            }
            kontakt_napsah {
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
            }
            kontakty_image_group {
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
          }
        }
      }
    }
  `);

  const settings = {
    infinite: true,
    fade: true,
    speed: 500,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 993,
        settings: {
          autoplay: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="smooth-scrolling" id="Kontakty"></div>
      <section className={className}>
        <div className="branch-header">
          <span className="title-logo">
            <img src={logo} alt="title-logo" />
          </span>
          {data.branch.nodes[2] &&
          data.branch.nodes[2].data.kontakty_nadpis.raw[0].text ? (
            <h2>{data.branch.nodes[2].data.kontakty_nadpis.raw[0].text}</h2>
          ) : (
            ""
          )}
        </div>
        <div className="branch-body-header">
          {data.branch.nodes[2] &&
          data.branch.nodes[2].data.kontakty_subtitle.raw[0].text ? (
            <h4>{data.branch.nodes[2].data.kontakty_subtitle.raw[0].text}</h4>
          ) : (
            ""
          )}
          {data.branch.nodes[2] &&
          data.branch.nodes[2].data.kontakty_obsah.raw[0].text ? (
            <p>{data.branch.nodes[2].data.kontakty_obsah.raw[0].text}</p>
          ) : (
            ""
          )}
        </div>
        <div className="branch-body">
          <div className="branch-body-list">
            <div className="branch-body-title">
              {data.branch.nodes[2] &&
              data.branch.nodes[2].data.kontakty_list_title.raw[0].text ? (
                <h4>
                  {data.branch.nodes[2].data.kontakty_list_title.raw[0].text}:
                </h4>
              ) : (
                ""
              )}
            </div>
            {data.branch.nodes[2] && data.branch.nodes[2].data.kontakty_list ? (
              <>
                {data.branch.nodes[2].data.kontakty_list.map((item, index) => {
                  return (
                    <ol key={index}>
                      <span className="branch-list-logo">
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
            <div className="branch-footer">
              <h4>{data.branch.nodes[2].data.kontakt_napsah.raw[0].text}</h4>
              <div>
                {data.branch.nodes[2].data.kontakt_info.map((item, index) => {
                  return <p>{item.kontakt_obsah.raw[0].text}</p>;
                })}
              </div>
            </div>
          </div>
          <div className="branch-body-img">
            <Slider {...settings}>
              {data.branch.nodes[2].data.kontakty_image_group.map(
                (item, index) => {
                  return (
                    <>
                      {console.log(
                        item.kontakty_image.localFile.childImageSharp.fluid
                      )}
                      <BackgroundImage
                        fluid={
                          item.kontakty_image.localFile.childImageSharp.fluid
                        }
                        imgStyle={{ objectFit: "contain" }}
                        className="image"
                      >
                        <div className="image-banner">
                          {data.branch.nodes[0] &&
                          data.branch.nodes[0].data.kontakt_napsah.raw[0]
                            .text ? (
                            <h4>
                              {
                                data.branch.nodes[0].data.kontakt_napsah.raw[0]
                                  .text
                              }
                            </h4>
                          ) : (
                            ""
                          )}

                          {data.branch.nodes[2] &&
                          data.branch.nodes[2].data.kontakt_info ? (
                            <>
                              <div>
                                {data.branch.nodes[2].data.kontakt_info.map(
                                  (item, index) => {
                                    return (
                                      <p>{item.kontakt_obsah.raw[0].text}</p>
                                    );
                                  }
                                )}
                              </div>
                            </>
                          ) : (
                            ""
                          )}
                        </div>
                      </BackgroundImage>
                    </>
                  );
                }
              )}
            </Slider>
          </div>
        </div>
        {children}
      </section>
    </>
  );
};

export default styled(BranchePraha)`
  text-align: center;

  .slick-next:before {
    content: none;
  }

  .slick-prev:before {
    content: none;
  }

  .branch-header {
    text-transform: uppercase;
    text-align: center;
    margin-top: 50px;
  }

  .branch-header h2 {
    border-bottom: 1px solid;
    border-width: 5px;
    letter-spacing: 2px;
    padding-bottom: 10px;
  }

  .branch-header span {
    display: none;
  }

  .branch-body-header {
    margin-left: 0px;
  }

  .branch-body-title {
    margin-left: 0px;
    text-align: left;
  }

  .branch-body-list {
    text-align: left;
    color: ${theme.colors.primary};
  }

  .image {
    width: 100%;
    height: 411px;
    background-position: center;
    background-size: cover;
    opacity: 1 !important;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  }

  .image-banner {
    width: 336px;
    text-align: center;
    margin: 0 auto;
    padding-top: 39px;
  }

  .image-banner h4 {
    color: white;
    border-bottom: 1px solid;
    border-width: 3px;
    padding-bottom: 10px;
  }

  .image-banner p {
    color: white;
    font-size: 24px !important;
  }

  .branch-list-logo {
    padding-right: 5px;
    font-size: 10px;
  }

  .branch-body-list {
    margin-left: 18px;
  }

  .branch-list-logo {
    font-size: 19px;
  }

  .branch-body-list ol {
    margin-left: 0;
  }

  .branch-footer {
    display: none;
  }

  @media (min-width: 993px) {
    .branch-header {
      margin-left: 145px;
      text-transform: uppercase;
      padding-bottom: 45px;
      margin-top: 410px;
      text-align: left;
    }
    .branch-body-img {
      opacity: 0.9;
      width: 688px;
      height: 402.12px;
    }

    .branch-header span {
      position: absolute;
      left: 24px;
      display: inline;
    }

    .title-logo {
      padding-top: 5px;
    }

    .branch-body-header {
      margin-left: 200px;
      text-align: left;
    }

    .branch-body-header h4 {
      border-bottom: 1px solid;
    }

    .branch-body {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .image {
      /* width: 100%;
      height: 402px; */
      background-position: center;
      background-size: cover;
      /* opacity: 1 !important; */
      box-shadow: 0px 9px 19px rgba(0, 0, 0, 0.18),
        0px 4px 4px rgba(0, 0, 0, 0.25);
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
    }

    .image-banner {
      display: none;
    }

    .branch-body-list {
      margin-left: 200px;
    }

    .branch-list-logo {
      padding-right: 5px;
      font-size: 10px;
    }

    .branch-body-list ol {
      font-size: 18px;
      margin-left: 0;
    }

    .branch-footer {
      width: 276px;
      display: block;
    }

    .branch-footer h4 {
      border-top: 1px solid;
      padding-top: 10px;
      border-width: 4px;
    }
  }
`;

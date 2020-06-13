import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import { Wrapper, Title } from "../components";
// import website from "../../config/website";
// import { LocaleContext } from "../components/Layout";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";
import Product from "../components/Product";
import ProductCards from "../components/ProductCards";
import ProductCardNitra from "../components/ProductCardNitra";
import ProductCardBruno from "../components/ProductCardBruno";
import About from "../components/About";
import BranchPraha from "../components/BranchePraha";
import BranchBruno from "../components/BranchBruno";
import Footer from "../components/Footer";
import BranchNitra from "../components/BranchNitra";
import Parteneri from "../components/Parteneri";
import { Link } from "gatsby";
import ScrollToLink from "../components/Links";

const Index = ({
  data: { homepage, social },
  pageContext: { locale },
  location,
}) => {
  return (
    <>
      <SEO pathname={location.pathname} locale={locale} />
      {/* <Header>
        <div className="nav-center">
          <div className="nav-header">
            {homepage.data.oddil[0] &&
            homepage.data.oddil[0].sekce_polozka.document[0].data.logo.localFile
              .publicURL ? (
              <img
                style={{ width: "550px" }}
                src={
                  homepage.data.oddil[0].sekce_polozka.document[0].data.logo
                    .localFile.publicURL
                }
              />
            ) : (
              ""
            )}
          </div>
          <div className="nav-link">
            <ScrollToLink></ScrollToLink>
          </div>
        </div>
      </Header> */}
      <StyledHero
        home="true"
        img={
          homepage.data.banner_image.localFile.childImageSharp.fluid
            ? homepage.data.banner_image.localFile.childImageSharp.fluid
            : ""
        }
      >
        <Banner
          title={
            homepage.data.title.raw[0].text
              ? homepage.data.title.raw[0].text
              : ""
          }
          info={
            homepage.data.body_image.raw[0].text
              ? homepage.data.body_image.raw[0].text
              : ""
          }
        ></Banner>
      </StyledHero>
      <Product></Product>
      <ProductCardNitra></ProductCardNitra>
      <ProductCardBruno></ProductCardBruno>
      <ProductCards></ProductCards>
      <About
      // title={
      //   homepage.data.oddil[3].sekce_polozka.document[0].data.nadpis.raw[0]
      //     .text
      //     ? homepage.data.oddil[3].sekce_polozka.document[0].data.nadpis
      //         .raw[0].text
      //     : ""
      // }
      // info={homepage.data.oddil[3].sekce_polozka.document[0].data.obsah.raw.map(
      //   (item, index) => {
      //     return <p key={index}>{item.text}</p>;
      //   }
      // )}
      // img={
      //   homepage.data.oddil[3].sekce_polozka.document[0].data.foto.localFile
      //     .childImageSharp.fixed
      //     ? homepage.data.oddil[3].sekce_polozka.document[0].data.foto
      //         .localFile.childImageSharp.fixed
      //     : ""
      // }
      ></About>
      <BranchPraha />
      <BranchBruno />
      <BranchNitra />
      <Parteneri />
      <Footer>
        <div className="footer">
          <div className="top-footer">
            <p>
              CENTRUMSPED s.r.o. Výstaviště 416, Bubeneč, 170 00 Praha 7 IČ:
              47124598 DIČ: CZ47124598 (VAT-TAX No., EORI No.)
            </p>
          </div>
          <div className="bottom-footer">
            <p> Právní upozornění</p>
            <p>©2020 CENTRUMSPED s.r.o. Všechna práva vyhrazena.</p>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    homepage: PropTypes.object.isRequired,
    social: PropTypes.object.isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query IndexQuery($locale: String!) {
    homepage: prismicHomepage(lang: { eq: $locale }) {
      data {
        oddil {
          sekce_polozka {
            document {
              ... on PrismicHeader {
                data {
                  links {
                    produkty {
                      raw {
                        text
                      }
                    }
                  }
                  logo {
                    localFile {
                      extension
                      publicURL
                    }
                  }
                }
              }
              ... on PrismicOddilKarty {
                data {
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
                        fixed(width: 400, height: 300) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                    }
                  }
                  footer_image_text {
                    raw {
                      text
                    }
                  }
                }
              }
              ... on PrismicProductSection {
                data {
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
                        fixed(width: 688, height: 400) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        title {
          raw {
            text
          }
        }
        body_image {
          raw {
            text
          }
        }
        banner_image {
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

    social: allPrismicHeroLinks(filter: { lang: { eq: $locale } }) {
      edges {
        node {
          data {
            body {
              primary {
                label {
                  text
                }
                link {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

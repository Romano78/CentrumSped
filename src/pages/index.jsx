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
import ProductSingleCard from "../components/ProductSingleCard";
import About from "../components/About";
import BranchPraha from "../components/BranchePraha";
import BranchSlovakia from "../components/BranchSlovakia";
import Footer from "../components/Footer";
import BranchNitra from "../components/BranchNitra";

const Hero = styled.header`
  display: flex;
  align-items: center;
  min-height: 100vh;
`;

const HeroInner = styled(Wrapper)`
  padding-top: 13rem;
  padding-bottom: 13rem;
  h1 {
    margin-bottom: 2rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    padding-top: 10rem;
    padding-bottom: 10rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
`;

const HeroText = styled.div`
  font-size: 1.7rem;
  line-height: 1.4;
  margin-bottom: 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    font-size: 1.4rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    font-size: 1.25rem;
  }
`;

// const Social = styled.ul`
//   list-style-type: none;
//   display: flex;
//   flex-wrap: wrap;
//   margin-left: 0;
//   font-family: "Source Sans Pro", -apple-system, "BlinkMacSystemFont",
//     "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif, "Apple Color Emoji",
//     "Segoe UI Emoji", "Segoe UI Symbol";
//   li {
//     display: inline;
//     &:not([data-name="social-entry-0"]) {
//       margin-left: 2.5rem;
//       @media (max-width: ${(props) => props.theme.breakpoints.s}) {
//         margin-left: 1.75rem;
//       }
//     }
//     a {
//       font-style: normal;
//       color: ${(props) => props.theme.colors.greyDark};
//       font-size: 1.333rem;
//       font-weight: 600;
//       &:hover,
//       &:focus {
//         color: ${(props) => props.theme.colors.primary};
//         text-decoration: none;
//       }
//       @media (max-width: ${(props) => props.theme.breakpoints.s}) {
//         font-size: 1.2rem;
//       }
//     }
//   }
// `;

const Index = ({
  data: { homepage, social },
  pageContext: { locale },
  location,
}) => {
  return (
    <>
      <SEO pathname={location.pathname} locale={locale} />
      <Header>
        <div className="nav-center">
          <div className="nav-header">
            <img
              style={{ width: "550px" }}
              src={
                homepage.data.oddil[0].sekce_polozka.document[0].data.logo
                  .localFile.publicURL
              }
            />
          </div>
          <div className="nav-link" invert="true">
            <a>PRODUKTY</a>
            <a> O NÁS</a>
            <a>KALENDÁŘ AKCÍ</a>
            <a>PARTNEŘI</a>
            <a>GALERIE</a>
            <a>KONTAKTY</a>
          </div>
        </div>
      </Header>
      <StyledHero
        home="true"
        img={homepage.data.banner_image.localFile.childImageSharp.fluid}
      >
        <Banner
          title={homepage.data.title.raw[0].text}
          info={homepage.data.body_image.raw[0].text}
        ></Banner>
      </StyledHero>
      <Product
        title={
          homepage.data.oddil[1].sekce_polozka.document[0].data.nadpis.raw[0]
            .text
        }
        description={
          homepage.data.oddil[1].sekce_polozka.document[0].data.obsah.raw[0]
            .text
        }
        img={
          homepage.data.oddil[1].sekce_polozka.document[0].data.foto.localFile
            .childImageSharp.fixed
        }
      ></Product>
      <ProductSingleCard
        title1={
          homepage.data.oddil[4].sekce_polozka.document[0].data.nadpis.raw[0]
            .text
        }
        title2={
          homepage.data.oddil[2].sekce_polozka.document[0].data.nadpis.raw[0]
            .text
        }
        description1={
          homepage.data.oddil[4].sekce_polozka.document[0].data.obsah.raw[0]
            .text
        }
        description2={
          homepage.data.oddil[2].sekce_polozka.document[0].data.obsah.raw[0]
            .text
        }
        img1={
          homepage.data.oddil[4].sekce_polozka.document[0].data.foto.localFile
            .childImageSharp.fixed
        }
        img2={
          homepage.data.oddil[2].sekce_polozka.document[0].data.foto.localFile
            .childImageSharp.fixed
        }
        cardFooterText1={
          homepage.data.oddil[4].sekce_polozka.document[0].data
            .footer_image_text.raw[0].text
        }
        cardFooterText2={
          homepage.data.oddil[2].sekce_polozka.document[0].data
            .footer_image_text.raw[0].text
        }
      ></ProductSingleCard>
      <ProductCards></ProductCards>
      <About
        title={
          homepage.data.oddil[3].sekce_polozka.document[0].data.nadpis.raw[0]
            .text
        }
        info={
          homepage.data.oddil[3].sekce_polozka.document[0].data.obsah.raw[0]
            .text
        }
        img={
          homepage.data.oddil[3].sekce_polozka.document[0].data.foto.localFile
            .childImageSharp.fixed
        }
      ></About>
      <BranchPraha />
      <BranchSlovakia />
      <BranchNitra />
      <Footer></Footer>
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
                    galerie {
                      id
                    }
                    kontakty {
                      id
                    }
                    o_nas {
                      id
                    }
                    partneri {
                      id
                    }
                    produkty {
                      id
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

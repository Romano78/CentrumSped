import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import { Wrapper, Title } from "../components";
// import website from "../../config/website";
// import { LocaleContext } from "../components/Layout";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Img from "gatsby-image";

const Hero = styled.header`
  background-color: ${(props) => props.theme.colors.greyLight};
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
            <Img
              fixed={
                homepage.data.oddil[0].sekce_polozka.document[0].data.logo
                  .localFile.childImageSharp.fixed
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
      <Hero>
        <HeroInner></HeroInner>
      </Hero>
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
                      childImageSharp {
                        fixed {
                          ...GatsbyImageSharpFixed_withWebp_tracedSVG
                        }
                      }
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
                        fixed {
                          ...GatsbyImageSharpFixed
                        }
                      }
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
                        fixed {
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

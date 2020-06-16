import React from "react";
import styled from "styled-components";
import Img from "gatsby-image/withIEPolyfill";
import { useStaticQuery, graphql } from "gatsby";
import { theme } from "../styles";
import logo from "../images/title-logo.svg";

const Parteneri = ({ className, children }) => {
  const data = useStaticQuery(graphql`
    {
      parteneri: allPrismicPartneri(filter: { lang: { eq: "cs-cz" } }) {
        nodes {
          data {
            partneri_nadpis {
              raw {
                text
              }
            }
            partneri_list {
              partneri_logo {
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
  `);
  return (
    <>
      <div
        className="smooth-scrolling"
        id="Partneři"
        styles={{ paddingTop: "30px" }}
      ></div>

      <section className={className} id="Partneři">
        <div className="parteneri-header">
          <span className="title-logo">
            <img src={logo} alt="title-logo" />
          </span>
          <h2>{data.parteneri.nodes[0].data.partneri_nadpis.raw[0].text}</h2>
        </div>
        <div className="parteneri-body">
          <div className="parteneri-img">
            {data.parteneri.nodes[0].data.partneri_list.map((item, index) => {
              return (
                <div key={index} className="parteneri-image-list">
                  <Img
                    fixed={item.partneri_logo.localFile.childImageSharp.fixed}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default styled(Parteneri)`
  .parteneri-header {
    text-align: center;
    margin-top: 50px;
  }

  .parteneri-img {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 100px;
    align-items: center;
  }

  .parteneri-header h2 {
    border-bottom: 1px solid;
    border-width: 5px;
    padding-bottom: 10px;
  }

  .parteneri-header span {
    display: none;
  }

  .parteneri-body {
    text-align: center;
    margin-bottom: 100px;
    margin-top: 50px;
  }

  @media (min-width: 1025px) {
    .parteneri-header {
      margin-left: 145px;
      margin-top: 60px;
      margin-bottom: 0px;
      text-align: left;
    }

    .title-logo {
      padding-top: 5px;
    }

    .parteneri-header span {
      position: absolute;
      left: 24px;
    }

    .parteneri-header h2 {
      letter-spacing: 2px;
    }

    .parteneri-body {
      margin: 0 auto;
      padding: 116px;
      margin-top: -55px;
    }

    .parteneri-img {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      text-align: center;
      grid-row-gap: 40px;
      align-items: center;
      margin-bottom: 0px;
    }
  }
`;

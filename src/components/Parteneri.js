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
    <section className={className} id="parteneri">
      <div className="parteneri-header">
        <span className="title-logo">
          <img src={logo} alt="title-logo" />
        </span>
        <h2>{data.parteneri.nodes[0].data.partneri_nadpis.raw[0].text}</h2>
      </div>
      <div className="parteneri-img">
        {data.parteneri.nodes[0].data.partneri_list.map((item, index) => {
          return (
            <div key={index} className="parteneri-image-list">
              <Img fixed={item.partneri_logo.localFile.childImageSharp.fixed} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default styled(Parteneri)`
  .parteneri-header {
    margin-left: 145px;
    border-bottom: 1px solid ${theme.colors.primary};
    margin-top: 60px;
    margin-bottom: 0px;
  }

  .title-logo {
    padding-top: 5px;
  }

  .parteneri-header span {
    position: absolute;
    left: 24px;
  }

  .parteneri-img {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    text-align: center;
    grid-row-gap: 40px;
    align-items: center;
    margin-top: -71px;
    margin-bottom: 0px;
    padding: 208px;
  }
`;

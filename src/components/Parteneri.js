import React from "react";
import styled from "styled-components";
import Img from "gatsby-image/withIEPolyfill";
import { useStaticQuery, graphql } from "gatsby";
import { theme } from "../styles";

const Parteneri = ({ className, children }) => {
  const data = useStaticQuery(graphql`
    {
      parteneri: allPrismicPartneri {
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
    margin-left: 131px;
    border-bottom: 1px solid ${theme.colors.primary};
    margin-top: 60px;
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

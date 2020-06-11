import React from "react";
import styled from "styled-components";
import Img from "gatsby-image/withIEPolyfill";
// import { theme } from "../styles";

const ProductSingleCard = ({
  className,
  children,
  img1,
  img2,
  title1,
  title2,
  description1,
  description2,
  cardFooterText1,
  cardFooterText2,
}) => {
  return (
    <>
      <section className={className}>
        <div className="card-nitra">
          <div className="card-nitra-image-container">
            <div className="card-nitra-image">
              <Img fixed={img1} objectFit="cover" />
            </div>
            <div className="card-nitra-text">
              <p>{cardFooterText1}</p>
            </div>
          </div>
          <div className="card-nitra-body">
            <div className="card-nitra-title">
              <h3>{title1}</h3>
            </div>
            <div className="card-nitra-description">
              <p>{description1}</p>
            </div>
          </div>
        </div>
      </section>
      <section className={className}>
        <div className="card-bruno">
          <div className="card-bruno-image-container">
            <div className="card-bruno-image">
              <Img fixed={img2} objectFit="cover" />
            </div>
            <div className="card-bruno-text">
              <p>{cardFooterText2}</p>
            </div>
          </div>
          <div className="card-bruno-body">
            <div className="card-bruno-title">
              <h3>{title2}</h3>
            </div>
            <div className="card-bruno-description">
              <p>{description2}</p>
            </div>
          </div>
        </div>
      </section>
      {children}
    </>
  );
};

export default styled(ProductSingleCard)`
  /* nitra card */

  .card-nitra {
    display: flex;
    margin-top: 100px;
    padding: 32px;
    width: 1279px;
  }

  .card-nitra-image p {
    padding-left: 15px;
    font-size: 14px;
  }

  .card-nitra-body p {
    text-align: left;
    margin-right: 154px;
  }
  .card-nitra-description {
    width: 800px;
  }

  .card-nitra-text {
    width: 400px;
    padding-left: 18px;
    margin-top: -3px;
  }

  /* bruno-card */

  .card-bruno-body {
    padding-right: 18px;
  }

  .card-bruno-body p {
    margin-left: 154px;
  }
  .card-bruno-image p {
    padding-right: 15px;
    font-size: 14px;
  }

  .card-bruno h3 {
    text-align: right;
  }
  .card-bruno p {
    text-align: right;
  }
  .card-bruno {
    display: flex;
    flex-direction: row-reverse;
    display: flex;
    margin-top: 100px;
    padding: 32px;
    width: 100%;
    margin-top: 0px;
  }
  .card-bruno-text p {
    width: 400px;
    padding-top: 15px;
  }

  .gatsby-image-wrapper {
    vertical-align: middle;
  }

  .card-bruno-image {
    box-shadow: 0px 9px 19px rgba(0, 0, 0, 0.18),
      0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 400px;
    margin-right: 40px;
  }

  .card-bruno-description {
    width: 800px;
  }
`;

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
        <div className="card">
          <div className="card-image">
            <Img fixed={img1} />
            <p>{cardFooterText1}</p>
          </div>
          <div className="card-body">
            <div className="card-title">
              <h3>{title1}</h3>
            </div>
            <div className="card-description">
              <p>{description1}</p>
            </div>
          </div>
        </div>
      </section>
      <section className={className}>
        <div className="card-2">
          <div className="card-image-2">
            <Img fixed={img2} />
            <p>{cardFooterText2}</p>
          </div>
          <div className="card-body-2">
            <div className="card-title-2">
              <h3>{title2}</h3>
            </div>
            <div className="card-description-2">
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
  .card {
    display: flex;
    margin-top: 100px;
    padding: 32px;
    width: 1279px;
  }

  .card-image p {
    padding-left: 15px;
    font-size: 14px;
  }

  .card-image-2 p {
    padding-right: 15px;
    font-size: 14px;
  }

  .card-body p {
    text-align: left;
    margin-right: 154px;
  }

  .card-body-2 {
    padding-right: 18px;
  }

  .card-body-2 p {
    margin-left: 154px;
  }

  .card-2 h3 {
    text-align: right;
  }
  .card-2 p {
    text-align: right;
  }
  .card-2 {
    display: flex;
    flex-direction: row-reverse;
    display: flex;
    margin-top: 100px;
    padding: 32px;
    width: 100%;
    margin-top: 0px;
  }

  .card-description-2 {
    width: 800px;
  }
  .card-description-1 {
    width: 800px;
  }
`;

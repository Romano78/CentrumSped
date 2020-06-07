import React from "react";
import styled from "styled-components";
import Img from "gatsby-image/withIEPolyfill";
// import { theme } from "../styles";

const ProductSingleCard = ({
  className,
  children,
  img1,
  img2,
  title,
  description,
  cardFooterText,
}) => {
  return (
    <>
      <section className={className}>
        <div className="card">
          <div className="card-image">
            <Img fixed={img1} />
            <p>{cardFooterText}</p>
          </div>
          <div className="card-body">
            <div className="card-title">
              <h3>{title}</h3>
            </div>
            <div className="card-description">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </section>
      <section className={className}>
        <div className="card-2">
          <div className="card-image">
            <Img fixed={img2} />
            <p>{cardFooterText}</p>
          </div>
          <div className="card-body">
            <div className="card-title">
              <h3>{title}</h3>
            </div>
            <div className="card-description">
              <p>{description}</p>
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

  .card-body h3 {
    text-align: center;
  }

  .card-body p {
    text-align: left;
  }

  .card-2 {
    display: flex;
    flex-direction: row-reverse;
    display: flex;
    margin-top: 100px;
    padding: 32px;
    width: 1279px;
    margin-top: 0px;
  }
`;

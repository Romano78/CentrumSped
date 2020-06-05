import React from "react";
import styled from "styled-components";
import Img from "gatsby-image/withIEPolyfill";
import { theme } from "../styles";

const ProductCards = ({ className, children, img, title, description }) => {
  return (
    <>
      <section className={className}>
        <div className="card">
          <div className="card-image">
            <Img fluid={img} />
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
        <div className="card">
          <div className="card-image">
            <Img fluid={img} />
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
        <div className="card">
          <div className="card-image">
            <Img fluid={img} />
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

export default styled(ProductCards)`
  grid-gap: 116px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 164px;
  margin-top: -40px;
  text-align: center;

  .card-title {
    border-bottom: 1px solid ${theme.colors.primary};
  }
`;

import React, { Children } from "react";
import styled from "styled-components";
import Img from "gatsby-image/withIEPolyfill";
import logo from "../images/title-logo.svg";

const Product = ({ className, img, children, title, description }) => {
  return (
    <div className={className} id="producty">
      <div className="product">
        <span className="title-logo">
          <img src={logo} alt="title-logo" />
        </span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="product-image">
        <Img fixed={img} />
      </div>
      {children}
    </div>
  );
};

export default styled(Product)`
  display: flex;

  .product {
    margin-left: 145px;
  }

  .product span {
    position: absolute;
    left: 24px;
  }

  .title-logo {
    padding-top: 5px;
  }

  .product h2 {
    border-bottom: 1px solid;
    letter-spacing: 2px;
  }

  .gatsby-image-wrapper {
    vertical-align: middle;
  }

  .product-image {
    position: relative;
    top: 12px;
  }

  .product-image {
    box-shadow: 0px 9px 19px rgba(0, 0, 0, 0.18),
      0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 320px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

import React, { Children } from "react";
import styled from "styled-components";
import Img from "gatsby-image/withIEPolyfill";
import logo from "../images/titleDeco.png";

const Product = ({ className, img, children, title, description }) => {
  return (
    <div className={className} id="product">
      <div className="product">
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
    margin-left: 131px;
  }

  .product h2 {
    border-bottom: 1px solid;
    padding-bottom: 10px;
  }

  .product-image {
    position: relative;
    top: 12px;
  }

  img {
    box-shadow: 0px 9px 19px rgba(0, 0, 0, 0.18),
      0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 320px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

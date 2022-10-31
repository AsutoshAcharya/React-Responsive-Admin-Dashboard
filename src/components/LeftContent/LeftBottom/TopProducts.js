import React from "react";
import "./TopProducts.css";
const TopProducts = (props) => {
  return (
    <div className="prods">
      <div>
        <img src={props.products.image} alt="" className="prodImage" />
      </div>
      <div className="sales">
        <div>
          <i className="i">{props.products.head}</i>
          <br />
          <div>{props.products.price}</div>
        </div>
        <div>{props.products.sale}</div>
      </div>
    </div>
  );
};

export default TopProducts;

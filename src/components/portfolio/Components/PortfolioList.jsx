import React from "react";

import "./portfolioList.scss";

const PortfolioList = (props) => {
  return (
    <li
      className={
        props.selected === props.item.id
          ? "portfolioList active"
          : "portfolioList"
      }
      onClick={() => props.setSelected(props.item.id)}
    >
      {props.item.title}
    </li>
  );
};

export default PortfolioList;

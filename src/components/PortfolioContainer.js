import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio }) {
  const displayPortfolio = portfolio.map((stock => <Stock key={stock.id} stock={stock}/>))

  return (
    <div>
      <h2>My Portfolio</h2>
      {displayPortfolio}
    </div>
  );
}

export default PortfolioContainer;

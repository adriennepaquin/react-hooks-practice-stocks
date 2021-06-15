import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handleBuy }) {

  const displayStocks = stocks.map((stock => <Stock handleStockClick={handleBuy} key={stock.id} stock={stock}/>))

  return (
    <div>
      <h2>Stocks</h2>
      {displayStocks}
    </div>
  );
}

export default StockContainer;

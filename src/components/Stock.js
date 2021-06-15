import React from "react";

function Stock({ stock, handleClick }) {

  function handleClick(){
    handleStockClick(stock)
  }

  return (
    <div>
      <div className="card" >
        <div onClick={handleClick} className="card-body" className={stock.type} id={stock.id}>
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.ticker}: {stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;

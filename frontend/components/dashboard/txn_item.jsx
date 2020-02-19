import React from 'react';

export const TxnItem = ({ 
    month, 
    day, 
    action, 
    amtCrypto, 
    amtDollar, 
    symbol, 
    name }) => {
  return (
    <tr>
      <td className="col-2-content">
        <div className="col-2-content-inner">
          <div className="curr-logo-splash">{month}</div>
          <div className="table-crypto-name">{day}</div>
        </div>
      </td>
      <td className="col-3-content">{action} {name}</td>
      <td className="col-4-content">{amtCrypto.toFixed(4)} {symbol.toUpperCase()}</td>
      <td className="col-5-content">{`$${amtDollar.toFixed(2)}`}</td>
    </tr>
  );
}
import React from 'react';

export const TxnItem = ({ 
    month, 
    day, 
    action, 
    amtCrypto, 
    amtDollar, 
    symbol, 
    name,
    logo }) => {
  return (
    <tr>
      <td className="col-2-content">
        <div className="col-2-content-inner">
          <div>{month}</div>
          <div className="table-crypto-name">{day}</div>
        </div>
      </td>
      <td className="curr-logo-splash"><img src={`${logo}`} alt=""/></td>
      <td className="col-3-content">{action} {name}</td>
      <td className="col-4-content">{amtCrypto.toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 })} {symbol.toUpperCase()}</td>
      <td className="col-5-content">{`$${amtDollar.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</td>
    </tr>
  );
}
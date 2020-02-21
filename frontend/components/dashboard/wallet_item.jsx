import React from 'react'

export const WalletItem = ({wallet, balance, logo}) => {
  const name = logo.name
  const img = logo.logo
  const sym = wallet.currency.toUpperCase()
  return (
    <tr>
      <td className="col-2-content">
        <div className="col-2-content-inner">
          <img className="curr-logo-splash" src={`${img}`} />
          <div className="table-crypto-name">{name}</div>
        </div>
      </td>
      <td className="col-3-content">
        {wallet.balance} {sym}
      </td>
      <td className="col-4-content">{`$${balance.value.toLocaleString(
        undefined,
        { minimumFractionDigits: 2, maximumFractionDigits: 2 }
      )}`}</td>
    </tr>
  );
}
import React from 'react'

export const Wallets = ({wallets}) => {
  debugger
  return (
    <div>
      <div className="wallets-container">
        <ul>
          {Object.values(wallets).map(wallet => {
            return (
              <li>
              {wallet.currency}
              {wallet.balance}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
    );
  }
import React from 'react'

export const Wallets = ({ balances, wallets }) => {
  return (
    <div>
      <div className="wallets-container">
        <ul>
          {Object.values(wallets).map(wallet => {
            return (
              <li>
                
              </li>
            );
          })}
        </ul>
      </div>
    </div>
    );
  }
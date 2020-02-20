import React from 'react';
import {WalletItem} from './wallet_item';
import TxnContainer from './txns_container';

export const Wallets = ({ balances, wallets, logos, total }) => {
  return (
    <div className="wallet-txn-container">
      <div className="wallet-content-container">
      <div>
        <h2 className="portfolio-header">Your Portfolio</h2>
      </div>
        <div className="wallet-table-container">
          <table className="wallet-table">
            <tbody>
              {Object.values(wallets).map((wallet, index) => (
                <WalletItem
                  key={index}
                  id={index}
                  wallet={wallet}
                  balance={balances[index]}
                  logo={logos[wallet.currency]}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className="wallet-footer">
          <span>Total Balance: ${total}</span>
        </div>
        <div className="spacer"></div>
      </div>
      <div className="txn-container">
        <TxnContainer />
      </div>
    </div>
  );
  }
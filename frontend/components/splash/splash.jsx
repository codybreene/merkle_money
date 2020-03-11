import React from 'react';
import PricesTruncContainer from './prices_trunc_container';
import NavbarContainer from '../nav/nav_bar_container';

class Splash extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="app-container">
        <div className="splash-backdrop">
          <NavbarContainer />
          <div className="splash-top-section">
            <div className="splash-container-1">
              <div className="splash-inner-1">
                <span className="splash-content-1">
                  Buy and sell cryptocurrency
                </span>
                <h4 className="splash-content-2">
                  Merkle Money is the easiest place to buy, sell, and manage
                  your cryptocurrency portfolio.
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="prices-trunc-container">
          <div className="prices-backdrop"></div>
          <PricesTruncContainer />
        </div>
        <h1 className="merkle-text-1">
          Plant your cryptocurrency seedling, and watch it grow
          into a merkle money portfolio. 
        </h1>
        <div className="merkle-text-2">
          A merkle tree is a data structure that allows for the
          verification of cryptocurrency transactions. Each leaf represents
          a transaction, while each branch represents a hashed set of 
          transactions.
        </div>
        <div className="tree-img-container">
          <img className="tree-img" src={tree} alt=""/>
        </div>
        <div className="footer">
          <a href="https://github.com/codybreene">
            <img src="" alt=""/>
          </a>
          <a href="https://www.linkedin.com/in/cody-breene-35409635/">
            <img src="" alt=""/>
          </a>
          <a href="https://angel.co/cody-breene">
            <img src="" alt=""/>
          </a>
        </div>
      </div>
    );
  }
}

export default Splash;
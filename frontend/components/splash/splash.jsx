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
      </div>
    )
  }
}

export default Splash;
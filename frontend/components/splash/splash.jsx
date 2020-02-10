import React from 'react';
import PricesTrunc from './prices_trunc';

class Splash extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>SPLASH</h1>
        <PricesTrunc />
      </div>
    )
  }
}

export default Splash;
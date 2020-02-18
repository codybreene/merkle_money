import React from "react";
import PriceIndexContainer from './price_index_container';
import NavBarContainer from '../nav/nav_bar_container';

const PricePage = (props) => {
  return(
    <div>
      <NavBarContainer />
      <PriceIndexContainer />
    </div>
  )
}

export default PricePage

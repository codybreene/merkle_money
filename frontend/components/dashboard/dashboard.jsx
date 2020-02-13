import React from 'react';
import NavbarContainer from '../nav/nav_bar_container';
import WalletsContainer from './wallets_container';
import ChartContainer from './portfolio_chart_container';

const Dashboard = (props) => {
  return(
    <div>
      <NavbarContainer />
      <ChartContainer />
      <WalletsContainer />
    </div>
  )
}

export default Dashboard;
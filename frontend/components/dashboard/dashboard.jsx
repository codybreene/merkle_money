import React from 'react';
import { render } from 'react-dom';
import NavbarContainer from '../nav/nav_bar_container';
import WalletsContainer from './wallets_container';
import Chart from './portfolio_chart';

const Dashboard = () => {
  return(
    <div>
      <NavbarContainer />
      <Chart />
      <WalletsContainer />
    </div>
  )
}

export default Dashboard;
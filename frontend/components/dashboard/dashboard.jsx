import React from 'react';
import NavbarContainer from '../nav/nav_bar_container';
import ChartContainer from './portfolio_chart_container';

const Dashboard = (props) => {
  return(
    <div>
      <NavbarContainer />
      <ChartContainer />
    </div>
  )
}

export default Dashboard;
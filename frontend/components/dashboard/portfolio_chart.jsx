import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class Chart extends React.Component {
  render() {
    const options = {
      series: [
        {
          name: "Profit",
          data: [10, 20, 33, 27, 37, 66, 78]
        }
      ]
    };
    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    )
  }
};

export default Chart

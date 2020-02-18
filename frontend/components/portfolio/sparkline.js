import React from 'react';
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';

export const SparkLine = (props) => {

  const data = []

  props.prices.map((price, index) => {
    data.push({
      time: index,
      price: price
    })
  })

  return (
      <LineChart data={data} width={40} height={30}>
        <Tooltip />
        <Line
          type="natural"
          dataKey="price"
          stroke="gray"
          dot={false}
          strokeWidth={1.2}
        />
      </LineChart>
  );
}
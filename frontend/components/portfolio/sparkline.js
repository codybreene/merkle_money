import React from 'react';
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';

export const SparkLine = (props) => {

  const data = []

  props.prices.map((price, index) => {
    if(index%5===0) {
      data.push({
        time: index,
        price: price
      })
    }
  })

  return (
      <LineChart data={data} width={60} height={40}>
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

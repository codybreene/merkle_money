import React from 'react';
import { LineChart, Line, Tooltip } from 'recharts';

export const SparkLine = (props) => {

  const data = []

  props.prices.map((price, index) => {
    data.push({
      time: index,
      price: price
    })
  })

  return (
    <LineChart width={100} height={70} data={data}>
      <Tooltip />
      <Line type="natural" dataKey="price" stroke="rgba(17, 51, 83, 0.3)" dot={false} strokeWidth={1.7} />
    </LineChart>
  )
}
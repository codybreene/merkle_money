import React from 'react';
import { Pie, PieChart, Cell, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const Portfolio = ({ data }) => {
  return (
    <PieChart width={800} height={400}>
      <Pie
        data={data}
        cx={120}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        // label={
        //   ({
        //     cx,
        //     cy,
        //     midAngle,
        //     innerRadius,
        //     outerRadius,
        //     value,
        //     index
        //   }) => {
        //     console.log("handling label?");
        //     const RADIAN = Math.PI / 180;
        //     // eslint-disable-next-line
        //     const radius = 25 + innerRadius + (outerRadius - innerRadius);
        //     // eslint-disable-next-line
        //     const x = cx + radius * Math.cos(-midAngle * RADIAN);
        //     // eslint-disable-next-line
        //     const y = cy + radius * Math.sin(-midAngle * RADIAN);

        //     return (
        //       <text
        //         x={x}
        //         y={y}
        //         fill="#8884d8"
        //         textAnchor={x > cx ? "start" : "end"}
        //         dominantBaseline="central"
        //       >
        //         {data[index].name}
        //     </text>
        //     );
        //   }
        // }
      >
        {
          data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
        }
      </Pie>
        <Legend
          // payload={
          //   data.map(
          //     item => ({
          //       id: item.name,
          //       type: "square",
          //       value: `${item.name} (${item.value}%)`,
          //     })
          //   )
          // }
        />
    </PieChart>
  );
}
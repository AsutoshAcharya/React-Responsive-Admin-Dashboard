import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";
const BottomGraph = () => {
  const data = [
    {
      name: "0",
      current: 1000,
      previous: 30,
      amt: 10,
    },
    {
      name: "1",
      current: 3000,
      previous: 1398,
      amt: 2210,
    },
    {
      name: "2",
      current: 2000,
      previous: 9800,
      amt: 2290,
    },
    {
      name: "3",
      current: 2780,
      previous: 3908,
      amt: 2000,
    },
    {
      name: "4",
      current: 1890,
      previous: 4800,
      amt: 2181,
    },
    {
      name: "5",
      current: 2390,
      previous: 3800,
      amt: 2500,
    },
    {
      name: "6",
      current: 3490,
      previous: 4300,
      amt: 2100,
    },
  ];
  return (
    <ResponsiveContainer width={280} height="60%">
      <AreaChart
        width={100}
        height={250}
        data={data}
        margin={{ top: 0, right: 30, left:0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="current"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="previous"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default BottomGraph;

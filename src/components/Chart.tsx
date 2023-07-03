// 'use client';
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis,
} from 'recharts';

const data = [
  {
    name: 'Page A', uv: 400, pv: 2400, amt: 2400,
  },
  {
    name: 'Page b', uv: 400, pv: 2400, amt: 2400,
  },
  {
    name: 'Page c', uv: 400, pv: 2400, amt: 2400,
  },
  {
    name: 'Page d', uv: 400, pv: 2400, amt: 2400,
  },
  {
    name: 'Page e', uv: 400, pv: 2400, amt: 2400,
  },
  {
    name: 'Page f', uv: 400, pv: 2400, amt: 2400,
  },
];

function Charts() {
  return (
    <LineChart width={600} height={300} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>

  );
}

export default Charts;

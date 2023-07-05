'use client';

import {
  LineChart, Line, Legend, Tooltip, ResponsiveContainer, CartesianGrid, XAxis, YAxis,
} from 'recharts';

const data = [
  {
    name: 'MongoDb',
    student: 11,
    fees: 120,
  },
  {
    name: 'Javascript',
    student: 15,
    fees: 12,
  },
  {
    name: 'PHP',
    student: 5,
    fees: 10,
  },
  {
    name: 'Java',
    student: 10,
    fees: 5,
  },
  {
    name: 'C#',
    student: 9,
    fees: 4,
  },
  {
    name: 'C++',
    student: 10,
    fees: 8,
  },
];

function Charts() {
  return (
    <div>
      <ResponsiveContainer width="100%" height="100%" aspect={2}>
        <LineChart data={data} margin={{ right: 300 }}>
          <CartesianGrid />
          <XAxis dataKey="name" interval="preserveStartEnd" />
          <YAxis />
          <Legend />
          <Tooltip />
          <Line dataKey="student" stroke="black" activeDot={{ r: 8 }} />
          <Line dataKey="fees" stroke="red" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Charts;

import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';


export const Barchart = ({}) => {
    const data = [
//   { name: 'Jan', expense: 4000 },
//   { name: 'Feb', expense: 3000 },
//   { name: 'Mar', expense: 2000 },
//   { name: 'Apr', expense: 2780 },
//   { name: 'May', expense: 1890 },
];

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="expense" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};


import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

export const Barchart = ({ expenseList = [] }) => {
  // Utility to format month from date string
  const getMonthName = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString('default', { month: 'short' }); // Jan, Feb, etc.
  };

  // Group and sum expenses by month
  const monthlyData = expenseList.reduce((acc, exp) => {
    const month = getMonthName(exp.date);
    const found = acc.find(item => item.name === month);
    if (found) {
      found.expense += exp.amount;
    } else {
      acc.push({ name: month, expense: exp.amount });
    }
    return acc;
  }, []);

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={monthlyData}>
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
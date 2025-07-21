import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

// Color palette
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28EFF', '#FF6F91', '#00B8A9'];

export const Piechart = ({ expenses = [] }) => {
  const categoryTotals = expenses.reduce((acc, expense) => {
    const { category, amount } = expense;
    if (!acc[category]) acc[category] = 0;
    acc[category] += parseFloat(amount);
    return acc;
  }, {});

  const data = Object.entries(categoryTotals).map(([name, value]) => ({
    name,
    value
  }));

  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <h3>Expense Breakdown</h3>
      {data.length === 0 ? (
        <p>No expense data yet.</p>
      ) : (
        <PieChart width={400} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      )}
    </div>
  );
};



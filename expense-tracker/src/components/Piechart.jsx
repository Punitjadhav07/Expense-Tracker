import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Color palette per category
const CATEGORY_COLORS = {
  'Travel': '#0088FE',
  'Groceries': '#FFB6C1',
  'Food & Drinks': '#FFBB28',
  'Health': '#00C49F',
  'Other': '#8884d8'
};

export const Piechart = ({ expenses = [] }) => {
  // Summing up category-wise totals
  const categoryTotals = expenses.reduce((acc, expense) => {
    const { category, amount } = expense;
    if (!acc[category]) acc[category] = 0;
    acc[category] += parseFloat(amount);
    return acc;
  }, {});

  // Convert to recharts format
  const data = Object.entries(categoryTotals).map(([name, value]) => ({
    name,
    value
  }));

  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      {data.length === 0 ? (
        <p>No expense data yet.</p>
      ) : (
        <div style={{ position: 'relative', width: '500px', height: '300px', margin: '0 auto' }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={110}
                paddingAngle={5}
                labelLine={true}
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
                dataKey="value"
              >
                {data.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={CATEGORY_COLORS[data[index].name] || CATEGORY_COLORS['Other']}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>

          {/* Centered Label */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '1.2rem',
            fontWeight: '600',
            color: '#FF8C00'
          }}>
            All
          </div>
        </div>
      )}
    </div>
  );
};
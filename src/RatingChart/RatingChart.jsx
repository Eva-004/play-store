import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const RatingChart = ({app}) => {
   const data = app.ratings;
    return (
        <div className='space-y-4'>
           <h3 className='text-[#001931] text-2xl font-semibold '>Rating</h3>
            <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          layout="vertical" 
          margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis type="number" />
          <YAxis dataKey="name" type="category" reversed />

          <Bar
            dataKey="count"
            fill="#f97316" 
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
        </div>
    );
};

export default RatingChart;
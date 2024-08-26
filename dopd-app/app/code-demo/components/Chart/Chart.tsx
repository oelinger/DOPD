import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// Define the props type
interface ChartProps {
    data: Array<{
        Zeit: string;
        'Zeit (UTC)': string;
        'Zählerstand (m³)': number;
        'Volumenstrom (m³/hour)': number;
    }>;
}

const Chart: React.FC<ChartProps> = ({ data }) => {
    return (
        <ResponsiveContainer width='100%' height={400}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray='5 5' />
                <XAxis dataKey='Zeit' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type='monotone' dataKey='Zählerstand (m³)' stroke='#00ff00' />
                <Line type='monotone' dataKey='Volumenstrom (m³/hour)' stroke='#82ca9d' />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default Chart;

import { useContext } from 'react';
import { TimelineContext } from '../context/TimelineContext';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const Stats = () => {
  const { events } = useContext(TimelineContext);
  const callCount = events.filter(e => e.type === 'call').length;
  const textCount = events.filter(e => e.type === 'text').length;
  const videoCount = events.filter(e => e.type === 'video').length;

  const data = [
    { name: 'Call', value: callCount, color: '#3b82f6' },
    { name: 'Text', value: textCount, color: '#10b981' },
    { name: 'Video', value: videoCount, color: '#ef4444' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Friendship Analytics</h1>
      <div className="bg-white p-6 rounded-2xl shadow max-w-md mx-auto">
        <PieChart width={400} height={300}>
          <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={100} dataKey="value" label>
            {data.map((entry, idx) => <Cell key={idx} fill={entry.color} />)}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default Stats;
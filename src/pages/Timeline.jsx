import { useContext, useState } from 'react';
import { TimelineContext } from '../context/TimelineContext';
import { FaPhone, FaSms, FaVideo, FaFilter } from 'react-icons/fa';

const Timeline = () => {
  const { events } = useContext(TimelineContext);
  const [filter, setFilter] = useState('all');

  const filteredEvents = filter === 'all' ? events : events.filter(e => e.type === filter);

  const getIcon = (type) => {
    if (type === 'call') return <FaPhone className="text-blue-500" />;
    if (type === 'text') return <FaSms className="text-green-500" />;
    return <FaVideo className="text-red-500" />;
  };

  const formatTitle = (type, name) => {
    const cap = type.charAt(0).toUpperCase() + type.slice(1);
    return `${cap} with ${name}`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Timeline</h1>
      <div className="flex items-center gap-2 mb-6">
        <FaFilter className="text-gray-500" />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border px-3 py-1 bg-white"
        >
          <option value="all">All</option>
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
        </select>
      </div>
      <div className="space-y-3">
        {filteredEvents.length === 0 && <p>No interactions yet.</p>}
        {filteredEvents.map(event => (
          <div key={event.id} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow">
            {getIcon(event.type)}
            <div>
              <p className="font-semibold">{formatTitle(event.type, event.friendName)}</p>
              <p className="text-sm text-gray-500">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
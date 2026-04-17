import { FaUsers, FaCheckCircle, FaExclamationTriangle, FaPhoneAlt } from 'react-icons/fa';

const SummaryCards = ({ friends }) => {
  const totalFriends = friends.length;
  const onTrack = friends.filter(f => f.status === 'on-track').length;
  const needAttention = friends.filter(f => f.status === 'overdue' || f.status === 'almost due').length;
  const interactionsThisMonth = 12;

  const cards = [
    {
      title: 'Total Friends',
      value: totalFriends,
      icon: <FaUsers className="text-blue-500 text-3xl" />,
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      title: 'On Track',
      value: onTrack,
      icon: <FaCheckCircle className="text-green-500 text-3xl" />,
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      title: 'Need Attention',
      value: needAttention,
      icon: <FaExclamationTriangle className="text-red-500 text-3xl" />,
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    {
      title: 'Interactions This Month',
      value: interactionsThisMonth,
      icon: <FaPhoneAlt className="text-purple-500 text-3xl" />,
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={`${card.bgColor} border ${card.borderColor} rounded-2xl p-5 shadow-sm hover:shadow-md transition duration-200 flex items-center justify-between`}
        >
          <div>
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">{card.title}</p>
            <p className="text-3xl font-bold text-gray-800 mt-1">{card.value}</p>
          </div>
          <div className="p-3 rounded-full bg-white shadow-sm">
            {card.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
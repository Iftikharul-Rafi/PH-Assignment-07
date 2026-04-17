import { useNavigate } from 'react-router-dom';

const statusColors = {
  'overdue': 'bg-red-500',
  'almost due': 'bg-yellow-400 text-gray-800',
  'on-track': 'bg-green-500'
};

const FriendCard = ({ friend }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="bg-white w-64 rounded-2xl shadow-md border border-gray-200 p-5 cursor-pointer hover:shadow-lg transition duration-200 text-center"
    >

      <img
        src={friend.picture}
        alt="profile"
        className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
      />

      <h3 className="font-semibold text-gray-800 text-lg">
        {friend.name}
      </h3>

      <p className="text-gray-400 text-sm mt-1">
        {friend.days_since_contact}d ago
      </p>


      <div className="mt-2 flex justify-center gap-2 flex-wrap">
        {friend.tags.slice(0, 1).map(tag => (
          <span
            key={tag}
            className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full"
          >
            {tag.toUpperCase()}
          </span>
        ))}
      </div>


      <div className="mt-3">
        <span
          className={`${statusColors[friend.status]} text-xs px-3 py-1 rounded-full font-medium`}
        >
          {friend.status}
        </span>
      </div>
    </div>
  );
};

export default FriendCard;
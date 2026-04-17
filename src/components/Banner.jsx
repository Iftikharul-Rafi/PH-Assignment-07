import { FaUserPlus } from 'react-icons/fa';

const Banner = ({ onAddFriend }) => {
  return (
    <div className="text-center py-10 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl mb-8">
      <h1 className="text-4xl font-bold text-gray-800">Friends to keep close in your life</h1>
      <p className="text-gray-600 mt-2 max-w-xl mx-auto">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the
        relationships that matter most.      </p>
      <button
        onClick={onAddFriend}
        className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-full flex items-center gap-2 mx-auto hover:bg-blue-700 transition"
      >
        <FaUserPlus /> Add a Friend
      </button>
    </div>
  );
};

export default Banner;
import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import friendsData from '../data/friends.json';
import { TimelineContext } from '../context/TimelineContext';
import toast from 'react-hot-toast';
import { FaPhone, FaSms, FaVideo, FaEdit, FaClock, FaArchive, FaTrash } from 'react-icons/fa';

const statusColors = {
  'overdue': 'text-red-600 bg-red-100',
  'almost due': 'text-yellow-600 bg-yellow-100',
  'on-track': 'text-green-600 bg-green-100'
};

const FriendDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [friend, setFriend] = useState(null);
  const { addEvent } = useContext(TimelineContext);

  useEffect(() => {
    const found = friendsData.find(f => f.id === parseInt(id));
    if (!found) navigate('/404');
    else setFriend(found);
  }, [id, navigate]);

  if (!friend) return null;

  const handleCheckIn = (type) => {
    const typeMap = { call: 'Call', text: 'Text', video: 'Video' };
    addEvent(type, friend.name);
    toast.success(`${typeMap[type]} with ${friend.name} logged!`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* বাম কলাম */}
        <div className="bg-white rounded-2xl shadow p-6">
          <img src={friend.picture} alt={friend.name} className="w-32 h-32 rounded-full mx-auto object-cover" />
          <h2 className="text-2xl font-bold text-center mt-3">{friend.name}</h2>
          <div className={`text-center w-fit mx-auto px-3 py-1 rounded-full text-sm font-semibold ${statusColors[friend.status]}`}>
            {friend.status}
          </div>
          <div className="flex flex-wrap gap-2 justify-center mt-3">
            {friend.tags.map(tag => <span key={tag} className="bg-gray-200 px-2 py-1 rounded-full text-xs">{tag}</span>)}
          </div>
          <p className="text-gray-600 mt-4 text-center">{friend.bio}</p>
          <p className="text-center text-sm text-gray-500 mt-2"> {friend.email}</p>
          <div className="flex flex-col gap-3 mt-6">
            <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 flex items-center justify-center gap-2 w-full transition">
              <FaClock /> Snooze 2 Weeks
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 flex items-center justify-center gap-2 w-full transition">
              <FaArchive /> Archive
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 flex items-center justify-center gap-2 w-full transition">
              <FaTrash /> Delete
            </button>
        </div>
        </div>


        <div className="space-y-6">

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-xl text-center"><p className="text-sm">Days Since Contact</p><p className="text-2xl font-bold">{friend.days_since_contact}</p></div>
            <div className="bg-green-50 p-4 rounded-xl text-center"><p className="text-sm">Goal (Days)</p><p className="text-2xl font-bold">{friend.goal}</p></div>
            <div className="bg-purple-50 p-4 rounded-xl text-center"><p className="text-sm">Next Due</p><p className="text-sm font-semibold">{friend.next_due_date}</p></div>
          </div>


          <div className="bg-white shadow rounded-xl p-4 flex justify-between items-center">
            <div><p className="text-gray-500">Relationship Goal</p><p className="font-semibold">Connect every {friend.goal} days</p></div>
            <button className="text-black-600 bg-gray-200 px-2 py-2">Edit</button>
          </div>


          <div className="bg-white shadow rounded-xl p-4">
            <h3 className="font-bold mb-3">Quick Check-In</h3>
            <div className="flex gap-4 justify-around">
              <button onClick={() => handleCheckIn('call')} className="bg-blue-100 p-3 rounded-full text-blue-700"><FaPhone size={24} /></button>
              <button onClick={() => handleCheckIn('text')} className="bg-green-100 p-3 rounded-full text-green-700"><FaSms size={24} /></button>
              <button onClick={() => handleCheckIn('video')} className="bg-red-100 p-3 rounded-full text-red-700"><FaVideo size={24} /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default FriendDetail;
import { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import SummaryCards from '../components/SummaryCards';
import FriendCard from '../components/FriendCard';
import LoadingSpinner from '../components/LoadingSpinner';
import friendsData from '../data/friends.json';
import toast from 'react-hot-toast';

const Home = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setFriends(friendsData);
      setLoading(false);
    }, 1000);
  }, []);

  const handleAddFriend = () => {
    toast.success('Add friend feature coming soon!');
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="container mx-auto px-4 py-6">
      <Banner onAddFriend={handleAddFriend} />
      <SummaryCards friends={friends} />
      <h2 className="text-2xl font-bold mb-4">Your Friends</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {friends.map(friend => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default Home;..
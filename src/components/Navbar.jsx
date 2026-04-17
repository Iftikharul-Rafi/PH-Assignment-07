import { NavLink } from 'react-router-dom';
import { FaHome, FaCalendarAlt, FaChartBar } from 'react-icons/fa';

const Navbar = () => {
  const navItems = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/timeline', label: 'Timeline', icon: <FaCalendarAlt /> },
    { path: '/stats', label: 'Stats', icon: <FaChartBar /> }
  ];

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center flex-wrap">
      <div className="text-2xl font-bold text-blue-800">KeenKeeper</div>
      <div className="flex gap-6">
        {navItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-full transition ${
                isActive ? 'bg-green-600 text-white' : 'text-gray-700 hover:bg-blue-100'
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;..
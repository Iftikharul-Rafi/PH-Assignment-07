import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="text-center py-20">
    <h1 className="text-6xl font-bold text-gray-800">404</h1>
    <p className="text-gray-600 mt-2">Page not found</p>
    <Link to="/" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-full">Go Home</Link>
  </div>
);

export default NotFound;..
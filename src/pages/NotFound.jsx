import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-orange-500 mb-4">404</h1>
      <h2 className="text-2xl mb-6">Page Not Found</h2>
      <p className="mb-6 text-gray-600">
        Sorry, the page you are looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="bg-orange-500 text-white py-2 px-6 rounded-full text-lg font-semibold"
      >
        Back to Home
      </Link>
    </div>
  );
}

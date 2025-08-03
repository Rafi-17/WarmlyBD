import { Link } from "react-router-dom";
import { FaSadTear } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-cyan-100 min-h-screen flex items-center justify-center px-4">
      <div className="text-center bg-white/80 backdrop-blur-md rounded-xl shadow-xl px-10 py-12 max-w-lg w-full">
        <div className="text-6xl text-sky-600 mb-4 flex justify-center">
          <FaSadTear />
        </div>
        <h1 className="text-4xl pb-3 font-extrabold bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent mb-2">
          Oops! Page not found
        </h1>
        <p className="text-gray-700 text-sm mb-6">
          The page you are looking for doesn't exist or was moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold px-6 py-2 rounded-md shadow-md transition duration-300 hover:scale-105"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

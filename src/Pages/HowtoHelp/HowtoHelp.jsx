import { Link } from "react-router-dom";

const HowtoHelp = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-cyan-100 min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent mb-4">
          How You Can Help
        </h2>
        <p className="text-gray-700 mb-8 text-sm md:text-base">
          Every small effort counts. Join us in spreading warmth and kindness this winter. Here are a few simple ways you can make a difference.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-md p-6 text-left">
            <h3 className="text-xl font-semibold text-sky-700 mb-2">🧥 Donate Winter Clothes</h3>
            <p className="text-gray-700 text-sm">Give your gently used jackets, blankets, and sweaters a new life by donating them to someone in need.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-md p-6 text-left">
            <h3 className="text-xl font-semibold text-sky-700 mb-2">💵 Contribute Financially</h3>
            <p className="text-gray-700 text-sm">Help us buy new winter clothing and cover distribution costs through your generous donation.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-md p-6 text-left">
            <h3 className="text-xl font-semibold text-sky-700 mb-2">📢 Spread the Word</h3>
            <p className="text-gray-700 text-sm">Share our mission on social media and tell your friends and family. Awareness makes a huge impact.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-md p-6 text-left">
            <h3 className="text-xl font-semibold text-sky-700 mb-2">🤝 Volunteer with Us</h3>
            <p className="text-gray-700 text-sm">Join our volunteer team and help us organize and distribute the donations across communities.</p>
          </div>
        </div>

        <div className="mt-10">
          <Link
            to={"/donationCampaigns"}
            className="inline-block bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold px-6 py-2 rounded-md shadow-md transition duration-300 hover:scale-105"
          >
            Start Donating
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowtoHelp;

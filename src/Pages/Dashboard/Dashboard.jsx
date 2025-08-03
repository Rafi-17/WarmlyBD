import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-cyan-100 flex items-start mt-3 mb-10 md:my-14 lg:my-20 justify-center p-4">
      <div className=" backdrop-blur-md rounded-xl shadow-xl p-8 w-full text-center max-w-2xl mx-auto mt-6">
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent mb-12 text-center break-words">
        Welcome, {user?.displayName || "User"}
        </h2>

        <div className="flex flex-col items-center gap-4 mb-10">
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover object-top border-4 border-sky-300 shadow-md"
            />
          ) : (
            <div className=" flex items-center justify-center">
              <FaUserCircle className="w-24 h-24 text-gray-400 bg-gray-200 text-4xl rounded-full p-1"></FaUserCircle>
            </div>
          )}

          <div className="text-left max-w-md mx-auto w-full mt-8">
            <p className="mb-1">
                <span className="text-sky-900 text-xl font-bold mr-1">Name:</span>
                <span className="text-gray-700 mb-2 text-lg">{user?.displayName || "Not provided"}</span>
            </p>
            <p>
                <span className="text-sky-900 text-xl font-bold mr-1">Email:</span>
                <span className="text-gray-700 mb-2 text-lg">{user?.email}</span>
            </p>
          </div>
        </div>

        <Link to={"/updateProfile"}><button className="bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold px-6 py-2 rounded-md shadow-md transition duration-300 hover:scale-105">Update Profile</button></Link>
      </div>
    </div>
  );
};

export default Dashboard;

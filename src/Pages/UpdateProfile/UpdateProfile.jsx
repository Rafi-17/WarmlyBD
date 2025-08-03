import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";

const UpdateProfile = () => {

    const {setUser, updateUserProfile} = useContext(AuthContext);
    const navigate= useNavigate();
    const handleUpdate=e=>{
        e.preventDefault();
        const name= e.target.name.value;
        const photo= e.target.photo.value;
        const updateObj = {
            displayName: name,
        };
        if (photo.trim() !== "") {
            updateObj.photoURL = photo;
        }
        updateUserProfile(updateObj)
        .then(async () => {
            // Wait for Firebase to reload the user with updated info
            // await result.user.reload();
            
            setUser({ ...auth.currentUser });
    
            // Fetch the updated user from auth
            // const updatedUser = auth.currentUser;
    
            // setUser(updatedUser); // ✅ Now this has updated photoURL
            Swal.fire({
            title: "Success!",
            text: "Profile Updated Successfully",
            icon: "success",
            confirmButtonText: "Ok"
            });
            navigate("/dashboard");
        })
        .catch(error => {
            console.log("Error updating profile:", error.message);
        });
    }

  return (
    <div className="bg-gradient-to-b from-blue-50 to-cyan-100 flex items-center my-6 md:my-10 justify-center px-4 py-12">
      <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl px-8 py-10 md:py-20 w-full max-w-md">
        <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-sky-600 to-blue-500 bg-clip-text text-transparent mb-6 text-center">
          Update Your Profile
        </h2>

        <form onSubmit={handleUpdate} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="text-sky-900 font-medium block mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
            //   value={name}
            //   onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your name"
              className="bg-gradient-to-r from-white to-cyan-100 border border-sky-300 placeholder:text-cyan-500 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
          </div>

          <div>
            <label
              htmlFor="photo"
              className="text-sky-900 font-medium block mb-1"
            >
              Photo URL
            </label>
            <input
              type="text"
              id="photo"
              name="photo"
            //   value={photoURL}
            //   onChange={(e) => setPhotoURL(e.target.value)}
              
              placeholder="Enter photo URL"
              className="bg-gradient-to-r from-white to-cyan-100 border border-sky-300 placeholder:text-cyan-500 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
          </div>

          {/* {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          {success && <p className="text-green-500 text-sm mt-1">{success}</p>} */}

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold px-6 py-2 rounded-md shadow-md transition duration-300 hover:scale-105 w-full"
          >
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;

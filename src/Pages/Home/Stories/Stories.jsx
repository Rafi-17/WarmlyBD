import React from "react";
import img1 from "../../../assets/Stories/1.png"
import img2 from "../../../assets/Stories/2.png"
import img3 from "../../../assets/Stories/3.png"

const Stories = () => {
  return (
    <section className="px-4 md:px-16 py-16">
      <h2 className="text-3xl pb-3 md:text-4xl font-extrabold text-center bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent mb-4">
        Inspiring Stories
      </h2>
      <p className="text-center text-sky-900 text-sm mb-10 max-w-2xl mx-auto">
        Read how WarmlyBD is making a difference — from volunteers to those
        receiving winter aid.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-6 flex flex-col justify-between">
          <img
            src={img1}
            alt="Ayesha, Rajshahi"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <p className="text-gray-700 italic mb-4">
            “Last winter was tough, but the coat I received from WarmlyBD helped
            me survive the cold nights.”
          </p>
          <p className="text-sm text-blue-500 font-medium">
            — Ayesha, Rajshahi
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-6 flex flex-col justify-between">
          <img
            src={img2}
            alt="Arman, Dhaka"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <p className="text-gray-700 italic mb-4">
            “Volunteering with WarmlyBD opened my eyes to how much a simple act
            of kindness can change lives.”
          </p>
          <p className="text-sm text-blue-500 font-medium">— Arman, Dhaka</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-6 flex flex-col justify-between">
          <img
            src={img3}
            alt="Rahi, Sylhet"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <p className="text-gray-700 italic mb-4">
            “I didn't expect anyone to care. But WarmlyBD came with warm clothes
            just when I needed them most.”
          </p>
          <p className="text-sm text-blue-500 font-medium">— Shahi, Sylhet</p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <button className="bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold px-6 py-2 rounded-md shadow-md transition duration-300 hover:scale-105">
          Read More Stories
        </button>
      </div>
    </section>
  );
};

export default Stories;

import React from "react";

const Stories = () => {
  return (
    <section className="px-4 md:px-16 py-16 bg-white/70 backdrop-blur-md">
      <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-sky-600 to-blue-500 bg-clip-text text-transparent drop-shadow-sm mb-10">
        Inspiring Stories
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Story Card 1 */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-cyan-100 hover:shadow-lg transition duration-300">
          <img
            src="/images/story1.jpg"
            alt="Story 1"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <p className="text-gray-700 italic mb-2">
            “Thanks to WarmlyBD, my children finally had warm clothes during
            winter.”
          </p>
          <span className="text-sm text-blue-500 font-medium">
            — A mother from Rangpur
          </span>
        </div>

        {/* Story Card 2 */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-cyan-100 hover:shadow-lg transition duration-300">
          <img
            src="/images/story2.jpg"
            alt="Story 2"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <p className="text-gray-700 italic mb-2">
            “I was shivering at night — someone brought me a jacket through this
            amazing initiative.”
          </p>
          <span className="text-sm text-blue-500 font-medium">
            — Elderly man, Dhaka streets
          </span>
        </div>

        {/* Story Card 3 */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-cyan-100 hover:shadow-lg transition duration-300">
          <img
            src="/images/story3.jpg"
            alt="Story 3"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <p className="text-gray-700 italic mb-2">
            “I thought no one cared. But WarmlyBD volunteers proved me wrong.”
          </p>
          <span className="text-sm text-blue-500 font-medium">
            — A student in Sylhet
          </span>
        </div>
      </div>

      <div className="text-center mt-10">
        <button className="bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold px-6 py-2 rounded-md shadow-md transition hover:scale-105">
          Read More Stories
        </button>
      </div>
    </section>
  );
};

export default Stories;

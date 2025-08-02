import React from "react";
import bannerImg from '../../../assets/Banner/bannerImg.png'

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-white to-blue-100 px-6 md:px-16 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10">
      
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-sky-600 to-blue-500 bg-clip-text text-transparent drop-shadow-md mb-6">
          Spread Warmth, Save Lives
        </h1>
        <p className="text-sky-900 text-lg md:text-xl mb-8">
          Donate your unused winter clothes to help those in need across
          Bangladesh.
        </p>
        <button className="bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold px-6 py-3 rounded-md shadow-md transition duration-300 hover:scale-105">
          Donate Now
        </button>
      </div>

      {/* Right side: Banner Image */}
      <div className="max-w-md w-full">
        <img
          src={bannerImg} // Replace with actual image
          alt="Winter Donation"
          className="w-full h-[300px] md:h-auto rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Banner;

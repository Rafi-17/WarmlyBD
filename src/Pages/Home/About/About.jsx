import React from "react";

const About = () => {
  return (
    <section className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl mx-6 md:mx-16 my-16 px-8 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent mb-4 drop-shadow">
          Our Mission
        </h2>
        <p className="text-gray-700 text-lg md:text-xl mb-6">
          At <span className="font-semibold text-blue-500">WarmlyBD</span>, we
          believe that no one should suffer the cold. Every year, countless
          people in Bangladesh face winter without proper clothing. Our mission
          is to bridge the gap by connecting donors with those in need.
        </p>
        <p className="text-gray-700 text-base md:text-lg">
          You can help by donating your unused winter clothes — jackets,
          sweaters, blankets, and more. Together, we can spread warmth and bring
          smiles across the country, one piece of clothing at a time.
        </p>
      </div>
    </section>
  );
};

export default About;

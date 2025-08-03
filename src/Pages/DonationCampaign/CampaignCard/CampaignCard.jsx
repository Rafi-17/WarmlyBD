// DonationCampaign/CampaignCard/CampaignCard.jsx

import React from "react";
import { Link } from "react-router-dom";
import { IoLocation } from "react-icons/io5";

const CampaignCard = ({ campaign }) => {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={campaign.image}
        alt={campaign.title}
        className="w-full h-48 object-cover"
      />
     <div className="p-4">
        <h3 className="text-xl font-bold text-sky-900 mb-2">{campaign.title}</h3>
        <p className="text-sm text-gray-700 mb-2">{campaign.description}</p>
        <p className="text-sm font-medium text-blue-600 flex items-center gap-1"><span className="text-sky-600 transition-transform duration-200 group-hover:scale-110"><IoLocation /></span> {campaign.division}</p>
        <div className="mt-4">
          <Link to={`/donation-details/${campaign.id}`}>
            <button className="bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold px-4 py-2 rounded-md shadow-md transition-transform hover:scale-105">
              Donate Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;

// DonationCampaign/DonationCampaign.jsx

import React, { useEffect, useState } from "react";
import CampaignCard from "../CampaignCard/CampaignCard";

const DonationCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch('donationData.json')
    .then(res=>res.json())
    .then(data=>setCampaigns(data))
  }, []);

  return (
    <section className="bg-gradient-to-b from-blue-50 to-cyan-100 min-h-screen px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl pb-3 font-extrabold bg-gradient-to-r from-sky-600 to-blue-500 bg-clip-text text-transparent drop-shadow-sm text-center mb-10">
          Ongoing Donation Campaigns
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign}></CampaignCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonationCampaign;

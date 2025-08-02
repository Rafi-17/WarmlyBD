import React, { useEffect, useState } from "react";
import { IoLocation } from "react-icons/io5";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const DonationDetails = () => {
    const [itemType, setItemType]=useState("default");
    const campaigns= useLoaderData();
    const {id}= useParams();
    // console.log(campaigns,id);
    const campaign= campaigns.find(camp=>camp.id===parseInt(id));

    const handleSubmit=e=>{
      e.preventDefault();
      Swal.fire({
        icon: 'success',
        title: 'Thank you!',
        text: 'We will reach your destination soon',
        confirmButtonColor: '#3b82f6', // Tailwind blue-500
      });

    }
    console.log(itemType);
    const handleSelect=e=>{
      setItemType(e.target.value);
    }

  return (
    <div className=" mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto rounded-xl shadow-lg p-6 bg-white/80 backdrop-blur-md">
        <img
          src={campaign?.image}
          className="rounded-xl w-full h-[250px] md:h-[350px] lg:h-[400px] object-cover mb-4"
        />
        <h2 className="text-3xl font-bold text-sky-700 mb-2">
          {campaign.title}
        </h2>
        <p className="text-gray-700 mb-2">{campaign.description}</p>
        <p className="text-sm text-sky-900">
          <IoLocation className="inline text-blue-600" /> {campaign.division}
        </p>
        <p className="text-sm text-gray-600">
          Status: <span className="font-semibold">{campaign.status}</span>
        </p>
        <p className="text-sm text-gray-600">
          Contact: <span className="font-semibold">{campaign.contactinfo}</span>
        </p>
      </div>

      {/* Donation Form Section */}
      <section>
        <h3 className="text-2xl md:text-4xl font-bold text-sky-900 mb-4 text-center mt-12">Complete Your Donation</h3>
        <form
        onSubmit={handleSubmit}
          className="mt-8 bg-white/80 backdrop-blur-md rounded-xl shadow-xl px-8 py-10">
      <input  type="number" min={1} name="quantity" placeholder="Quantity of Items" required className="bg-gradient-to-r from-white to-cyan-100 border border-sky-300 px-4 py-2 rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-300" />
         
      <select name="itemType" onChange={handleSelect} required className={`bg-gradient-to-r from-white to-cyan-100 border border-sky-300 px-4 py-2 rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-300 ${itemType==='default' ? 'text-gray-600' : 'text-black'}`}>
        <option value="default">Select Item type</option>
        <option value="Jacket">Jacket</option>
        <option value="Sweater">Sweater</option>
        <option value="Blanket">Blanket</option>
        <option value="Gloves">Gloves</option>
        <option value="Scarf">Scarf</option>
        <option value="Cap">Cap</option>
        <option value="Socks">Socks</option>
        <option value="Other">Other (please specify)</option>
      </select>

      {itemType === "Other" && (
        <input
          type="text"
          name="customItem"
          placeholder="Please specify the item"
          
          className="mb-4 bg-gradient-to-r from-white to-cyan-100 border border-sky-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-cyan-300"
          required
        />
      )}
      

      <input type="text" name="pickupLocation" placeholder="Pickup Location" required className="bg-gradient-to-r from-white to-cyan-100 border border-sky-300 px-4 py-2 rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-300" />

      <textarea name="notes" rows={5} placeholder="Additional Notes (optional)" className="bg-gradient-to-r from-white to-cyan-100 border border-sky-300 px-4 py-2 rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-300" />

      <button type="submit" className="justify-center flex mx-auto bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold px-6 py-2 rounded-md shadow-md transition duration-300 hover:scale-105">Submit Donation</button>
    </form>

      </section>
    </div>
  );
};

export default DonationDetails;

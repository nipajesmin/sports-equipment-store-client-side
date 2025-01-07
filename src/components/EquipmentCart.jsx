import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip"; // Correct import for React Tooltip

const EquipmentCart = () => {
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    fetch('https://sports-equipment-store-server-side.vercel.app/addEquipments')
      .then((res) => res.json())
      .then((data) => setEquipments(data.slice(0, 8)))  // Limiting to 8 items
      .catch((err) => console.error("Error fetching equipment data:", err));
  }, []);

  return (
    <div className="w-11/12 mx-auto mt-10">
      <h2 className="text-4xl font-extrabold text-center text-black mb-10">Product Section</h2>
      <p className="text-center text-gray-600 text-lg mb-10 pr-10 pl-10">
        Explore our wide range of high-quality sports equipment designed to enhance your performance and elevate your game. Find the perfect gear for every sport and every level.
      </p>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {equipments.map((equipment) => (
          <div
            key={equipment._id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div className="h-48 w-full flex items-center justify-center bg-gray-100">
              <img
                src={equipment.image}
                alt={equipment.name}
                className="max-h-full max-w-full object-contain"
                data-tooltip-id={`tooltip-${equipment._id}`} // Unique tooltip ID for each item
                data-tooltip-content={`Category: ${equipment.categoryname}`} // The content of the tooltip
              />
              {/* This is where we define the Tooltip */}
              <ReactTooltip id={`tooltip-${equipment._id}`} place="top" effect="solid" />
            </div>
            <div className="p-4 text-left">
              <h3 className="text-lg font-bold text-gray-800">{equipment.name}</h3>
              <p className="text-sm text-gray-500 mt-1">
                Category: {equipment.categoryname}
              </p>
              <p className="text-sm text-gray-500 mt-1">Price: ${equipment.price}</p>
              <Link
                to={`/equipment/${equipment._id}`}
                className="mt-4 inline-block bg-slate-300 text-slate-900 px-4 py-2 rounded-md hover:bg-slate-700  hover:text-slate-100 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EquipmentCart;









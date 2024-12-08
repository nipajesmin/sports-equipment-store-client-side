import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EquipmentCart = () => {
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/addEquipments')
      .then((res) => res.json())
      .then((data) => setEquipments(data))
      .catch((err) => console.error("Error fetching equipment data:", err));
  }, []);

  return (
    <div className="w-11/12 mx-auto mt-5">
      <h2 className="text-center text-3xl font-semibold my-4">Product Section</h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
              />
            </div>
            <div className="p-4 text-left">
              <h3 className="text-lg font-bold text-gray-800">{equipment.name}</h3>
              <p className="text-sm text-gray-500 mt-1">
                Category: {equipment.categoryname}
              </p>
              <p className="text-sm text-gray-500 mt-1">Price: ${equipment.price}</p>
              <Link
                to={`/equipment/${equipment._id}`}
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
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








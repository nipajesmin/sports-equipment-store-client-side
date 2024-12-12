import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const EquipmentDetails = () => {
  const { id } = useParams(); // Get the equipment ID from the URL
  const [equipment, setEquipment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://sports-equipment-store-server-side.vercel.app/addEquipments`)
      .then((res) => res.json())
      .then((data) => {
        const foundEquipment = data.find((item) => item._id === id);
        setEquipment(foundEquipment);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching equipment data:", err));
  }, [id]);

  if (loading) {
    return <p className="text-center text-blue-500 mt-5">Loading equipment details...</p>;
  }

  if (!equipment) {
    return <p className="text-center text-red-500 mt-5">Equipment not found!</p>;
  }

  return (
    <div className="w-11/12 mx-auto mt-10">
      <h2 className="text-center text-4xl font-bold my-6 text-blue-600">
        {equipment.name}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="flex justify-center">
          <img
            src={equipment.image}
            alt={equipment.name}
            className="rounded-lg shadow-lg max-w-full h-auto object-cover"
            style={{ maxHeight: "400px" }}
          />
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="text-lg font-semibold text-gray-700 mb-2">
            <strong>Category:</strong> {equipment.categoryname}
          </p>
          <p className="text-lg font-semibold text-gray-700 mb-2">
            <strong>Price:</strong> ${equipment.price}
          </p>
          <p className="text-lg font-semibold text-gray-700 mb-2">
            <strong>Rating:</strong> {equipment.rating} ⭐
          </p>
          <p className="text-lg font-semibold text-gray-700 mb-2">
            <strong>Customization:</strong> {equipment.customization}
          </p>
          <p className="text-lg font-semibold text-gray-700 mb-2">
            <strong>Processing Time:</strong> {equipment.processingTime}
          </p>
          <p className="text-lg font-semibold text-gray-700 mb-2">
            <strong>Stock Status:</strong> {equipment.stockStatus} in stock
          </p>
          <p className="text-lg text-gray-600 mt-4">
            <strong>Description:</strong> {equipment.description}
          </p>
          
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          to="/"
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition mb-6"
        >
          ← Go Back
        </Link>
      </div>
    </div>
  );
};

export default EquipmentDetails;




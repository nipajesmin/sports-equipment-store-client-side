import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllSportsEquip = () => {
    const [equipments, setEquipments] = useState([]);
    const [sortOrder, setSortOrder] = useState(null); // 'asc' or 'desc'

    useEffect(() => {
        fetch('https://sports-equipment-store-server-side.vercel.app/addEquipments')
            .then((res) => res.json())
            .then((data) => setEquipments(data))
            .catch((err) => console.error("Error fetching equipment data:", err));
    }, []);

    const sortEquipments = (order) => {
        const sortedEquipments = [...equipments].sort((a, b) => {
            return order === 'asc' ? a.price - b.price : b.price - a.price;
        });
        setEquipments(sortedEquipments);
        setSortOrder(order);
    };

    return (
        <div>
            <Navbar />
            <div className="w-11/12 mx-auto mt-5 mb-5">
                <h2 className="text-center text-3xl font-semibold my-4">All Sports Equipments</h2>

                {/* Sort Buttons */}
                <div className="text-center mb-4">
                    <button
                        onClick={() => sortEquipments('asc')}
                        className={`mr-2 px-4 py-2 rounded ${
                            sortOrder === 'asc' ? 'bg-gray-500 text-white' : 'bg-gray-200'
                        } hover:bg-gray-500 transition`}
                    >
                        Sort by Price (Ascending)
                    </button>
                    <button
                        onClick={() => sortEquipments('desc')}
                        className={`px-4 py-2 rounded ${
                            sortOrder === 'desc' ? 'bg-gray-500 text-white' : 'bg-gray-200'
                        } hover:bg-gray-500 transition`}
                    >
                        Sort by Price (Descending)
                    </button>
                </div>

                {/* Equipment Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {equipments.map((equipment) => (
                        <div
                            key={equipment._id}
                            className="border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                        >
                            <img
                                src={equipment.image}
                                alt={equipment.name}
                                className="h-48 w-full object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800">{equipment.name}</h3>
                                <p className="text-sm text-gray-600">Category: {equipment.categoryname}</p>
                                <p className="text-lg font-bold text-gray-800 mt-2">${equipment.price}</p>
                                <Link
                                    to={`/equipment/${equipment._id}`}
                                    className="inline-block mt-4 bg-red-200 text-slate-900 px-4 py-2 rounded hover:bg-gray-500 transition"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AllSportsEquip;



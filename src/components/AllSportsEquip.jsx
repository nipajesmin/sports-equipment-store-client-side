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

                {/* Equipment Table */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border border-gray-200 px-4 py-2 text-left">Image</th>
                                <th className="border border-gray-200 px-4 py-2 text-left">Name</th>
                                <th className="border border-gray-200 px-4 py-2 text-left">Category</th>
                                <th className="border border-gray-200 px-4 py-2 text-left">Price</th>
                                <th className="border border-gray-200 px-4 py-2 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {equipments.map((equipment) => (
                                <tr key={equipment._id} className="hover:bg-gray-50">
                                    <td className="border border-gray-200 px-4 py-2">
                                        <img
                                            src={equipment.image}
                                            alt={equipment.name}
                                            className="h-16 w-16 object-contain mx-auto"
                                        />
                                    </td>
                                    <td className="border border-gray-200 px-4 py-2">{equipment.name}</td>
                                    <td className="border border-gray-200 px-4 py-2">{equipment.categoryname}</td>
                                    <td className="border border-gray-200 px-4 py-2">${equipment.price}</td>
                                    <td className="border border-gray-200 px-4 py-2">
                                        <Link
                                            to={`/equipment/${equipment._id}`}
                                            className="bg-red-200 text-slate-900 px-4 py-2 rounded hover:bg-gray-500 transition"
                                        >
                                            View Details
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AllSportsEquip;


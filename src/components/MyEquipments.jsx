import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Footer from './Footer';
import Navbar from './Navbar';

const MyEquipments = () => {
    const { user } = useContext(AuthContext);
    const [myEquipments, setMyEquipments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (user?.email) {
            fetch(`https://sports-equipment-store-server-side.vercel.app/myEquipments/${user.email}`)
                .then((res) => res.json())
                .then((data) => setMyEquipments(data))
                .catch((error) => console.error('Error fetching equipment:', error));
        }
    }, [user?.email]);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://sports-equipment-store-server-side.vercel.app/myEquipments/${id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire('Deleted!', 'Your equipment has been deleted.', 'success');
                            setMyEquipments((prevEquipments) =>
                                prevEquipments.filter((equipment) => equipment._id !== id)
                            );
                        }
                    });
            }
        });
    };

    const handleUpdate = (id) => {
        navigate(`/updateEquipment/${id}`);
    };

    return (
        <div>
            <Navbar />
            <div className="w-full max-w-6xl mx-auto mt-8">
                <h2 className="text-2xl font-bold text-center mb-6">My Added Equipments</h2>
                {myEquipments.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse border border-gray-200 mb-4">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border border-gray-200 px-4 py-2 text-left">Image</th>
                                    <th className="border border-gray-200 px-4 py-2 text-left">Name</th>
                                    <th className="border border-gray-200 px-4 py-2 text-left">Description</th>
                                    <th className="border border-gray-200 px-4 py-2 text-left">Price</th>
                                    <th className="border border-gray-200 px-4 py-2 text-left">Rating</th>
                                    <th className="border border-gray-200 px-4 py-2 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myEquipments.map((equipment) => (
                                    <tr key={equipment._id} className="hover:bg-gray-50">
                                        <td className="border border-gray-200 px-4 py-2">
                                            <img
                                                src={equipment.image}
                                                alt={equipment.name}
                                                className="h-16 w-16 object-contain mx-auto"
                                            />
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2">{equipment.name}</td>
                                        <td className="border border-gray-200 px-4 py-2">{equipment.description}</td>
                                        <td className="border border-gray-200 px-4 py-2">${equipment.price}</td>
                                        <td className="border border-gray-200 px-4 py-2">{equipment.rating}</td>
                                        <td className="border border-gray-200 px-4 py-2">
                                            <div className="flex space-x-2">
                                                <button
                                                    onClick={() => handleUpdate(equipment._id)}
                                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                                                >
                                                    Update
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(equipment._id)}
                                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-center">You haven't added any equipment yet.</p>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default MyEquipments;





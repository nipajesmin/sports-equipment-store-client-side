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
        //  console.log(id)
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
                            // const remaining = equipmentCollection.filter((equip) => equip._id !== id);
                            // setMyEquipments(remaining);

                            // Update state immediately after deletion
                            setMyEquipments((prevEquipments) =>
                                prevEquipments.filter((equipment) => equipment._id !== id)
                            );
                        }
                    });
                //   console.log('delete confirm')
            }
        });
    };

    const handleUpdate = (id) => {
        navigate(`/updateEquipment/${id}`);
    };
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-full max-w-4xl mx-auto mt-8">
                <h2 className="text-2xl font-bold text-center mb-6">My Added Equipments</h2>
                {myEquipments.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {myEquipments.map((equipment) => (
                            <div key={equipment._id} className="card shadow-lg p-4">
                                <img
                                    src={equipment.image}
                                    alt={equipment.name}
                                    className="w-full h-48 object-cover mb-4"
                                />
                                <h3 className="text-xl font-semibold">{equipment.name}</h3>
                                {/* <p className="text-sm text-gray-600">{equipment._id}</p> */}
                                <p className="text-sm text-gray-600">{equipment.description}</p>
                                <p className="text-sm text-gray-600">Price: ${equipment.price}</p>
                                <p className="text-sm text-gray-600">Rating: {equipment.rating}</p>
                                <div className="flex justify-between mt-4">
                                    <button
                                        onClick={() => handleUpdate(equipment._id)}
                                        className="btn btn-primary"
                                    >
                                        Update
                                    </button>
                                    {/* <Link to={'/updateEquipment'}
                                    className="btn btn-primary"
                                    >
                                        Update
                                    </Link> */}

                                    <button
                                        onClick={() => handleDelete(equipment._id)}
                                        className="btn btn-error"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center">You haven't added any equipment yet.</p>
                )}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyEquipments;




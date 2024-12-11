import React, { useState, useEffect, useContext } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Swal from 'sweetalert2';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const UpdateEquipment = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [equipment, setEquipment] = useState({});

    // Fetch existing equipment data
    useEffect(() => {
        fetch(`http://localhost:5000/myEquipments/${id}`)
            .then((res) => res.json())
            .then((data) => setEquipment(data))
            .catch((error) => console.error(error));
    }, [id]);

    const handleUpdateEquipment = (event) => {
        event.preventDefault();
        const form = event.target;
        const updatedEquipment = {
            name: form.name.value,
            categoryname: form.categoryName.value,
            image: form.image.value,
            description: form.description.value,
            price: form.price.value,
            rating: form.rating.value,
            customization: form.customization.value,
            processingTime: form.processingTime.value,
            stockStatus: form.stockStatus.value,
            userEmail: form.userEmail.value,
            userName: form.userName.value,
        };

        // Send updated data to the server
        fetch(`http://localhost:5000/myEquipments/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedEquipment),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Equipment updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    });
                    navigate('/myEquipments');
                }
            });
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-base-100 shadow-xl rounded-lg mb-8">
                <h2 className="text-2xl font-bold text-center mb-6">Update Equipment</h2>
                <form onSubmit={handleUpdateEquipment} className="space-y-4">
                    {/* Image URL */}
                    <div className="form-control">
                        <label className="label font-semibold">Image URL</label>
                        <input
                            type="text"
                            name="image"
                            className="input input-bordered"
                            defaultValue={equipment.image || ''}
                            required
                        />
                    </div>

                    {/* Item Name */}
                    <div className="form-control">
                        <label className="label font-semibold">Item Name</label>
                        <input
                            type="text"
                            name="name"
                            className="input input-bordered"
                            defaultValue={equipment.name || ''}
                            required
                        />
                    </div>

                    {/* Category Name */}
                    <div className="form-control">
                        <label className="label font-semibold">Category Name</label>
                        <input
                            type="text"
                            name="categoryName"
                            className="input input-bordered"
                            defaultValue={equipment.categoryname || ''}
                            required
                        />
                    </div>

                    {/* Description */}
                    <div className="form-control">
                        <label className="label font-semibold">Description</label>
                        <textarea
                            name="description"
                            className="textarea textarea-bordered"
                            defaultValue={equipment.description || ''}
                            required
                        ></textarea>
                    </div>

                    {/* Price */}
                    <div className="form-control">
                        <label className="label font-semibold">Price ($)</label>
                        <input
                            type="number"
                            name="price"
                            className="input input-bordered"
                            defaultValue={equipment.price || ''}
                            required
                        />
                    </div>

                    {/* Rating */}
                    <div className="form-control">
                        <label className="label font-semibold">Rating (1-5)</label>
                        <input
                            type="number"
                            name="rating"
                            className="input input-bordered"
                            defaultValue={equipment.rating || ''}
                            max="5"
                            min="1"
                            required
                        />
                    </div>

                    {/* Customization */}
                    <div className="form-control">
                        <label className="label font-semibold">Customization</label>
                        <input
                            type="text"
                            name="customization"
                            className="input input-bordered"
                            defaultValue={equipment.customization || ''}
                        />
                    </div>

                    {/* Processing Time */}
                    <div className="form-control">
                        <label className="label font-semibold">Processing Time</label>
                        <input
                            type="text"
                            name="processingTime"
                            className="input input-bordered"
                            defaultValue={equipment.processingTime || ''}
                            required
                        />
                    </div>

                    {/* Stock Status */}
                    <div className="form-control">
                        <label className="label font-semibold">Stock Status (Quantity Available)</label>
                        <input
                            type="number"
                            name="stockStatus"
                            className="input input-bordered"
                            defaultValue={equipment.stockStatus || ''}
                            required
                        />
                    </div>

                    {/* User Email (Read-Only) */}
                    <div className="form-control">
                        <label className="label font-semibold">User Email</label>
                        <input
                            type="email"
                            name="userEmail"
                            className="input input-bordered bg-gray-100"
                            defaultValue={user?.email || ''}
                            readOnly
                        />
                    </div>

                    {/* User Name (Read-Only) */}
                    <div className="form-control">
                        <label className="label font-semibold">User Name</label>
                        <input
                            type="text"
                            name="userName"
                            className="input input-bordered bg-gray-100"
                            defaultValue={user?.displayName || ''}
                            readOnly
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="form-control mt-6">
                        <button
                            type="submit"
                            className="btn btn-primary w-full"
                        >
                            Update Equipment
                        </button>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};



export default UpdateEquipment;
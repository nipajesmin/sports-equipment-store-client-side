import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const AddEquipments = () => {
    const handleAddEquipment = (event) => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value;
        const categoryname = form.categoryName.value;
        const image = form.image.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization= form.customization.value;
        
        const processingTime = form.processingTime.value;
        const stockStatus = form.stockStatus.value;
        const newEquipment = {name, categoryname, image, description, price, rating, customization, processingTime, stockStatus}


        console.log(name);
        console.log(newEquipment);
    
        // Simulating database submission
        alert("Form submitted successfully!");
      };
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-base-100 shadow-xl rounded-lg mb-8">
                <h2 className="text-2xl font-bold text-center mb-6">Add New Equipment</h2>
                <form onSubmit={handleAddEquipment} className="space-y-4">
                    {/* Image URL */}
                    <div className="form-control">
                        <label className="label font-semibold">Image URL</label>
                        <input
                            type="text"
                            name="image"
                            className="input input-bordered"
                            placeholder="Enter image URL"
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
                            placeholder="Enter item name"
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
                            placeholder="Enter category name"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div className="form-control">
                        <label className="label font-semibold">Description</label>
                        <textarea
                            name="description"

                            className="textarea textarea-bordered"
                            placeholder="Enter description"
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
                            placeholder="Enter price"
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
                            placeholder="Enter rating"
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
                            placeholder="Enter customization details"
                        />
                    </div>

                    {/* Processing Time */}
                    <div className="form-control">
                        <label className="label font-semibold">Processing Time</label>
                        <input
                            type="text"
                            name="processingTime"

                            className="input input-bordered"
                            placeholder="Enter processing/delivery time"
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
                            placeholder="Enter available stock quantity"
                            required
                        />
                    </div>

                    {/* User Email (Read-Only) */}
                    {/* <div className="form-control">
                        <label className="label font-semibold">User Email</label>
                        <input
                            type="email"
                            name="userEmail"

                            className="input input-bordered bg-gray-100"
                        />
                    </div> */}

                    {/* User Name (Read-Only) */}
                    {/* <div className="form-control">
                        <label className="label font-semibold">User Name</label>
                        <input
                            type="text"
                            name="userName"

                            className="input input-bordered bg-gray-100"
                        />
                    </div> */}

                    {/* Submit Button */}
                    <div className="form-control mt-6">
                        <button
                            type="submit"
                            className="btn btn-primary w-full"
                        >
                            Add Equipment
                        </button>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddEquipments;
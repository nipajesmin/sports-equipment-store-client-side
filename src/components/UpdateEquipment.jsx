import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateEquipment = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [equipment, setEquipment] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/myEquipments/${id}`)
          .then((res) => res.json())
          .then((data) => setEquipment(data))
          .catch((error) => console.error(error));
      }, [id]);
    
      const handleUpdate = (event) => {
        event.preventDefault();
        fetch(`http://localhost:5000/myEquipments/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(equipment),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire('Updated!', 'Your equipment has been updated.', 'success');
              navigate('/myEquipments');
            }
          });
      };
      return (
        <div className="w-full max-w-xl mx-auto mt-8 p-6 bg-base-100 shadow-xl rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Update Equipment</h2>
          <form onSubmit={handleUpdate} className="space-y-4">
            <input
              type="text"
              name="name"
              value={equipment.name || ''}
              onChange={(e) => setEquipment({ ...equipment, name: e.target.value })}
              className="input input-bordered w-full"
              placeholder="Enter name"
            />
            {/* Add other fields as needed */}
            <button type="submit" className="btn btn-primary w-full">
              Update Equipment
            </button>
          </form>
        </div>
      );
};

export default UpdateEquipment;
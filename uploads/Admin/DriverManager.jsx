import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DriverManagement = () => {
  const [drivers, setDrivers] = useState([]);
  const [driver, setDriver] = useState({ name: '', email: '', phoneNumber: '', vehicleType: '', available: true });
  const [editingDriverId, setEditingDriverId] = useState(null);

  useEffect(() => {
    fetchDrivers();
  }, []);

  const fetchDrivers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/driver/getall');
      setDrivers(response.data);
    } catch (error) {
      console.error('Error fetching drivers:', error);
    }
  };

  const handleChange = (e) => {
    setDriver({ ...driver, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingDriverId) {
        await axios.put(`http://localhost:8080/api/v1/driver/edit/${editingDriverId}`, driver);
        alert('Driver updated successfully!');
      } else {
        await axios.post('http://localhost:8080/api/v1/driver/save', driver);
        alert('Driver added successfully!');
      }
      setDriver({ name: '', email: '', phoneNumber: '', vehicleType: '', available: true });
      setEditingDriverId(null);
      fetchDrivers();
    } catch (error) {
      console.error('Error saving driver:', error);
      alert('Error saving driver');
    }
  };

  const startEditing = (driver) => {
    setDriver(driver);
    setEditingDriverId(driver._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/driver/delete/${id}`);
      alert('Driver deleted successfully!');
      fetchDrivers();
    } catch (error) {
      console.error('Error deleting driver:', error);
      alert('Error deleting driver');
    }
  };

  return (
    <div className="container mx-auto p-6">
      {/* Form Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Driver Management</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={driver.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={driver.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={driver.phoneNumber}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Vehicle Type</label>
            <input
              type="text"
              name="vehicleType"
              value={driver.vehicleType}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4 flex items-center">
            <label className="mr-2 text-sm font-medium text-gray-700">Availability</label>
            <input
              type="checkbox"
              name="available"
              checked={driver.available}
              onChange={(e) => setDriver({ ...driver, available: e.target.checked })}
              className="h-5 w-5 text-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            {editingDriverId ? 'Update Driver' : 'Add Driver'}
          </button>
        </form>
      </div>

      {/* Driver List Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Driver List</h2>
        <div className="space-y-4">
          {drivers.map((driver) => (
            <div key={driver._id} className="bg-white p-4 rounded shadow-md">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{driver.name}</p>
                  <p>{driver.vehicleType} - {driver.available ? 'Available' : 'Not Available'}</p>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => startEditing(driver)}
                    className="bg-yellow-500 text-blue-500 py-1 px-4 rounded hover:bg-yellow-400 transition duration-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(driver._id)}
                    className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-400 transition duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DriverManagement;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  
 


function CarForm() {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [carType, setCarType] = useState('');
  const [licensePlateNumber, setLicensePlateNumber] = useState('');
  const [color, setColor] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [transmissionType, setTransmissionType] = useState('');
  const [seatingCapacity, setSeatingCapacity] = useState('');
  const [available, setAvailable] = useState(true);
  const [dailyRentalPrice, setDailyRentalPrice] = useState('');
  const [image, setImage] = useState(null);
  const [driverName, setDriverName] = useState('');
  const [driverLocation, setDriverLocation] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();  // Initialize useNavigate to redirect after form submission

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(file);
      setError('');
    } else {
      setError('Please select a valid image file');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure all fields are filled
    if (!make || !model || !year || !carType || !licensePlateNumber || !color || !fuelType || 
        !transmissionType || !seatingCapacity || !dailyRentalPrice || !image || !driverName || 
        !driverLocation || !licenseNumber) {
      setError('All fields are required');
      return;
    }

    // Create FormData for the POST request
    const formData = new FormData();
    formData.append('make', make);
    formData.append('model', model);
    formData.append('year', year);
    formData.append('carType', carType);
    formData.append('licensePlateNumber', licensePlateNumber);
    formData.append('color', color);
    formData.append('fuelType', fuelType);
    formData.append('transmissionType', transmissionType);
    formData.append('seatingCapacity', seatingCapacity);
    formData.append('available', available);
    formData.append('dailyRentalPrice', dailyRentalPrice);
    formData.append('image', image);
    formData.append('driverName', driverName);
    formData.append('driverLocation', driverLocation);
    formData.append('licenseNumber', licenseNumber);

    try {
      const response = await axios.post('http://localhost:8080/api/cars', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        setSuccess('Car added successfully!');
        // Clear the form after successful submission
        setMake('');
        setModel('');
        setYear('');
        setCarType('');
        setLicensePlateNumber('');
        setColor('');
        setFuelType('');
        setTransmissionType('');
        setSeatingCapacity('');
        setAvailable(true);
        setDailyRentalPrice('');
        setImage(null);
        setDriverName('');
        setDriverLocation('');
        setLicenseNumber('');

        // Redirect to another page (e.g., car listing or dashboard)
        navigate('/cars');  // Use navigate() to redirect to '/cars' after successful submission
      } else {
        setError('Failed to add car');
      }
    } catch (error) {
      setError('An error occurred while adding the car');
    }
  };

  return (
    <div>
      <h2>Add New Car</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Make</label>
          <input
            type="text"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Model</label>
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Year</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Car Type</label>
          <input
            type="text"
            value={carType}
            onChange={(e) => setCarType(e.target.value)}
            required
          />
        </div>
        <div>
          <label>License Plate Number</label>
          <input
            type="text"
            value={licensePlateNumber}
            onChange={(e) => setLicensePlateNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Car Color</label>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Fuel Type</label>
          <input
            type="text"
            value={fuelType}
            onChange={(e) => setFuelType(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Transmission Type</label>
          <input
            type="text"
            value={transmissionType}
            onChange={(e) => setTransmissionType(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Seating Capacity</label>
          <input
            type="number"
            value={seatingCapacity}
            onChange={(e) => setSeatingCapacity(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Availability</label>
          <input
            type="checkbox"
            checked={available}
            onChange={(e) => setAvailable(e.target.checked)}
          />
        </div>
        <div>
          <label>Daily Rental Price</label>
          <input
            type="number"
            value={dailyRentalPrice}
            onChange={(e) => setDailyRentalPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Driver Name</label>
          <input
            type="text"
            value={driverName}
            onChange={(e) => setDriverName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Driver Location</label>
          <input
            type="text"
            value={driverLocation}
            onChange={(e) => setDriverLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label>License Number</label>
          <input
            type="text"
            value={licenseNumber}
            onChange={(e) => setLicenseNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
}

export default CarForm;

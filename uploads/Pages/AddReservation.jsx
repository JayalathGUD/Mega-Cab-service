import React, { useState } from 'react';
import axios from 'axios';

const AddReservation = () => {
  const [reservation, setReservation] = useState({
    location: '',
    pickupDate: '',
    dropoffDate: '',
    pickupTime: '',
    contactNumber: '',
    pax: 1,
    needDriver: false,
    carType: '',
    carModel: '',
    totalPrice: 0,
  });

  const handleChange = (e) => {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setReservation({ ...reservation, needDriver: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/v1/reservation/save', reservation);
      alert('Reservation added successfully!');
      setReservation({
        location: '',
        pickupDate: '',
        dropoffDate: '',
        pickupTime: '',
        contactNumber: '',
        pax: 1,
        needDriver: false,
        carType: '',
        carModel: '',
        totalPrice: 0,
      });
    } catch (error) {
      console.error('Error adding reservation:', error);
      alert('Error adding reservation');
    }
  };

  return (
    <div>
      <h1>Add Reservation</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Location:</label>
          <input type="text" name="location" value={reservation.location} onChange={handleChange} required />
        </div>
        <div>
          <label>Pickup Date:</label>
          <input type="date" name="pickupDate" value={reservation.pickupDate} onChange={handleChange} required />
        </div>
        <div>
          <label>Dropoff Date:</label>
          <input type="date" name="dropoffDate" value={reservation.dropoffDate} onChange={handleChange} required />
        </div>
        <div>
          <label>Pickup Time:</label>
          <input type="time" name="pickupTime" value={reservation.pickupTime} onChange={handleChange} required />
        </div>
        <div>
          <label>Contact Number:</label>
          <input type="text" name="contactNumber" value={reservation.contactNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Number of Passengers:</label>
          <input type="number" name="pax" value={reservation.pax} onChange={handleChange} min="1" required />
        </div>
        <div>
          <label>Need Driver:</label>
          <input type="checkbox" name="needDriver" checked={reservation.needDriver} onChange={handleCheckboxChange} />
        </div>
        <div>
          <label>Car Type:</label>
          <input type="text" name="carType" value={reservation.carType} onChange={handleChange} required />
        </div>
        <div>
          <label>Car Model:</label>
          <input type="text" name="carModel" value={reservation.carModel} onChange={handleChange} required />
        </div>
        <div>
          <label>Total Price:</label>
          <input type="number" name="totalPrice" value={reservation.totalPrice} onChange={handleChange} min="0" required />
        </div>
        <button type="submit">Add Reservation</button>
      </form>
    </div>
  );
};

export default AddReservation;

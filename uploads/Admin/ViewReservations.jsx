import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewReservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/reservation/getall');
      setReservations(response.data);
    } catch (error) {
      console.error('Error fetching reservations:', error);
      alert('Error fetching reservations');
    }
  };

  return (
    <div>
      <h1>All Reservations</h1>
      <div>
        {reservations.length === 0 ? (
          <p>No reservations available.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Location</th>
                <th>Pickup Date</th>
                <th>Dropoff Date</th>
                <th>Pickup Time</th>
                <th>Contact Number</th>
                <th>Pax</th>
                <th>Need Driver</th>
                <th>Car Type</th>
                <th>Car Model</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation) => (
                <tr key={reservation.id}>
                  <td>{reservation.location}</td>
                  <td>{reservation.pickupDate}</td>
                  <td>{reservation.dropoffDate}</td>
                  <td>{reservation.pickupTime}</td>
                  <td>{reservation.contactNumber}</td>
                  <td>{reservation.pax}</td>
                  <td>{reservation.needDriver ? 'Yes' : 'No'}</td>
                  <td>{reservation.carType}</td>
                  <td>{reservation.carModel}</td>
                  <td>${reservation.totalPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ViewReservations;

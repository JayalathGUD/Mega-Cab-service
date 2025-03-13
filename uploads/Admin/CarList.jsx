import React, { useEffect, useState } from 'react';



function CarList() {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/cars');
        if (response.ok) {
          const data = await response.json();
          setCars(data);
        } else {
          setError('Failed to fetch cars');
        }
      } catch (error) {
        setError('An error occurred while fetching the cars');
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="car-list-container">
      <h2>Car List</h2>
      {error && <p className="error-message">{error}</p>}
      {cars.length > 0 ? (
        <table className="car-table">
          <thead>
            <tr>
              <th>Make</th>
              <th>Model</th>
              <th>Year</th>
              <th>Car Type</th>
              <th>License Plate Number</th>
              <th>Car Color</th>
              <th>Fuel Type</th>
              <th>Transmission Type</th>
              <th>Seating Capacity</th>
              <th>Availability</th>
              <th>Daily Rental Price</th>
              <th>Driver Name</th>
              <th>Driver Location</th>
              <th>License Number</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car.id}>
                <td>{car.make}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
                <td>{car.carType}</td>
                <td>{car.licensePlateNumber}</td>
                <td>{car.color}</td>
                <td>{car.fuelType}</td>
                <td>{car.transmissionType}</td>
                <td>{car.seatingCapacity}</td>
                <td>{car.available ? 'Available' : 'Not Available'}</td>
                <td>{car.dailyRentalPrice}</td>
                <td>{car.driverName}</td>
                <td>{car.driverLocation}</td>
                <td>{car.licenseNumber}</td>
                <td>
                  {/* Image for car, ensure the image URL is correct */}
                  <img
                    src={`http://localhost:8080/${car.imageUrl}`} // Make sure this points to a valid URL
                    alt={car.make}
                    className="car-image"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No cars found</p>
      )}
    </div>
  );
}

export default CarList;

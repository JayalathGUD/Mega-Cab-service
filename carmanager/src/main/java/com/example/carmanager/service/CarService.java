package com.example.carmanager.service;

import com.example.carmanager.model.Car;
import com.example.carmanager.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarService {

    @Autowired
    private CarRepository carRepository;

    // Add a new car to the repository
    public Car addCar(Car car) {
        return carRepository.save(car);
    }

    // Get all cars from the repository
    public Iterable<Car> getAllCars() {
        return carRepository.findAll();
    }

    // Update a car in the repository
    public Car updateCar(String id, Car carDetails) {
        return carRepository.findById(id)
                .map(car -> {
                    car.setMake(carDetails.getMake());
                    car.setModel(carDetails.getModel());
                    car.setYear(carDetails.getYear());
                    car.setCarType(carDetails.getCarType());
                    car.setLicensePlateNumber(carDetails.getLicensePlateNumber());
                    car.setColor(carDetails.getColor());
                    car.setFuelType(carDetails.getFuelType());
                    car.setTransmissionType(carDetails.getTransmissionType());
                    car.setSeatingCapacity(carDetails.getSeatingCapacity());
                    car.setAvailable(carDetails.isAvailable());
                    car.setDailyRentalPrice(carDetails.getDailyRentalPrice());
                    car.setImageUrl(carDetails.getImageUrl());
                    car.setDriverName(carDetails.getDriverName());
                    car.setDriverLocation(carDetails.getDriverLocation());
                    car.setLicenseNumber(carDetails.getLicenseNumber());
                    return carRepository.save(car);
                })
                .orElseThrow(() -> new RuntimeException("Car not found"));
    }

    // Delete a car from the repository
    public void deleteCar(String id) {
        carRepository.deleteById(id);
    }
}

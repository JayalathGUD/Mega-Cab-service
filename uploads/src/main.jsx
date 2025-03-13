import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes
import Login from '../Pages/Login.jsx';
import Register from '../Pages/Register.jsx';
import Home from '../Pages/Home.jsx';

import CarForm from '../Admin/CarFrom.jsx';

import CarList from '../Admin/CarList.jsx';
import DriverManager from '../Admin/DriverManager.jsx';
import AddReservation from '../Pages/AddReservation.jsx';
import ViewReservations from '../Admin/ViewReservations.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Reg" element={<Register />}/>
        <Route path='/home' element={<Home/>}/>
        
        <Route path='/form' element={<CarForm/>} />
        <Route path='/carlist' element={<CarList/>} />
        <Route path='/driver' element={<DriverManager/>} />
        <Route path='/addreservation' element={<AddReservation/>} />
        <Route path='/allreservation' element={<ViewReservations/>} />
       
        

      </Routes>
    </BrowserRouter>
  </StrictMode>
);

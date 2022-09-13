import axios from 'axios';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { setAuthToken } from './assets/AuthToken';
import { Navbar } from './components/Navbar/Navbar';
import { CarPage } from './pages/CarPage/CarPage';
import { Login } from './pages/Login/Login';
import { MainPage } from './pages/MainPage/MainPage';
import { Register } from './pages/Register/Register';



function App() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
    }
    // test

    // axios.get('http://localhost:3005/user/test').then((response)=> console.log(response))
  }, [])
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/car/:id" element={<CarPage />} />
      </Routes>
    </div>
  );
}

export default App;

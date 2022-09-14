import axios from 'axios';
import React, { createContext, Dispatch, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';
import { setAuthToken } from './assets/AuthToken';
import { Navbar } from './components/Navbar/Navbar';
import { CarPage } from './pages/CarPage/CarPage';
import { Login } from './pages/Login/Login';
import { MainPage } from './pages/MainPage/MainPage';
import { Register } from './pages/Register/Register';
import { Zamowienia } from './pages/Zamowienia/Zamowienia';

interface IUser {
  id: number | null,
  Login: string | null,
  Email: string | null,
}


export const UserContext = createContext<{
  context: IUser | null,
  setContext: (newValue: any) => void
}>({
  context: null,
  setContext: () => undefined
})

function App() {

  const [context, setContext] = useState<IUser | null>(null)

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user")
    if (token) {
      setAuthToken(token);
    }
    if (user) {
      setContext(JSON.parse(user))
    }

  }, [])
  return (
    <div className="App">
      <UserContext.Provider value={{ context, setContext }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/car/:id" element={<CarPage />} />
          <Route path="/orders" element={<Zamowienia title='Lista Zamówień' url='http://localhost:3005/reservation/all' />} />
          <Route path="/history" element={<Zamowienia title='Historia Zamówień' url='http://localhost:3005/reservation/allHistory' />} />

        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;

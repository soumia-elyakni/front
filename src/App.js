import React from 'react'
import { BrowserRouter as Router,  Routes, Route  } from 'react-router-dom';
import './App.css';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register'
import { Dashboard } from './components/pages/Dashboard';
import { FreindsList } from './components/outlets/FreindsList';
import { MyInfo } from './components/outlets/MyInfo';
import { Wishlist } from './components/outlets/Wishlist';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profil" element={<Dashboard />}>
          <Route path="friends" element={<FreindsList />} />
          <Route path="my-info" element={<MyInfo />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
    </Router>
    
  );
}

export default App;

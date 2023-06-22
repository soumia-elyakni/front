import React from 'react'
import { BrowserRouter as Router,  Routes, Route  } from 'react-router-dom';
import './App.css';
import { Login } from './components/auth/Login';
import { Profil } from './components/pages/Profil';
import { Register } from './components/auth/Register'

function App() {
  return (
    <Router>
      <Routes>
       <Route path='/' element={ <Login/>} />
       <Route path='/login' element={ <Login/>} />
       <Route path='/register' element={ <Register/>} />
       <Route path='/profil' element={ <Profil/>} />
      </Routes>
    </Router>
    
  );
}

export default App;

import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { Profil } from './Profil';



export const Dashboard = () => {

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <Navbar sexe={user.sexe} />
      <div className="container mx-auto">
        <div className='flex flex-row'>
        <div>
           <Profil /> 
        </div>
         <div className='p-6'>
           <Outlet />  
         </div>
        </div>
        
      </div>
    </div>
  );
};


import React from 'react';
import { Outlet } from 'react-router';
import {  Navigate } from "react-router-dom";


export const AuthAccses = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  let isAuthenticated = false;
  user ? isAuthenticated = true : isAuthenticated = false;

 
  
return (
<>
{isAuthenticated ? <Navigate to="/profil" /> : <Outlet/>} </>
)
   
 

};

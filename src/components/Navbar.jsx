import React from 'react';
import { logout } from '../actions/auth-actions';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FiLogOut } from 'react-icons/fi';

export const Navbar = ({ sexe }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getBackground = (sexe) => {
    return sexe ? 'bg-red-200' : 'bg-cyan-200';
  };

  const logoutUser = () => {
    localStorage.clear();
    navigate('/login');
    dispatch(logout());
  };

  return (
    <nav className={`flex items-center justify-between py-4 px-8 ${getBackground(sexe)}`}>
      <div className="flex">
        <div className="w-8 h-8 rounded-full bg-gray-300" /> {/* Placeholder for the logo */}
      </div>
      <div className="flex flex-grow justify-center space-x-4 text-slate-600">
        <Link to="friends" className="">
          Liste des amis
        </Link>
        <Link to="my-info" className="">
          Mes informations
        </Link>
        <Link to="wishlist" className="">
          Ma liste de souhaits
        </Link>
      </div>
      <div className="flex space-x-4">
        <button
          type="button"
          onClick={logoutUser}
          className="text-slate-500 font-semibold bg-slate-100 px-2 py-1 rounded-md flex items-center"
        >
          <FiLogOut className="mr-2" />
        </button>
      </div>
    </nav>
  );
};

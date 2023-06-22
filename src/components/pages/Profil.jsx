import React, { useState } from 'react';

import { FiUser, FiMail, FiGift, FiUsers } from 'react-icons/fi';
import {BirthdayCard} from './BirthdayCard';

export const Profil = () => {
 
  
  const user = JSON.parse(localStorage.getItem('user'));
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const userBirthday = user.birthday
  const sexe = user.sexe

  const getBackground = (sexe) => {
    return sexe ? 'bg-red-100' : 'bg-cyan-100';
  };

    

  const copyToClipboard = () => {
    navigator.clipboard.writeText(user.idpartage);
    setCopied(true);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      setCopied(false);
    }, 2000);
  };

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };
  
  return (
    <div className='d-flex flex-col max-w-[18rem] h-screen bg-slate-100'>
    <div className="flex flex-col items-start justify-center p-4">
      <div className={`w-sm rounded-lg shadow-lg dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 ${getBackground(sexe)}`}>
        <div className="p-4 max-w-1/2">
          <div className="flex items-center mb-4">
            <FiUser className="mr-2 text-gray-500" size={20} />
            <p className="text-lg font-semibold text-gray-800 dark:text-white">
              {user.name}
            </p>
          </div>
          <div className="flex items-center mb-4">
            <FiMail className="mr-2 text-gray-500" size={20} />
            <p className="text-sm text-gray-900">{user.email}</p>
          </div>
          <div className="flex items-center mb-4">
            <p className="text-sm text-center text-gray-900">
              <span
                className={`flex items-center mt-2 font-bold cursor-pointer ${copied ? 'text-green-500' : ''}`}
                onClick={copyToClipboard}
                onMouseEnter={() => setShowMsg(true)}
                onMouseLeave={() => setShowMsg(false)}
              >
                <FiGift
                  className="mr-1 text-gray-500"
                  size={20}
                />
                {user.idpartage}
              </span>
            </p>
          </div>
          <div className="flex items-center mt-5">
            <FiUsers className="mr-2 text-gray-500" size={20} />  
            <p className="text-sm text-gray-900">
              Amis:
              <span className="font-bold text-gray-800">45</span>
            </p>
          </div>
  
        </div>
      </div>

      {showToast ? (
        <div className="absolute bottom-4 right-4 py-2 px-4 bg-green-500 text-white text-sm font-semibold shadow-md rounded-md">
          Code copié dans le presse-papiers!
        </div>
      ) : null}

      {showMsg ? (
        <div
          className="absolute bg-green-500 text-white text-sm font-semibold shadow-md rounded-md p-2"
          style={{ position : mousePosition }}
        >
          Partagez le code avec vos convives pour recevoir des cadeaux depuis ta wishlist
        </div>
      ) : null}
    </div>
        
    <div className='max-w-sm min-w-sm    p-4'>
      
      <BirthdayCard birthday= {user.birthday} sexe={user.sexe} />
      
    </div>
    
    </div>

  );
};

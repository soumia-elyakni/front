import React from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../actions/auth-actions'; 
import { useDispatch } from 'react-redux';


export const Profil = () => {
    const dispatch = useDispatch()
    const navigation = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'))
    const logaout = () => {
      localStorage.clear()
      navigation('/login');
      dispatch(logout())
     
    }

  return (
    <div className='d-flex flex-column'>
        
<div className="w-full max-w-xl px-5 py-4 mx-auto text-gray-800 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-50">
    <div className="w-full">
        <div className="mb-6 text-center">
            <p className="text-xl font-medium text-gray-800 dark:text-white">
                {user.name}
            </p>
            <p className="text-xs text-gray-400">
                {user.role}
            </p>
        </div>
        <div className="w-full p-2 mb-4 bg-pink-100 rounded-lg dark:bg-white">
            <div className="flex items-center justify-between text-xs text-gray-400 dark:text-black">
                <p className="flex flex-col">
                    Art.
                    <span className="font-bold text-black dark:text-indigo-500">
                        34
                    </span>
                </p>
                <p className="flex flex-col">
                    Foll.
                    <span className="font-bold text-black dark:text-indigo-500">
                        455
                    </span>
                </p>
                <p className="flex flex-col">
                    Rat.
                    <span className="font-bold text-black dark:text-indigo-500">
                        9.3
                    </span>
                </p>
            </div>
        </div>
        <button type="button" onClick={logaout} className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
        Logout
        </button>
    </div>
</div>


    </div>
  )
}

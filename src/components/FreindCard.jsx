import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const FriendCard = ({ username, birthday, isFriend, sexe }) => {
  // Déterminer la couleur de fond en fonction du sexe
  const backgroundColor = sexe ? 'bg-red-300' : 'bg-cyan-300';

  // Déterminer l'icône du bouton en fonction de l'état d'amitié
  const icon = isFriend ? <FaMinus size={20} /> : <FaPlus size={20} />;

  // Déterminer la classe CSS du bouton en fonction de l'état d'amitié
  const buttonClass = isFriend
    ? 'bg-slate-400 hover:bg-red-200'
    : 'bg-indigo-300 hover:bg-indigo-200';

  return (
    <div className={`shadow-lg rounded-2xl bg-white dark:bg-gray-800 p-4 m-3 min-w-[250px] max-w-[250px] ${backgroundColor}`}>
      <div className="flex-row gap-4 flex justify-center items-center">
    
        <div className="flex flex-col">
          <span className="text-lg font-medium text-gray-600 dark:text-white">{username}</span>
          <span className="text-xs text-gray-400">{birthday}</span>
        </div>
        <button
          type="button"
          className={`py-2 px-4 ${buttonClass} w-12 h-12 rounded-full focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2`}
        >
          {icon}
        </button>
      </div>
    </div>
  );
};

export default FriendCard;

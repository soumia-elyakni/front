import React from 'react';

export const BirthdayCard = ({ birthday, sexe }) => {
  const getBackground = (sexe) => {
    return sexe ? 'bg-red-100' : 'bg-cyan-100';
  };

  return (
    <div className={`max-w-1/2 rounded-lg shadow-lg p-4 ${getBackground(sexe)}`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Date de naissance</h2>
      </div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-gray-900">{birthday}</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="mr-2">
          <span className="text-xs font-semibold text-gray-500">Mois</span>
          <p className="text-xl font-bold">4</p>
        </div>
        <div className="mr-2">
          <span className="text-xs font-semibold text-gray-500">Jour</span>
          <p className="text-xl font-bold">15</p>
        </div>
        <div className="mr-2">
          <span className="text-xs font-semibold text-gray-500">Heure</span>
          <p className="text-xl font-bold">12</p>
        </div>
        <div>
          <span className="text-xs font-semibold text-gray-500">Minutes</span>
          <p className="text-xl font-bold">30</p>
        </div>
      </div>
    </div>
  );
};

import React from 'react';

export const WishCard = ({ piclink, titre, description, reference, categorie, isCurrentUser, onUpdate, onDelete }) => {
  // Utiliser une image par défaut si le lien de la photo est indéfini
  const defaultImage = 'https://example.com/default-image.jpg';
  const imageSrc = piclink || defaultImage;

  // Condition pour afficher le bouton de mise à jour
  const updateButton = isCurrentUser ? (
    <button onClick={onUpdate}>Update</button>
  ) : null;

  // Condition pour afficher le bouton de suppression
  const deleteButton = isCurrentUser ? (
    <button onClick={onDelete}>Delete</button>
  ) : null;

  return (
    <div className="bg-slate-100 p-4 m-3 rounded-md">
      <img src={imageSrc} alt="Wish" className="w-40 h-40 object-cover" />
      <h2 className="text-lg font-semibold">{titre}</h2>
      {description && <p>{description}</p>}
      {reference && <p>{reference}</p>}
      <p>{categorie}</p>
      {updateButton}
      {deleteButton}
    </div>
  );
};

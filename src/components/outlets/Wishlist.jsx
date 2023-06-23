import React from 'react';
import { WishCard } from '../WishCard';

export const Wishlist = () => {
  // Données factices pour tester
  const wishlistData = [
    {
      id: 1,
      titre: 'Wish 1',
      description: 'Description 1',
      reference: 'Reference 1',
      categorie: 'Category 1',
      isCurrentUser: true
    },
    {
      id: 2,
      piklink: 'https://example.com/image2.jpg',
      titre: 'Wish 2',
      description: 'Description 2',
      reference: 'Reference 2',
      categorie: 'Category 2',
      isCurrentUser: true
    },
    // Ajoutez d'autres données factices ici
  ];

  const handleUpdate =()=>{
    console.log('update')
  }

  const handleDelete =()=>{
    console.log('delete')
  }

  return (
    <div className='flex flex-wrap'>
      {wishlistData.map((wish) => (
        <WishCard
          key={wish.id}
          piklink={wish.piklink}
          titre={wish.titre}
          description={wish.description}
          reference={wish.reference}
          categorie={wish.categorie}
          isCurrentUser={wish.isCurrentUser}
          onUpdate={() => handleUpdate(wish.id)} // Remplacez handleUpdate par votre fonction de mise à jour
          onDelete={() => handleDelete(wish.id)} // Remplacez handleDelete par votre fonction de suppression
        />
      ))}
    </div>
  );
};


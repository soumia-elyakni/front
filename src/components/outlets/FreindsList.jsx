import React from 'react'
import FreindCard from '../FreindCard'

export const FreindsList = () => {
  // Liste des amis fictifs
  const friends = [
    {
      _id: '1',
      username: 'John',
      birthday: '1990-01-01',
      isFriend: true,
      sexe: false
    },
    {
      _id: '2',
      username: 'Jane',
      birthday: '1995-05-10',
      isFriend: false,
      sexe: true
    },
    {
      _id: '3',
      username: 'Alex',
      birthday: '1988-12-25',
      isFriend: true,
      sexe: false
    },
    {
      _id: '3',
      username: 'Alex',
      birthday: '1988-12-25',
      isFriend: true,
      sexe: false
    },
    {
      _id: '3',
      username: 'Alex',
      birthday: '1988-12-25',
      isFriend: true,
      sexe: false
    },
    {
      _id: '3',
      username: 'Alex',
      birthday: '1988-12-25',
      isFriend: true,
      sexe: false
    }
  ];

  return (
    <div className='flex flex-wrap'>
      {friends.map((friend) => (
        <FreindCard
          key={friend._id}
          username={friend.username}
          birthday={friend.birthday}
          isFriend={friend.isFriend}
          sexe={friend.sexe}
        />
      ))}
    </div>
  );
}

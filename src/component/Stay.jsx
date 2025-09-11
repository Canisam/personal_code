import React from 'react';
import RoomsCard from './RoomsCard';
import NavBar from './NavBar';

import forestImg from '../assets/room1.png';
import mountainImg from '../assets/room2.png';
import mudImg from '../assets/room3.png';

const Stay = () => {
  const data = [
    {
      id: '1',
      imageBackgroundUrl: mudImg,
      price: 2500,                       // ← number
      heading: 'Master Suite',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatum veniam dicta minus, facere nihil earum alias...',
      roomUrl: '/Rooms/1',               // ← unique
      imageSliderUrls: [forestImg, mountainImg, mudImg],  // ← array
    },
    {
      id: '2',
      imageBackgroundUrl: mountainImg,
      price: 2567.01,
      heading: 'Deluxe Suite',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatum veniam dicta minus, facere nihil earum alias...',
      roomUrl: '/Rooms/2',
      imageSliderUrls: [forestImg, mountainImg, mudImg],
    },
    {
      id: '3',
      imageBackgroundUrl: forestImg,
      price: 3800,
      heading: 'Family Suite',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatum veniam dicta minus, facere nihil earum alias...',
      roomUrl: '/Rooms/3',
      imageSliderUrls: [forestImg, mountainImg, mudImg],
    },
  ];

  return (
    <>
      <NavBar />
      <RoomsCard data={data} />
    </>
  );
};

export default Stay;

import React from 'react';
import { iconUrlFromCode } from '../services/weatherServices';

function Forcast({ title, items }) {
  // Check if items is an array before mapping over it
  if (!Array.isArray(items)) {
    console.error('items is not an array:', items);
    return null; // Or display an appropriate message if needed
  }

  console.log('items:', items);

  return (
    <div>
      <div className='flex items-center mt-6 justify-start'>
        <p className='text-white font-medium uppercase'>
          {title}
        </p>
      </div>
      <hr className='my-2' />
      <div className='flex flex-row item-center justify-between text-white'>
        {items.map((item) => (
          <div className='flex flex-col items-center justify-center' key={item.title}>
            <p className='font-light text-sm'>{item.title}</p>
            <img src={iconUrlFromCode(item.icon)} className='w-20 my-1' alt='' />
            <p className='font-medium'>{`${(item.temp-273.15).toFixed()}°C`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forcast;
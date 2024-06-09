import React, { useState } from 'react';
import { UilSearchAlt, UilLocationPinAlt} from '@iconscout/react-unicons';



function Input({setQuery}) {
  const [city,setCity] = useState('');
  const getWeather = () => {
    setQuery({q:city});
  }
  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row justify-center item-center w-3/4 space-x-4'>
            <input type="text" placeholder='Search for City...' className='text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase' 
            onChange={(e)=>{setCity(e.target.value)}}/>
            <UilSearchAlt size={40} className='text-white cursor-pointer justify-center transition ease-out hover:scale-125' onClick={getWeather}/>
            <UilLocationPinAlt size={40} className='text-white cursor-pointer justify-center transition ease-out hover:scale-125' />
        </div>
        <div className='flex flex-row w-1/4 item-center justify-center'>
            <button name='metric' className='text-xl text-white font-light'>°C</button>
            <p className='text-xl text-white mx-1 my-1.5'>|</p>
            <button name='imperial' className='text-xl text-white font-light'>°F</button>
        </div>
    </div>
  )
}

export default Input
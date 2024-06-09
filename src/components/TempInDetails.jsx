import React from 'react';
import {iconUrlFromCode,formateToLocalTime}  from '../services/weatherServices';
import {
    UilSun,
    UilWind,
    UilTemperature,
    UilTear,
    UilSunset
} from '@iconscout/react-unicons'
function TempInDetails({weather:{details,icon,temp,
    feels_like,humidity,speed,sunrise,sunset,temp_max,temp_min,timwzone}}) {
  return (
    <div>
        <div className='flex flex-row items-center justify-center py-6 text-xl text-cyan-300'>
            <p>{details}</p>
        </div>
        <div className='flex flex-row item-center justify-between text-white py-3'>
            <img src={iconUrlFromCode(icon)} alt="sun" 
            className='w-20' />
            <p className='flex flex-row text-white text-5xl'>{`${temp}°`}</p>
            <div className='flex flex-col items-center space-y-2'>
                <div className='flex text-sm font-light item-center justify-center'>
                    <UilTemperature size={18} className='mx-1' />
                    Feels Like: <span className='font-medium ml-1'>{`${feels_like}°`}</span>
                </div>
                <div className='flex text-sm font-light item-center justify-center'>
                    <UilTear size={18} className='mx-1' />
                    Humidity: <span className='font-medium ml-1'>{`${humidity}°`}</span>
                </div>
                <div className='flex text-sm font-light item-center justify-center'>
                    <UilWind size={18} className='mx-1' />
                    Wind Speed: <span className='font-medium ml-1'> {`${speed}Km/hr`} </span>
                </div>
            </div>
        </div>
        <div className='flex flex-row item-center justify-center space-x-2 text-white text-sm py-3'>
            <UilSun />
            <p className='font-light'>
                Rise: <span className='font-medium'>{formateToLocalTime(sunrise)}</span>
            </p>
            <p className='font-light'>|</p>
            <UilSunset />
            <p className='font-light'>
                Set: <span className='font-medium'>{formateToLocalTime(sunset)}</span>
            </p>
            <p className='font-light'>|</p>
            <UilSun />
            <p className='font-light'>
                High: <span className='font-medium'>{`${temp_max}°C`}</span>
            </p>
            <p className='font-light'>|</p>
            <UilSun />
            <p className='font-light'>
                Low: <span className='font-medium'>{`${temp_min}°C`}</span>
            </p>
        </div>
    </div>
  )
}

export default TempInDetails
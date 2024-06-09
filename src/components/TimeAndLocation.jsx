import React from 'react'
import { formateToLocalTime } from '../services/weatherServices'
function TimeAndLocation({weather:{dt,timezone, name, country}}) {
  return (
    <div>
        <div className='flex flex-col items-center justify-center my-6'>
            <p className='text-white text-xl font-extralight'>
                {formateToLocalTime(dt,timezone)}
            </p>
        </div>
        <div className='flex flex-col items-center justify-center my-3'>
            <p className='text-white text-3xl font-medium'>
              {`${name},${country}`}
            </p>
        </div> 
        <div className='flex flex-col items-center justify-center my-5' id='mapDiv'></div>
    </div>
  
  )
}

export default TimeAndLocation
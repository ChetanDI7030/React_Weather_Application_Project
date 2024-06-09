import React from 'react'

function TopBar({setQuery}) {
    const citys = [
        {
            id: 1,
            name:'Pune'
        },
        {
            id: 2,
            name:'Mumbai'
        },
        {
            id: 3,
            name:'Delhi'
        },
        {
            id: 4,
            name:'bangalore'
        }       
        ,{
            id: 5,
            name:'Nagpur'
        },
    ]
  return (
    <div className='flex items-center justify-around my-6'>
        {citys.map((city) => (
            <button key={city.id} className='text-white text-lg font-medium' onClick={()=>setQuery({q:city.name})}>
                {city.name}
            </button>
        ))}
    </div>
  )
}

export default TopBar
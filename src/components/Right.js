import React from 'react'

function Right() {
  return (
    <div className='m-6 mt-16  w-[50%] '>
      <div className='flex flex-row m-2 col-span-1  justify-between w-[85%]'>
        <div className='flex flex-row space-x-5'>
          <img className='w-12 h-12 object-cover rounded-full' src="https://pbs.twimg.com/profile_images/1561604184289558529/Bq62M5zI_400x400.jpg" />
          <div className='text-xs flex flex-col mt-2'>
            <p className='text-xs font-semibold'>luispinot99</p>
            <p className='text-xs font-light'>Luis Pinot</p>
          </div>  
        </div>  
        <p className='text-xs font-semibold text-sky-500 mt-4'>Cambiar </p>
      </div>
     
      <div className='mt-5'>
          <div className='flex flex-row justify-between'>
            <p className='text-xs font-light'>Sugerencias para ti</p>
            <p className='text-xs  font-medium'>Ver todo</p>
          </div>
      </div>
    </div>
  )
}

export default Right
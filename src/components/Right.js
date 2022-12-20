import React from 'react'

function Right() {
  const cantidad = [1,2,3,4]

  return (
    <div className='m-6 mt-9 hidden lg:inline w-[50%] '>
      <div className='flex flex-row m-2 col-span-1  justify-between '>
        <div className='flex flex-row space-x-5'>
          <img className='w-14 h-14 object-cover rounded-full' src="https://pbs.twimg.com/profile_images/1561604184289558529/Bq62M5zI_400x400.jpg" />
          <div className=' flex flex-col mt-2'>
            <p className='text-sm font-semibold'>luispinot99</p>
            <p className='text-sm font-light'>Luis Pinot</p>
          </div>  
        </div>  
        <p className='text-xs font-semibold text-sky-500 mt-4'>Cambiar </p>
      </div>
     
      <div className='mt-5'>
          <div className='flex flex-row justify-between'>
            <p className='text-sm font-semibold text-gray-600'>Sugerencias para ti</p>
            <p className='text-xs  font-medium'>Ver todo</p>
          </div>
          <div className='space-y-4 mt-2'>
          
            {cantidad.map(()=>(
               <div className='flex  flex-row justify-between  '>
               <div className='flex flex-row space-x-4'>
                 <img className='w-9 h-9 rounded-full cursor-pointer' src="https://pbs.twimg.com/profile_images/1561604184289558529/Bq62M5zI_400x400.jpg" />
                 <div className='flex flex-col'>
                     <p className='text-sm cursor-pointer'>Nombre</p>
                     <p className='text-xs text-gray-500'>Alguiren y x cuentas siguen</p>
                 </div>
                 
               </div>
               <p className='text-xs mt-2 text-sky-500 hover:text-sky-600'>Seguir</p>
             </div>
            ))}

          </div>

      </div>
      <p>
        
      </p>
    </div>
  )
}

export default Right
import React from 'react'
import Left from './Left'

import Right from './Right'


function Feed() {
  return (
    <div className=' col-span-4 w-full flex flex-row'>
        <div className='w-3/3 flex flex-row ml-[3%] sm:ml-[5%] md:ml-[8%] lg:ml-[2%] xl:ml-[14%] '>
       
        <Left />
        <Right />
        </div>

    </div>
  )
}

export default Feed
import React from 'react'

function SidebarRow({Icon, Title}) {
  return (
    <div className='flex flex-row space-x-3 '>
        <Icon className='w-7 h-7 text-black' />
        <p className='mt-1 '>{Title}</p>
    </div>
  )
}

export default SidebarRow
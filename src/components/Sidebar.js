import React from 'react'
import {VideoCameraIcon, HomeIcon, MagnifyingGlassIcon, ChatBubbleLeftEllipsisIcon, HeartIcon, PlusIcon, InformationCircleIcon , Bars3Icon} from '@heroicons/react/24/outline'

import SidebarRow from './SidebarRow'
function Sidebar() {
  return (
    <div className='sticky top-0 col-span-1 w-[70px] xl:w-[72%] justify-between flex flex-col h-screen text-sm border-r-[.5px] border-r-gray-200 bg-white'>
       <div className='ml-2'>
       <img className='hidden mt-9 ml-3 w-[50%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png " />
        <div className='ml-4 mt-10 space-y-7 '>
            <SidebarRow Icon={HomeIcon} Title="Inicio" />
            <SidebarRow Icon={MagnifyingGlassIcon} Title="Busqueda" />
            <SidebarRow Icon={InformationCircleIcon} Title="Explorar" />
            <SidebarRow Icon={VideoCameraIcon} Title="Reels" />
            <SidebarRow Icon={ChatBubbleLeftEllipsisIcon} Title="Mensajes" />
            <SidebarRow Icon={HeartIcon} Title="Notificaciones" />
            <div className='flex flex-row space-x-3 cursor-pointer'>
                <div className='border-2 rounded border-black w-fit h-fit'>
                  <PlusIcon className='w-5 h-5 '/>
                </div>
                <p className='text-base hidden xl:inline' >Crear</p>
            </div>
            <div className='flex flex-row space-x-3 cursor-pointer'>
            <img className='w-7 h-7 object-cover rounded-full' src="https://pbs.twimg.com/profile_images/1561604184289558529/Bq62M5zI_400x400.jpg" />
                <p className='text-base hidden xl:inline'>Perfil</p>
            </div>
            
        </div>
       </div>
        <div className=' m-4 mb-8 flex flex-row space-x-3 cursor-pointer'>
            <Bars3Icon  className='w-7 h-7' />
            <p className='mt-1 hidden xl:inline'>Más</p>
        </div>
        

       
    </div>
  )
}

export default Sidebar
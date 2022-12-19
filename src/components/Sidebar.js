import React from 'react'
import { HomeIcon, MagnifyingGlassIcon, ChatBubbleLeftEllipsisIcon, HeartIcon, PlusIcon, InformationCircleIcon , Bars3Icon} from '@heroicons/react/24/outline'

import SidebarRow from './SidebarRow'
function Sidebar() {
  return (
    <div className='sticky top-0 col-span-1 w-[72%] justify-between flex flex-col h-screen text-sm border-r-[.5px] border-r-gray-200 bg-white'>
       <div>
       <img className='mt-9 ml-5 w-[43%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png " />
        <div className='ml-4 mt-10 space-y-8 '>
            <SidebarRow Icon={HomeIcon} Title="Inicio" />
            <SidebarRow Icon={MagnifyingGlassIcon} Title="Busqueda" />
            <SidebarRow Icon={InformationCircleIcon} Title="Explorar" />
            <SidebarRow Icon={ChatBubbleLeftEllipsisIcon} Title="Mensajes" />
            <SidebarRow Icon={HeartIcon} Title="Notificaciones" />
            <div className='flex flex-row space-x-3'>
                <PlusIcon className='w-7 h-7'/>
                <p >Crear</p>
            </div>
        </div>
       </div>
        <div className=' m-4 mb-8 flex flex-row space-x-3'>
            <Bars3Icon  className='w-7 h-7' />
            <p className='mt-1'>Más</p>
        </div>
    </div>
  )
}

export default Sidebar
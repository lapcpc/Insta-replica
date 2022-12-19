import React from 'react'
import { EllipsisHorizontalIcon, HeartIcon, ChatBubbleOvalLeftIcon, ShareIcon, BookmarkIcon, FaceSmileIcon} from '@heroicons/react/24/outline'
function Post() {
  return (
    <div className='mt-5 rounded-lg border border-slate-300 bg-white'>
        <div className='p-2 flex flex-row justify-between'>
            <div className='flex flex-row space-x-2'>
            <img className='rounded-full h-10 w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVO4NvzDaxkFj5PFhS2CPo-dR_3Or4I49YdQ&usqp=CAU" />
            <p className='mt-3 text-xs font-semibold'>Grant Cardone</p>
            </div>
            <EllipsisHorizontalIcon className='h-8 w-8 m-2' />
        </div>
        <img className=' object-cover w-full h-[400px]' src="https://m.media-amazon.com/images/I/81SbC-kLmXL.jpg" />
        <div className='flex flex-row justify-between p-2'>
            <div className='flex flex-row space-x-2'>
                <HeartIcon className='w-6 h-6' />
                <ChatBubbleOvalLeftIcon className='w-6 h-6' />
                <ShareIcon className='w-6 h-6' />
            </div>
            <BookmarkIcon className='w-6 h-6' />


        </div>
        <div className='w-full p-2'>
            <p className='text-xs'>15,214 Me gusta</p>
        </div>
        <div className='w-full p-2'>
            <p className='text-xs'><b>Grant Cardone</b>If you want to make 2022 your best year ever, then read this short caption for 1 minute</p>

        </div>
        <hr className='w-[90%] mx-auto'/>
        <div className='flex flex-row justify-between p-2'>
            <div className='flex flex-row w-full'>
                <FaceSmileIcon className='  w-6 h-6 ' />
                <input className=' w-full' />
            </div>
            <p className='w-fit text-sm text-blue-300'>Publicar</p>
        </div>
        
    </div>
  )
}

export default Post
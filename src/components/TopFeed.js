import React from 'react'
import "../App.css"
function TopFeed() {
    const avatars= ["https://digitalasset.intuit.com/content/dam/intuit/pcg/en_ca/profile/web/image/photos/grinning-man-with-coffee-image-profile-ca-desktop.jpg","https://digitalasset.intuit.com/content/dam/intuit/pcg/en_ca/profile/web/image/photos/grinning-man-with-coffee-image-profile-ca-desktop.jpg","https://digitalasset.intuit.com/content/dam/intuit/pcg/en_ca/profile/web/image/photos/grinning-man-with-coffee-image-profile-ca-desktop.jpg","https://digitalasset.intuit.com/content/dam/intuit/pcg/en_ca/profile/web/image/photos/grinning-man-with-coffee-image-profile-ca-desktop.jpg","https://digitalasset.intuit.com/content/dam/intuit/pcg/en_ca/profile/web/image/photos/grinning-man-with-coffee-image-profile-ca-desktop.jpg","https://digitalasset.intuit.com/content/dam/intuit/pcg/en_ca/profile/web/image/photos/grinning-man-with-coffee-image-profile-ca-desktop.jpg" ]
    return (
    <div className=' overflow-auto flex flex-row space-x-4 pl-4 py-4 mt-6 bg-white rounded-lg border border-slate-300'>
        {avatars.map((avatar)=>(
            <div className='flex flex-col space-x-2'>
                
                <div className='bg-gradient p-0.5 rounded-full w-fit h-fit'> 
                    <img src={avatar} className=" border-2 border-white object-cover w-14 h-14 rounded-full" />
                </div>
            <p className='text-xs text-center'>Nombre</p>
            </div>
        ))}
    </div>
  )
}

export default TopFeed
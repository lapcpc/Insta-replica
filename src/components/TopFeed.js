import React from 'react'

function TopFeed() {
    const avatars= ["https://digitalasset.intuit.com/content/dam/intuit/pcg/en_ca/profile/web/image/photos/grinning-man-with-coffee-image-profile-ca-desktop.jpg","https://digitalasset.intuit.com/content/dam/intuit/pcg/en_ca/profile/web/image/photos/grinning-man-with-coffee-image-profile-ca-desktop.jpg","https://digitalasset.intuit.com/content/dam/intuit/pcg/en_ca/profile/web/image/photos/grinning-man-with-coffee-image-profile-ca-desktop.jpg","https://digitalasset.intuit.com/content/dam/intuit/pcg/en_ca/profile/web/image/photos/grinning-man-with-coffee-image-profile-ca-desktop.jpg","https://digitalasset.intuit.com/content/dam/intuit/pcg/en_ca/profile/web/image/photos/grinning-man-with-coffee-image-profile-ca-desktop.jpg","https://digitalasset.intuit.com/content/dam/intuit/pcg/en_ca/profile/web/image/photos/grinning-man-with-coffee-image-profile-ca-desktop.jpg" ]
    return (
    <div className=' overflow-auto flex flex-row space-x-4 pl-4 py-4 mt-6 bg-white rounded-lg border border-slate-300'>
        {avatars.map((avatar)=>(
            <div className='flex flex-col space-x-2'>
                <img src={avatar} 
            className=" object-cover my-1 w-12 h-12 rounded-full" />
            <p className='text-xs text-center'>Nombre</p>
            </div>
        ))}
    </div>
  )
}

export default TopFeed
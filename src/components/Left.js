import React from 'react'
import Post from './Post'
import TopFeed from './TopFeed'

function Left() {
  return (
    <div className=' w-[80%] '>
        <TopFeed />
        <Post />
    </div>
  )
}

export default Left
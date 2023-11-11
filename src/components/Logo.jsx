import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div className='h-[50px] w-[50px]'>
    <img src="./Logo.png" alt="Logo" />
    </div>
  )
}

export default Logo
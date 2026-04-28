import React from 'react'

export default function CompChlidren({children}) {
  return (
    <div className='bg-yellow-600 border-2 p-5 flex justify-center content-center'>
        {children}
    </div>
  )
}

import React from 'react'

export default function CardChildren({children, titulo}) {
  return (
    <div className='bg-red-600 border-2 p-5 flex justify-center content-center'>
        <h1>{titulo}</h1>
        {children}
        <button className='button-simple'>Son un botón simple</button>
    </div>
  )
}

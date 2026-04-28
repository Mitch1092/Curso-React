import React from 'react'

export default function UsuarioComponent({nombre, edad}) {
  return (
    <div className='bg-green-600'>
        <p>{nombre}</p>
        <p>{edad}</p>
    </div>
  )
}

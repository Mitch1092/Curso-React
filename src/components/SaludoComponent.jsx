import React from 'react'

export default function SaludoComponent({nombre, apellido}) {
  return (
    <div className='bg-blue-600 text-4xl'>
        Hola desde un componente {nombre} {apellido}
    </div>
  )
}

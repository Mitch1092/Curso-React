import React from 'react'

export default function SaludoComponentProps(props) {
  return (
    <div className='bg-blue-950 text-5xl'>
        Hola desde un componente con props 
        componente: {props.nombre + ' ' + props.apellido}
    </div>
  )
}

import React from 'react'

export default function CompProps(props) {
  return (
    <div className='bg-emerald-600 text-6xl text-center'>
        Componente extra {props.titulo}
        <button className='button-simple'>{props.boton}</button>

    </div>
  )
}

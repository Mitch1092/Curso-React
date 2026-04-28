import React from 'react'

export default function MangaComponent(props) {
  return (
    <div className=' bg-amber-300 gap-y-20'>
        <div className='bg-fuchsia-500 text-3xl border-2 rounded-2xl text-center'>
            <h1>{props.title}</h1>
            <h1>Precio: {props.precio}</h1>
            <h1>ID: {props.id}</h1>
        </div>
    </div>
  )
}

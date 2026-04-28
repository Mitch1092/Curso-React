import React from 'react'
import { useParams } from 'react-router-dom'

export default function ParamView() {
    const parametro = useParams()
    const id = parametro.id
    return (
        <>
            <h1 className='text-5xl'>Parametro View {id}</h1>
        </>
  )
}

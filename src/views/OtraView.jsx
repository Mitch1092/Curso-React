import React from 'react'
import { Link } from 'react-router-dom'

export default function OtraView() {
  return (
    <>
        <h1 className='text-5xl'>Otra View</h1>
        <Link to={'/extra'}>
            Ir a extra view
        </Link>
    </>
  )
}

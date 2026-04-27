import React from 'react'
import { Link } from 'react-router-dom'

export default function AppView() {
  return (
    <>
        <h1 className='text-5xl'>App View</h1>
        <Link to={'/otra'}>
            Ir a otra página
        </Link>
    </>
  )
}

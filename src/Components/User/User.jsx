import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams()
  return (
    <>
      <div
       className='w-full h-[50vh] relative px-12'>
      <h1 className='mt-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[2vw] font-bold uppercase text-orange-700'> <span className='text-black'>Result:</span> {userid}</h1>
      </div>
    </>
  )
}

export default User
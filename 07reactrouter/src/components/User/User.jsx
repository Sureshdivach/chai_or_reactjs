import React from 'react'
import { useParams } from 'react-router-dom'

export const User = () => {
    const {userId}=useParams()
  return (
    <div className='bg-gray-600 text-white p-4 '>User:{userId}</div>
  )
}

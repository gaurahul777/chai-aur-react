import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const { userid } = useParams();
  return (
      <div className='bg-red-300 text-3xl px-4 py-2'>User:{ userid}</div>  
  )
}

export default User
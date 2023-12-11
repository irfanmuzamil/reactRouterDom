import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {id} =useParams()
  return (
    <div className='bg-slate-800 text-center text-white p-5 S'>User: {id}</div>
  )
}

export default User
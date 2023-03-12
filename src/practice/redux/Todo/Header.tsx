import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='p-5 flex gap-3 bg-gray-200'>
        <Link className= {"hover:underline"} to={"/redux/todo"}> Todo </Link>
        <Link className= {"hover:underline"} to={"/redux/users"}> Users </Link>
    </div>
  )
}

export default Header
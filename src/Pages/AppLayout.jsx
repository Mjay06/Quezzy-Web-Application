import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './AppLayout.css'

export default function AppLayout() {
  return (
    <div className='p-6'>
      <div className='flex justify-between mt-10'>
        <NavLink to={"home"}><img className='bg-white p-3 rounded-full' src="/homeicon.svg" /></NavLink>
        <img src="/logo.svg" />
      </div>
      <Outlet />
    </div>
  )
}


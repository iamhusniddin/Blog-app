
import React from 'react'
import { Outlet } from "react-router-dom"
import Navbar from '../components/Navbar'

function Layout() {
  return (
    <>
        <header className='  py-[20px] shadow-sm'>
            <Navbar />
        </header>

        <main className='w-full mx-auto max-w-[800px] mt-[50px]'> 
           <div > 
             <Outlet />
             
           </div>
        </main>
        
        
    </>
  )
}

export default Layout
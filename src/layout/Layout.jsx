
import React from 'react'
import { Outlet } from "react-router-dom"
import Navbar from '../components/Navbar'

function Layout() {
  return (
    <>
        <header className=' px-[150px] py-[20px] shadow-sm'>
            <Navbar />
        </header>

        <main className='w-full mx-auto max-w-[800px] mt-[50px]'> 
           <div className='bg-yellow-400'> 
             <Outlet /> --- bu outlet
             
           </div>
        </main>
        
        
    </>
  )
}

export default Layout
import React from 'react'
import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <>
        <header className='sticky top-0 px-[100px] shadow-sm'>
            <nav className=' py-[20px]'>
              <div className='flex justify-between items-center'>
                <img className='cursor-pointer' src="https://teletype-blog-app.vercel.app/assets/logo-de927c5f.svg" alt="blogImg" />
                <button className='bg-blue-600 text-white py-[8px] px-[15px] rounded-lg text-lg hover:bg-blue-400 active:bg-blue-800 '>
                    Sign in
                </button>
              </div>
            </nav>
        </header>

        <main className='w-full mx-auto max-w-[800px]'> 
           <div className='bg-yellow-400'> 
             <Outlet /> --- bu outlet
           </div>
        </main>

        
    </>
  )
}

export default Layout
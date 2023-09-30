import { Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRef } from "react";
import { useEffect } from "react";

function SignUp() {

  const navigate = useNavigate()
  const [showPass1, setShowPass1] = useState(false)
  const [showPass2, setShowPass2] = useState(false)
  const pasRef1 = useRef()
  const pasRef2 = useRef()


  

  useEffect(()=>{
    if(showPass1) {
      pasRef1.current.type = "text";
    } else {
      pasRef1.current.type = 'password'
    }
    if(showPass2) {
      pasRef2.current.type = "text";
    } else {
      pasRef2.current.type = 'password'
    }
  }, [showPass1, showPass2])

  

  return (
    <div>
      <div className='h-screen  w-full flex items-center justify-center flex-col'>
      <div className='w-full max-w-[450px] shadow-md bg-white p-7 rounded-xl'>
        <FormControl>
          <Text fontSize='3xl' className='font-bold text-blue-600 text-center mb-[30px]'>Sign up</Text>
          <FormLabel htmlFor='name'>Full name</FormLabel>
          <Input id='name' type='text' />
          <FormLabel className='mt-[20px]' htmlFor='username'>Username</FormLabel>
          <Input id='username' type='text' />
          {/* <FormLabel className='mt-[20px]' htmlFor='password'>Password</FormLabel>
          <Input id='password' type='password' />
          <FormLabel className='mt-[20px]' htmlFor='r-password'>Reapet Password</FormLabel>
          <Input id='r-password' type='password' /> */}


          <div className="relative">
          <FormLabel className="mt-[20px]" htmlFor="password">
            Password
          </FormLabel>
          <Input ref={pasRef1} id="password" type="password" />
          {
            showPass1 ? (
              <ViewOffIcon onClick={()=> setShowPass1(!showPass1)} className="cursor-pointer text-[18px] absolute top-[44px] right-[17px] "/>) : (
                <ViewIcon onClick={()=> setShowPass1(!showPass1)} className="cursor-pointer text-[18px] absolute top-[44px] right-[17px] "/> 
              )
          }
          </div>
          
          <div className="relative">
          <FormLabel className="mt-[20px]" htmlFor='r-password'>
            Reapet Password
          </FormLabel>
          <Input ref={pasRef2} id="r-password" type="password" />
          {
            showPass2 ? (
              <ViewOffIcon onClick={()=> setShowPass2(!showPass2)} className="cursor-pointer text-[18px] absolute top-[44px] right-[17px] "/>) : (
                <ViewIcon onClick={()=> setShowPass2(!showPass2)} className="cursor-pointer text-[18px] absolute top-[44px] right-[17px] "/> 
              )
          }
          </div>


          <Button className='w-full mt-[30px]' colorScheme='blue'>Sign up</Button>
        </FormControl>
      </div>
      <Text fontSize='xl' className='mt-[30px] text-center mb-[40px]'>If you already have an account? <u onClick={()=> navigate("/sign-in")} className='ml-1 text-blue-500 cursor-pointer hover:text-blue-700 active:text-blue-300'>Login</u></Text>
    </div>
    </div>
  )
}

export default SignUp
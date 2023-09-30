import { Button, FormControl, FormLabel, Input, Text, useToast } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";
import useLoader from "../../store/zustand";



function SignIn() {
  const navigate = useNavigate();
  const { isLoading, startLoading, endLoading } = useLoader()
  const toast = useToast()
  const [showPass, setShowPass] = useState(false)
  const pasRef = useRef()

  
  

  useEffect(()=>{
    if(showPass) {
      pasRef.current.type = "text";
    } else {
      pasRef.current.type = 'password'
    }
  }, [showPass])

  const signInFunc = ()=>{
    startLoading();
    setTimeout(()=>{
      endLoading(true)
    },2000)
    toast({
      title:'Hello bro',
      status:'success',
      position:'top',
      variant:'top-accent'
    })
  }

  // if(signInFunc) {
  //   toast({
  //     title:'Hello bro',
  //     status:'success',
  //     position:'top',
  //     variant:'top-accent'
  //   })
  // } else {
  //   toast({
  //     title:'Bye bro',
  //     status:'error',
  //     position:'top',
  //     variant:'top-accent'
  //   })
  // }


  return (
    <div className="h-screen  w-full flex items-center justify-center flex-col">
      <div className="w-full max-w-[450px] shadow-md bg-white p-7 rounded-xl">
        <FormControl>
          <Text
            fontSize="3xl"
            className="font-bold text-blue-600 text-center mb-[30px]">
            Sign in
          </Text>
          <FormLabel htmlFor="name">Full name</FormLabel>
          <Input id="name" type="text" />
          <div className="relative">
          <FormLabel className="mt-[20px]" htmlFor="password">
            Password
          </FormLabel>
          <Input ref={pasRef} id="password" type="password" />
          {
            showPass ? (
              <ViewOffIcon onClick={()=> setShowPass(!showPass)} className="cursor-pointer text-[18px] absolute top-[44px] right-[17px] "/>) : (
                <ViewIcon onClick={()=> setShowPass(!showPass)} className="cursor-pointer text-[18px] absolute top-[44px] right-[17px] "/> 
              )
          }
          </div>

          <Button isLoading={isLoading} onClick={()=> signInFunc()} className="w-full mt-[30px]" colorScheme="blue">
            Sign in
          </Button>
        </FormControl>
      </div>
      <Text fontSize="xl" className="mt-[30px] text-center mb-[40px]">
        If you haven't an account?{" "}
        <u
          onClick={() => navigate("/sign-up")}
          className="ml-1 text-blue-500 cursor-pointer hover:text-blue-700 active:text-blue-300"
        >
          Register new account
        </u>
      </Text>
    </div>
  );
}

export default SignIn;

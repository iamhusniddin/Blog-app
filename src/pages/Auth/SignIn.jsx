import {
  Button,
  FormControl,
  FormLabel,
  GridItem,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { ArrowBackIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";
import useLoader from "../../store";

function SignIn() {
  const navigate = useNavigate();
  const { isLoading, startLoading, endLoading } = useLoader();
  const toast = useToast();
  const [showPass, setShowPass] = useState(false);
  const pasRef = useRef();
  const [isInvalidUser, setIsInvalidUser] = useState(true);

  useEffect(() => {
    if (showPass) {
      pasRef.current.type = "text";
    } else {
      pasRef.current.type = "password";
    }
  }, [showPass]);

  const signInFunc = (e) => {
    const [username, password] = e.target.querySelectorAll("input");
    e.preventDefault();
    setIsInvalidUser( /^[@_a-zA-Z]+$/.test(username.value))
    
    if (isInvalidUser== true) {
      startLoading();
      setTimeout(() => {
        endLoading(true);
        navigate('/')
      }, 2000);
      toast({
        title: "Succesful",
        status: "success",
        position: "top",
        variant: "top-accent",
      });
    } else {
      setIsInvalidUser((p) => ({
        error:'',
        username: /^[@_a-zA-Z]+$/.test(username.value),
      }));
      startLoading();
      setTimeout(() => {
        endLoading(true);
      }, 3000);
      toast({
        title: "Username or password is invalid",
        status: "error",
        position: "top",
        variant: "top-accent",
      });
    }
  };

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
        <div className="relative">
          <ArrowBackIcon
            onClick={() => navigate("/")}
            className="cursor-pointer text-[25px] absolute left-0 top-[50%] -translate-y-[50%] hover:text-blue-700"
          />
          <Text
            fontSize="3xl"
            className="font-bold text-blue-600 text-center mb-[30px]"
          >
            Sign in
          </Text>
        </div>
        <form onSubmit={(e) => signInFunc(e)}>
          <FormLabel htmlFor="name">User name</FormLabel>
          <Input
            onChange={(e) =>
              setIsInvalidUser(/^[@_a-zA-Z]+$/.test(e.target.value))
            }
            isInvalid={!isInvalidUser}
            required
            id="name"
            type="text"
          />
          {isInvalidUser == false && <p className="text-[15px] p-1 text-red-500">Invalide username</p>}
          <div className="relative">
            <FormLabel className="mt-[20px]" htmlFor="password">
              Password
            </FormLabel>
            <Input required ref={pasRef} id="password" type="password" />
            {showPass ? (
              <ViewOffIcon
                onClick={() => setShowPass(!showPass)}
                className="cursor-pointer text-[18px] absolute top-[44px] right-[17px] "
              />
            ) : (
              <ViewIcon
                onClick={() => setShowPass(!showPass)}
                className="cursor-pointer text-[18px] absolute top-[44px] right-[17px] "
              />
            )}
          </div>

          <Button
            isLoading={isLoading}
            type="submit"
            className="w-full mt-[30px]"
            colorScheme="blue"
          >
            Sign in
          </Button>
        </form>
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

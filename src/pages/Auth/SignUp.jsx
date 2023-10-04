import { Button, FormControl, FormLabel, Input, Text, useToast } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon, ArrowBackIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";
import useLoader from "../../store";

function SignUp() {
  const navigate = useNavigate();
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const toast = useToast();
  const { isLoading, startLoading, endLoading } = useLoader();
  const [isInvalidUser, setIsInvalidUser] = useState(true);
  const pasRef1 = useRef();
  const pasRef2 = useRef();

  useEffect(() => {
    if (showPass1) {
      pasRef1.current.type = "text";
    } else {
      pasRef1.current.type = "password";
    }
    if (showPass2) {
      pasRef2.current.type = "text";
    } else {
      pasRef2.current.type = "password";
    }
  }, [showPass1, showPass2]);



  const signUpFunc = (e) => {
    const [fullname, username, password, rPassword] = e.target.querySelectorAll("input");
    e.preventDefault();
    setIsInvalidUser( /^[@_a-zA-Z]+$/.test(username.value))
    
    if (isInvalidUser== true) {
      console.log(fullname.value, username.value, password.value, rPassword.value);
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

  return (
    <div>
      <div className="h-screen  w-full flex items-center justify-center flex-col">
        <div className="w-full max-w-[450px] shadow-md bg-white p-7 rounded-xl">
          
            <div className="relative">
              <ArrowBackIcon onClick={()=>navigate('/')} className="cursor-pointer text-[25px] absolute left-0 top-[50%] -translate-y-[50%] hover:text-blue-700"/>
              <Text
                fontSize="3xl"
                className="font-bold text-blue-600 text-center mb-[30px]"
              >
                Sign up
              </Text>
            </div>
            <form onSubmit={(e) => signUpFunc(e)}>
            <FormLabel htmlFor="name">Full name</FormLabel>
            <Input id="name" type="text" />
            <FormLabel htmlFor="username">User name</FormLabel>
          <Input
            onChange={(e) =>
              setIsInvalidUser(/^[@_a-zA-Z]+$/.test(e.target.value))
            }
            isInvalid={!isInvalidUser}
            required
            id="username"
            type="text"
          />
          {isInvalidUser == false && <p className="text-[15px] p-1 text-red-500">Invalide username</p>}
            

            <div className="relative">
              <FormLabel className="mt-[20px]" htmlFor="password">
                Password
              </FormLabel>
              <Input ref={pasRef1} id="password" type="password" />
              {showPass1 ? (
                <ViewOffIcon
                  onClick={() => setShowPass1(!showPass1)}
                  className="cursor-pointer text-[18px] absolute top-[44px] right-[17px] "
                />
              ) : (
                <ViewIcon
                  onClick={() => setShowPass1(!showPass1)}
                  className="cursor-pointer text-[18px] absolute top-[44px] right-[17px] "
                />
              )}
            </div>

            <div className="relative">
              <FormLabel className="mt-[20px]" htmlFor="r-password">
                Reapet Password
              </FormLabel>
              <Input ref={pasRef2} id="r-password" type="password" />
              {showPass2 ? (
                <ViewOffIcon
                  onClick={() => setShowPass2(!showPass2)}
                  className="cursor-pointer text-[18px] absolute top-[44px] right-[17px] "
                />
              ) : (
                <ViewIcon
                  onClick={() => setShowPass2(!showPass2)}
                  className="cursor-pointer text-[18px] absolute top-[44px] right-[17px] "
                />
              )}
            </div>

            <Button isLoading={isLoading} type="submit" className="w-full mt-[30px]" colorScheme="blue">
              Sign up
            </Button>
          </form>
        </div>
        <Text fontSize="xl" className="mt-[30px] text-center mb-[40px]">
          If you already have an account?{" "}
          <u
            onClick={() => navigate("/sign-in")}
            className="ml-1 text-blue-500 cursor-pointer hover:text-blue-700 active:text-blue-300"
          >
            Login
          </u>
        </Text>
      </div>
    </div>
  );
}

export default SignUp;

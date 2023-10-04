import React from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.svg'

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="w-full max-w-[1300px] mx-auto px-[10px]">
        <div className="flex justify-between items-center">
          <img
            className="cursor-pointer"
            src={logo}
            alt="blogImg"
          />
          <div className="flex items-center gap-4">
          <Button onClick={() => navigate("/sign-in")} colorScheme="blue">
            Sign in
          </Button>
          <Button onClick={() => navigate("/sign-up")} colorScheme="green" >
            Sign up
          </Button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

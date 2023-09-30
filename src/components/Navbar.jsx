import React from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.svg'

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="">
        <div className="flex justify-between items-center">
          <img
            className="cursor-pointer"
            src={logo}
            alt="blogImg"
          />
          <Button onClick={() => navigate("/sign-in")} colorScheme="blue">
            Sign in
          </Button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

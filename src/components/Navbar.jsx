import React from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { AddIcon, SettingsIcon } from "@chakra-ui/icons";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="w-full max-w-[1200px] mx-auto px-[10px]">
        <div className="flex justify-between items-center">
          <img className="cursor-pointer" onClick={()=> navigate("/")} src={logo} alt="blogImg" />
          {localStorage.getItem("token") ? (
            <div className="flex items-center justify-center gap-4">
              <div className="cursor-pointer border-[2px] rounded-full flex items-center justify-center p-[3px] border-black">
                <AddIcon className="text-[18px] cursor-pointer" onClick={()=> navigate("/create-post")} />
              </div>
              <div className="h-[30px] w-[2px] bg-black"></div>
              <SettingsIcon className="set cursor-pointer text-[27px]" />
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Button onClick={() => navigate("/sign-in")} colorScheme="blue">
                Sign in
              </Button>
              <Button onClick={() => navigate("/sign-up")} colorScheme="green">
                Sign up
              </Button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

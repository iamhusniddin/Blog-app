import { ViewIcon } from "@chakra-ui/icons";
import React from "react";

function Card() {
  return (
    <div className="w-full rounded-lg p-3 border-1 border">
      <div className="w-full rounded-lg bg-slate-600  h-[200px] mb-5"></div>
      <div>
        <h2 className="card-title">💥 Frontend dasturchilari uchun Top-12 ta tekin API</h2>
        <div className="mb-[25px]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            corporis optio, fugiat voluptatibus quam, nisi suscipit repellat, quos
            iure iste illum laboriosam magnam! Perspiciatis, saepe voluptatibus
            dignissimos sint minima ea. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Minima accusantium laudantium, mollitia recusandae
            consectetur accusamus omnis vel placeat aperiam ipsam, odit explicabo
            fugiat cumque, a ducimus quos odio incidunt voluptas? 
          </p>
        </div>

        <div className="text-[17px] font-semibold mb-[10px]">
          <h3>● Abdulloh Qiyomov</h3>
        </div>

        <div className="flex gap-[15px]">

          <p className="text-slate-400">April 29, 09:33</p>
          <div className="flex items-center gap-[5px]"><ViewIcon />0</div>
        </div>

        

      </div>

    </div>
  );
}

export default Card;

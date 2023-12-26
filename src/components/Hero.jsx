import React from "react";
import DinoGame from "./DinoGame";


function Hero() {
  return (
    <section className="hero-bg relative">
   <DinoGame className=" "/>
    
      <div className=" z-50 container-wrapper mx-auto relative  "  >
        <img src="images/btc.png" alt="" className=" absolute top-[40%] sm:top-[30%]  sm:left-[6%] floating h-[50px]  sm:h-auto" />
        <img src="images/solana.png" alt="" className=" absolute top-[40%] sm:top-[30%] right-0  sm:right-[6%] floating h-[50px]  sm:h-auto" />

      
        <img
          src="images/gekotxt.png"
          alt=""
          className=" relative z-50 pt-[45%] sm:pt-[18%] sm:block hidden mx-auto h-[550px]"
        />
        <img src="images/mob-geeko.png" alt=""  className=" block sm:hidden pt-[58%] mx-auto" />
        <h2 className=" text-center relative z-40 text-lg sm:text-5xl">
        One Stop Crypto Platform
        </h2>
      </div>
    </section>
  );
}

export default Hero;

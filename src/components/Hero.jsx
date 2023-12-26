import React from "react";


function Hero() {
  return (
    <section className="hero-bg relative">
    
      <div className=" z-50 container-wrapper mx-auto relative " data-aos="fade-right"
     data-aos-offset="300" data-aos-duration="2000" 
     data-aos-easing="ease-in-sine">
        <img
          src="images/gekotxt.png"
          alt=""
          className=" relative z-50 pt-[42%] sm:pt-[13%] sm:block hidden"
        />
        <img src="images/mob-geeko.png" alt=""  className=" block sm:hidden pt-[32%] mx-auto" />
        <h2 className=" text-center relative z-40 text-lg sm:text-5xl">
        One Stop Crypto Platform
        </h2>
      </div>
    </section>
  );
}

export default Hero;

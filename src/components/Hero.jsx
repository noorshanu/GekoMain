import React from "react";
import ChromeDinoGame from "react-chrome-dino";

function Hero() {
  return (
    <section className="hero-bg relative">
      <div className="container-wrapper mx-auto relative ">
        <img
          src="images/gekotxt.png"
          alt=""
          className=" relative z-50 pt-[42%] sm:pt-[13%]"
        />
        <h2 className=" text-center relative z-40 text-lg sm:text-5xl">
        One Stop Crypto Platform
        </h2>
      </div>
    </section>
  );
}

export default Hero;

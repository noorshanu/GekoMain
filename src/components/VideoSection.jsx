import React from "react";

function VideoSection() {
  return (
    <section className=" mt-0 sm:mt-16">
      <div className=" container-wrapper mx-auto">
        <div className=" relative">
          <img src="images/video.png" alt="" className=" mx-auto w-full" />

          <video
            autoPlay
            loop
            muted
            playsInline
            className="mx-auto video-bg rounded-md  w-[60%] left-0 right-0 absolute top-[5.8%]"
          >
            <source src="images/bg-vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;

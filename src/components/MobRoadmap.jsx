
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";


// import required modules
import { Autoplay,  } from "swiper/modules";

function MobRoadmap() {
  return (
    <section className=" block sm:hidden">
    <div className="container-wrapper mx-auto relative z-50">
      <>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
       
          modules={[Autoplay, ]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <div className=" border rounded-lg border-white bg-[#08000f] p-4 m-4  ">
              <h1 className=" uppercase font-geeko text-5xl text-white text-center">
                Phase - 1{" "}
              </h1>

              <p>• Conceptualization and Initial Development</p>
              <p>• Ideation and defining the vision for Geeko Dex</p>
              <p>• Conducting deep market and technical research.</p>
              <p>• Developing the initial beta version of Geeko Dex.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className=" border rounded-lg border-white bg-[#08000f] p-4 m-4  ">
              <h1 className=" uppercase font-geeko text-5xl text-white text-center">
                Phase - 1{" "}
              </h1>

              <p>• Conceptualization and Initial Development</p>
              <p>• Ideation and defining the vision for Geeko Dex</p>
              <p>• Conducting deep market and technical research.</p>
              <p>• Developing the initial beta version of Geeko Dex.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className=" border rounded-lg border-white bg-[#08000f] p-4 m-4  ">
              <h1 className=" uppercase font-geeko text-5xl text-white text-center">
                Phase - 1{" "}
              </h1>

              <p>• Conceptualization and Initial Development</p>
              <p>• Ideation and defining the vision for Geeko Dex</p>
              <p>• Conducting deep market and technical research.</p>
              <p>• Developing the initial beta version of Geeko Dex.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className=" border rounded-lg border-white bg-[#08000f] p-4 m-4  ">
              <h1 className=" uppercase font-geeko text-5xl text-white text-center">
                Phase - 1{" "}
              </h1>

              <p>• Conceptualization and Initial Development</p>
              <p>• Ideation and defining the vision for Geeko Dex</p>
              <p>• Conducting deep market and technical research.</p>
              <p>• Developing the initial beta version of Geeko Dex.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  </section>
  )
}

export default MobRoadmap
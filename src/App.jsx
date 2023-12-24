import BuySection from "./components/BuySection"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Partners from "./components/Partners"
import Roadmap from "./components/Roadmap"
import Token from "./components/Token"
import VideoSection from "./components/VideoSection"
import WebsiteSlide from "./components/WebsiteSlide"



function App() {
 

  return (
    <>
     {/* <ChromeDinoGame className=' relative z-50' /> */}
    <Navbar/>
    <Hero/>
    <BuySection/>
    <VideoSection/>
    <div className=" mt-4 sm:mt-16">
    <Token/>
    </div>
   
    <div className=" py-2 sm:py-8 mt-2 sm:mt-[8rem]">
    <WebsiteSlide/>
    </div>
    <div className=" my-2 sm:my-[5rem]">
    <Partners/>
    </div>
    <div className="bg-t sm:my-[6rem] my-2">
    
    </div>
<div className="bg-sec">


    <div className=" my-2 sm:my-[5rem]">
   <Roadmap/>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default App

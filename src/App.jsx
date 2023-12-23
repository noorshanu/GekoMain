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
    <Navbar/>
    <Hero/>
    <BuySection/>
    <VideoSection/>
    <div className=" mt-16">
    <Token/>
    </div>
   
    <div className=" py-8 mt-[8rem]">
    <WebsiteSlide/>
    </div>
    <div className=" my-[5rem]">
    <Partners/>
    </div>
    <div className="bg-t my-[6rem]">
    
    </div>
<div className="bg-sec">


    <div className=" my-[5rem]">
   <Roadmap/>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default App

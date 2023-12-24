import React from 'react'
import Marquee from "react-fast-marquee";

function WebsiteSlide() {
  return (
    <section className=' py-5'>
 <Marquee className='' >
  <img   src="images/pro1.png" alt="" className=' px-6 h-[200px] sm:h-auto' />
  <img  src="images/pro2.png" alt="" className=' px-6  h-[200px] sm:h-auto' />
  <img   src="images/pro3.png" alt="" className=' px-6  h-[200px] sm:h-auto' />
  <img  src="images/pro2.png" alt="" className=' px-6  h-[200px] sm:h-auto' />
  <img   src="images/pro3.png" alt="" className='px-6  h-[200px] sm:h-auto' />

  <img   src="images/pro1.png" alt=""  className='px-6  h-[200px] sm:h-auto'/>

  <img   src="images/pro2.png" alt="" className=' px-6  h-[200px] sm:h-auto' />
  <img   src="images/pro3.png" alt="" className=' px-6  h-[200px] sm:h-auto' />
  <img   src="images/pro1.png" alt="" className=' px-6  h-[200px] sm:h-auto'/>
  <img   src="images/pro2.png" alt=""  className=' px-6  h-[200px] sm:h-auto'/>
  <img   src="images/pro3.png" alt="" className=' px-6  h-[200px] sm:h-auto' />
  <img   src="images/pro1.png" alt=""  className=' px-6  h-[200px] sm:h-auto'/>

  </Marquee>

    </section>
  )
}

export default WebsiteSlide
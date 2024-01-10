import React from 'react'

function Token() {
  return (
   <section className=' relative pt-6' id='token'>
    <img src="images/cloud.png" alt="" className=' absolute hidden sm:block  left-12 floating'  />
    <img src="images/geeko-back.png" alt="" className=' absolute top-[35%] mx-auto left-0 right-0' data-aos="fade-right" />
    <img src="images/geeko-black.png" alt=""  className=' absolute hidden sm:block '/>
    <div className=' container-wrapper mx-auto relative z-50'>
        <div>
            <h1 className=' uppercase font-geeko text-5xl sm:text-[96px] font-normal text-center text-bg '>
            tokenomics
            </h1>
        </div>

        <div className=' mt-[8%]'>
            <img src="images/token.png" alt="" className=' mx-auto p-4 mt-22 sm:p-0'  />
        </div>

    </div>
    <img src=" images/cloud2.png" alt=""  className=' absolute right-16 floating  hidden sm:block'/>
   </section>
  )
}

export default Token
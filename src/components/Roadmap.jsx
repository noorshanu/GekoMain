import React from 'react'

function Roadmap() {
  return (
   <section className=' relative'>
    <img src="images/sun.png" alt="" className=' absolute -top-[8%] right-0 hidden sm:block' />
    <img src="images/start1.png" alt="" className=' absolute left-0 top-[18%]' />
    <img src="images/start2.png" alt="" className=' absolute left-1/4 top-[8%]' />
        <div className=' container mx-auto relative z-50'>
        <div>
            <h1 className=' uppercase font-geeko text-[96px] font-normal text-center text-bg '>
           Roadmap
            </h1>
        </div>

        <img src="images/rocket.png" alt="" className='mx-auto' />

        <div>
          <img src="images/step1.png" alt="" className=' mx-auto' />
          <img src="images/step2.png" alt="" className=' ml-[40%]' />
          <img src="images/step3.png" alt="" className=' ml-[20%]' />
          <img src="images/step4.png" alt="" className=' ml-[35%]' />
        </div>

        

    </div>
   </section>
  )
}

export default Roadmap
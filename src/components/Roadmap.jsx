import React from 'react'

function Roadmap() {
  return (
   <section className=' relative sm:-mt-0 -mt-[44%]  ' id='roadmap'>
    <img src="images/sun.png" alt="" className=' absolute -top-[8%] right-0 hidden sm:block ' />
    <img src="images/start1.png" alt="" className=' absolute left-0 top-[18%] hidden sm:block floating' />
    <img src="images/start2.png" alt="" className=' absolute left-1/4 top-[8%] hidden sm:block floating' />
        <div className='container-wrapper mx-auto relative z-50'>
        <div>
            <h1 className=' uppercase font-geeko text-5xl sm:text-[96px] font-normal text-center text-bg '>
           Roadmap
            </h1>
        </div>

        <img src="images/rocket.png" alt="" className='mx-auto h-[200px] sm:h-auto floating' />

        <div>
          <img src="images/step1.png" alt="" className=' mx-auto sm:p-0 p-4' data-aos="fade-right" />
          <img src="images/step2.png" alt="" className='ml-0 sm:ml-[40%] sm:p-0 p-4' data-aos="fade-left" />
          

          <img src="images/step3.png" alt="" className='ml-0 sm:ml-[20%] sm:p-0 p-4' data-aos="fade-right" />
          <img src="images/step4.png" alt="" className='ml-0 sm:ml-[35%] sm:p-0 p-4' data-aos="fade-left" />
        </div>

        

    </div>
   </section>
  )
}

export default Roadmap
import React from 'react'

function BuySection() {
  return (
    <section className='bg-black-main relative -mt-12 '>
         <img src="images/bg-black.png" alt=""  className=' w-full absolute -top-[350%] hidden sm:block opacity-70'/>
        <div className=' container-wrapper mx-auto'>
            <div className=' flex justify-center'>
                <div className=' relative z-40 flex justify-center gap-4 p-4  ' >
                  
                  <a href="https://www.pinksale.finance/launchpad/0x4b7a336e778Eb0eA71F6C21cFC6050b7928E8a61?chain=BSC" target='_blank'>
                  <img src="/images/btn1.png" alt="" className=' sm:w-auto w-[100px ] h-[40px] sm:h-auto cursor-pointer' />
                  </a>
                   
                 
                   
                   <a href="https://t.me/geekocoin">
                   <img src="/images/btn2.png" alt="" className='sm:w-auto w-[100px ] h-[40px] sm:h-auto' />
                    </a> 
                </div>

            </div>

        </div>
    </section>
  )
}

export default BuySection
import React from 'react'

function BuySection() {
  return (
    <section className='bg-black-main relative '>
         <img src="images/bg-black.png" alt=""  className=' w-full absolute -top-[500%] hidden sm:block'/>
        <div className=' container mx-auto'>
            <div className=' flex justify-center'>
                <div className=' relative z-40 flex justify-center gap-4 p-4 '>
                  
                    <img src="/images/btn1.png" alt="" className=' sm:w-auto w-[100px ] h-[40px] sm:h-auto' />
                 
                   
                    <img src="/images/btn2.png" alt="" className='sm:w-auto w-[100px ] h-[40px] sm:h-auto' />
                </div>

            </div>

        </div>
    </section>
  )
}

export default BuySection
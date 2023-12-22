import React from 'react'

function BuySection() {
  return (
    <section className='bg-black-main relative '>
         <img src="images/bg-black.png" alt=""  className=' w-full absolute -top-[500%]'/>
        <div className=' container mx-auto'>
            <div className=' flex justify-center'>
                <div className=' relative z-40 flex justify-center gap-4 '>
                    <div>
                    <img src="/images/btn1.png" alt="" />
                    </div>
                   
                    <img src="/images/btn2.png" alt="" />
                </div>

            </div>

        </div>
    </section>
  )
}

export default BuySection
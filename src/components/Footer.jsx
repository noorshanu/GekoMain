import React from 'react'
import { FaTwitter,FaMedium } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { SiGitbook } from "react-icons/si";

function Footer() {
  return (
 <section className=' py-7'>
    <img src="images/foot-gold.png" alt="" className='w-full' />
    <div className=' container-wrapper mx-auto mt-[5rem]'>

        <div className=' flex flex-col sm:flex-row items-center justify-between mb-1 sm:mb-[2rem]'>
            <img src="images/logo.png" alt="" />

            <img src="images/fuk.png" alt="" />

        </div>
        <img src="images/line.png" alt="" className=' mx-auto' />

        <div className=' flex justify-between items-center mt-9 mb-4 flex-col sm:flex-row gap-2'>
            <div className=' flex items-center gap-4'>
                <a href="https://x.com/geekocoin" className=' text-xl text-[#fff] font-normal'><FaTwitter /></a>
                <a href="/" className=' text-xl text-[#fff] font-normal'><img src="images/bsc.png" alt="" /></a>
                <a href="https://t.me/geekocoin" className=' text-xl text-[#fff] font-normal'><FaTelegramPlane /></a>
                <a href="/" className=' text-xl text-[#fff] font-normal'><FaMedium /></a>
                <a href="/" className=' text-xl text-[#fff] font-normal'><SiGitbook /></a>

            </div>
            <div className=' flex gap-4 items-center'>
                <p className=' text-sm text-[#CCD2E9] font-normal'>Terms & Conditions</p>
                <p className=' text-sm text-[#CCD2E9] font-normal'>Privacy Policy</p>
            </div>
            <div>
                <p className=' text-sm text-[#CCD2E9] font-normal'>2023 All right reserved</p>
            </div>

        </div>


    </div>
 </section>
  )
}

export default Footer
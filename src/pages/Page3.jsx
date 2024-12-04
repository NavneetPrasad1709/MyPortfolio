import React from 'react'

const Page3 = () =>{
  return (
    <div className='main-page3 h-screen relative flex items-center justify-center'>


        <img className=' custom-img absolute z-20 ' src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_1254,h_721,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/try.png" alt="" />



        <video loop muted autoPlay className=' custom-video z-10 relative object-cover ' src="./src/assets/video1.mp4"></video>

        <div className='line h-0.5 w-3/5 top-[40%] absolute z-0 bg-black' ></div>
        <div className='line h-0.5 w-4/5 top-[55%] absolute z-0 bg-black' ></div>
        <div className='line h-0.5 w-full top-[70%] absolute z-0 bg-black' ></div>
    </div>
  )
}

export default Page3
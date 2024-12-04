import React from 'react'

const Page6 = () =>{
  return (
    <div className='main6 h-[110vh] relative p-4 mt-10 bg-white'>
        <div className=' h-full overflow-hidden w-full bg-black rounded-[40px]'>
          <video autoPlay loop muted className='h-full w-full rounded object-cover' src="./src/assets/moon.mp4"></video>
          <h1 className='text1-6 absolute text-[24vw] font-[anzo5] text-white uppercase -mt-[48vw] left-20'>about</h1>

          <h2 className='text2-6 absolute text-l font-[anzo3] ml-16 w-[80vw] -mt-[20vw] text-white capitalize'>Hi,<br /> I'm <span className='font-[anzo2] text-2xl text-yellow-400'>Navneet Prasad,</span><br  />  a <span className='text-yellow-400 font-[anzo2] text-2xl'>software developer</span> who loves building simple, efficient, and user-friendly apps. I enjoy turning ideas into reality with clean, reliable code. Whether it's developing websites, mobile apps, or working with backend systems, I focus on creating solutions that work well and are easy to maintain.
          I'm always learning new technologies and finding better ways to solve problems. Outside of coding,<br />  I'm into <span className='text-yellow-400 font-[anzo2] text-2xl'> E-sports gaming, Cricket </span>  and I believe in the power of creativity to make tech more human.<br /> 

          Let's build something great together!

 </h2>

        </div>
        
    </div>
  )
}

export default Page6
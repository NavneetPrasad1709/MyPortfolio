import React from 'react'

const Page10 = () =>{
  return (
<div className='h-[58vw]  p-5 -mt-20'>
        
<div className='sub10 relative  '>
  <video className='v10 w-[100vw] absolute mt-10 h-[50vw] bg-black rounded-[40px]' loop muted autoPlay src="./src/assets/soft skills.mp4"></video>
      <div className='ml-[34vw] absolute text-center flex-col justify-items-center mt-[10vh] rounded-[40px]'>

        <div className='w-[25vw]'>
        <h2 className='t1-10 text-[10vw] font-[anzo5] text-white uppercase ' >Personal</h2>
        <h3 className='t2-10 -mt-12 text-gray-300 font-[anzo4] text-xl'>Intuition, Imagination, Discipline</h3>
         </div>

         <div className='w-[25vw]'>
        <h2 className='t3-10 text-[10vw] font-[anzo5] text-white uppercase ' >PROFESSIONAL</h2>
        <h3 className='t4-10 -mt-12 text-gray-300 font-[anzo4] text-xl'>Time Management, Multitasking, Creativity</h3>
       </div>

        <div className='w-[25vw]'>
        <h2 className='t5-10 text-[10vw] font-[anzo5] text-white uppercase ' >Additional</h2>
        <h3 className='t6-10 -mt-12 text-gray-300 font-[anzo4] text-xl'>3D, Animation, AI Tools</h3>
        </div> 

     </div>

</div>

</div>
  )
}

export default Page10
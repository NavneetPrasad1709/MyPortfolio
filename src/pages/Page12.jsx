import React from 'react'

const Page12 = () =>{
  return (
<div className='h-[58vw]  p-5 mt-16'>
        
<div className='main12 relative   '>
  <video className='sub12 w-[100vw] absolute mt-10 h-[50vw] bg-black rounded-[40px]' loop muted autoPlay src="./src/assets/page12.mp4"></video>
      <div className='ml-[34vw] absolute text-center flex-col justify-items-center mt-[11vh] rounded-[40px]'>

        <div className=' w-[25vw]'>
        <h2 className='t1-12 text-[10vw] font-[anzo5] text-white uppercase ' >Personal</h2>
        <h3 className='t2-12  -mt-12 text-gray-300 font-[anzo4] text-xl'>
        Honesty, Communication, Punctuality</h3>
         </div>


        <div className=' w-[25vw]'>
        <h2 className='t3-12  text-[10vw] font-[anzo5] text-white uppercase ' >PROFESSIONAL</h2>
        <h3 className='t4-12 -mt-12 text-gray-300 font-[anzo4] text-xl'>Photoshop, Wix Studio, Figma</h3>
       </div>


        <div className='w-[25vw]'>
        <h2 className='t5-12 text-[10vw] font-[anzo5] text-white uppercase ' >Additional</h2>
        <h3 className='t6-12 -mt-12 text-gray-300 font-[anzo4] text-xl'>Business Development, Branding, SEO</h3>
        </div> 

     </div>

</div>

</div>
  )
}

export default Page12
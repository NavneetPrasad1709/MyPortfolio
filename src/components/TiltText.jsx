import React from 'react'

const TiltText = (props) => {
  return (
    <div id='tiltDiv' ref={props.abc} className='text-white mt-24 cursor-default'>
      <h1 className='text-main1 text-[3vw]  leading-[1vw] uppercase font-[anzo1]'>I am <span className='text-main2 text-yellow-400 font-[anzo1]'>NAVNEET PRASAD</span></h1>
      <h1 className='text-main3 text-[6vw] leading-[6vw] font-[anzo1] '> SOFTWARE <br /> DEVELOPER</h1>
      <h1 className='text-main4 text-[3vw] leading-[4vw] uppercase font-[anzo1]'>To Hire</h1>
    </div>
  )
}

export default TiltText
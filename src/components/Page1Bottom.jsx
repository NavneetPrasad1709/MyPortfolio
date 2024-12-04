import React from 'react'

const Page1Bottom = () =>{
  
    const openPDF2 = () => {
    
      const pdfUrl = './src/assets/resume/Navneet Software Developer.pdf';  
      window.open(pdfUrl, '_blank'); 
    };



  return (
    <div className='p1-bottom text-white absolute left-0 p-12 ml-12 flex items-end justify-between bottom-0 w-full'>
      <div>
        <h2 className='bottom-text text-sm font-[anzo2]'>WEBSITE DESIGN | BRAND DESIGN</h2>
        <h3 className='bottom-text text-sm font-[anzo2] text-gray-400'>CREATIVE WEBSITE IDEAS</h3>

        </div>
    <img className='resume mr-20 h-[4vw] cursor-pointer border-4 rounded-full border-white
     ' src="./src/assets/portfolio.png " onClick={openPDF2} alt="" />
    </div>
  )
}

export default Page1Bottom
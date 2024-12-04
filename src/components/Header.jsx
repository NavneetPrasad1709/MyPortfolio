import React from 'react'
import 'remixicon/fonts/remixicon.css'


const App = () =>{

    const openPDF = () => {
    
    const pdfUrl = './src/assets/resume/Navneet Software Developer.pdf';  
    window.open(pdfUrl, '_blank'); 
  };

  return (
    <div className='headerbtn  fixed w-full z-10 px-12  py-20 flex items-center justify-end'>
  
      <button className='hbutton bg-black font-[anzo4] text-white px-10 cursor-pointer py-3 rounded-full border-4 text-sm hover:bg-gray-500 'onClick={openPDF}>Hire Me</button>
      <i className="menu ri-more-2-fill text-4xl text-white " ></i>
   
    </div>
  )
}

export default App
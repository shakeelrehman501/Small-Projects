
import { Palette } from 'lucide-react'
import { useState } from 'react';

const colors = [
  "#ef4444", "#f97316", "#f59e0b", "#eab308", "#84cc16",
  "#22c55e", "#10b981", "#14b8a6", "#06b6d4", "#0ea5e9",
  "#3b82f6", "#6366f1", "#8b5cf6", "#a855f7", "#d946ef",
  "#ec4899", "#f43f5e"
];

function ColorChanger() {
  const [bgColor, setBgColor] = useState<string>("#ef4444")
  
  function randomColor (){
    const randomValue = colors[Math.floor(Math.random()*colors.length)]
    setBgColor(randomValue)

  }

  return (
    <div className="max-w-120 rounded-lg" style={{backgroundColor:bgColor}}>
      <div className='p-6'>
      <div className=' bg-white text-center shadow-md rounded-lg p-5'>
      <h1 className='text-center text-[25px] font-semibold'>Random Color Generator</h1>
        <div className='bg-gray-100 rounded-lg my-3 mx-5 h-30 flex flex-col items-center justify-center'>
          <span>Current Color</span>
          <h1 className='text-[40px] font-bold' style={{color:bgColor}}>{bgColor}</h1>
          </div>
        <div className='flex  justify-center'>
            <button
            onClick={randomColor}
            className='flex items-center gap-2 bg-gray-700 text-white px-5 py-3 rounded-lg hover:bg-gray-800'>
              <Palette/>  
                Color Changer</button>
        </div>
        
      </div>
    
    </div>
    </div>
  )
}

export default ColorChanger

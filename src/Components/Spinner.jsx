import React from 'react'
import './Spinner.css';
const Spinner = () => {
  return (
    <div className='flex items-center flex-col space-y-2'>

      {/* gola ghumabe ke liye */}
        <div className="spinner"></div>
        <p className='text-lg text-bgDark font-semibold'>Loading...</p>
    </div>
  )
}

export default Spinner
import React from 'react'
import assets from '../assets/assets'

const Policy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-500'>
        <div className=''>
<img src={assets.exchange_icon} className='w-13 m-auto mb-5 ' alt="" />
<p className='font-semibold'>Easy Exchange Policy</p>
<p>We Offer Hassel Free Exchange Policy</p>
        </div>
        <div className=''>
<img src={assets.quality_icon} className='w-13 m-auto mb-5 ' alt="" />
<p className='font-semibold'>7 Days Return </p>
<p>We provide 7 days free return Policy</p>
        </div>
        <div className=''>
<img src={assets.support_img} className='w-13 m-auto mb-5 ' alt="" />
<p className='font-semibold'>Best Customer Support</p>
<p>We Provide 24/7 customer Support</p>
        </div>
    </div>
  )
}

export default Policy
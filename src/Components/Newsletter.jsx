import React from 'react';

const Newsletter = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('subscribed');
    }
  return (
    <div className='text-center '>
<p className='text-2xl font-medium  text-gray-700'> Subscribe Now & get 20% off</p>
<p className='text-gray-400 mt-3'>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
</p>
<form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex item-center gap-3 mx-auto my-6  border pl-3'>
    <input type="email" placeholder='Enter your email address' className='   w-full sm:flex-1 required:' />
    <button className='bg-black text-white py-4 w-32'>Subscribe</button>
</form>
    </div>
  )
}

export default Newsletter
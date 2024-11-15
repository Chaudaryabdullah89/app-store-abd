import React from 'react'
import assets from '../assets/assets'

const Fotter = () => {
return (
    <>
    <div className='flex flex-col sm:grid grid-cols-[3fr,1fr,1fr] gap-14 my-10 mt-40 text-sm '>
        <div>
            <img src={assets.logo} alt="" className='mb-5 w-32 ' />
            <p className='w-[70%] text-start md:2/3 text-gray-400 '>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi id sint voluptatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi id sint voluptatibus!
            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600 ab '>
                <li className='curser-pointer' style={{cursor : 'pointer'}} >Home</li>
                <li className='curser-pointer' style={{cursor : 'pointer'}} >About Us</li>
                <li className='curser-pointer' style={{cursor : 'pointer'}} >Delivery</li>
                <li className='curser-pointer' style={{cursor : 'pointer'}} >Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>Get In Touch </p>
            <ul className='flex flex-col gap-1 text-gray-600 ab '>
                <li className='curser-pointer' style={{cursor : 'pointer'}} >123-456-7890</li>
                <li className='curser-pointer' style={{cursor : 'pointer'}} >info@forever.com</li>
            </ul>
        </div>
     
    </div>
        <div>

    <hr />
            <p className='py-5 text-sm text-center ' >Copyright © 2024 forver.com - All rights reserved.</p>
        </div>
    </>
)
}

export default Fotter
import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import assets from '../assets/assets.js';
import { ShopContext } from "../Context/shopcontext";

const Navbar = () => {

const [visible, setVisible] = useState(false);
const {setShowsearch ,getCartCount} = useContext(ShopContext);

  return (
    <>
    <div className='flex items-center justify-between py-5 font-semibold text-md ' 
 >
     <Link to="/"> <img src={assets.logo} alt="Logo" className="w-36" /> </Link>
      <ul className='hidden sm:flex gap-10 text-sm text-gray-700 '>
        <NavLink to='/'>
            <p>Home</p>
            <hr className='bg-gray-700 w-full border-none h-[1.5px] hidden' />
        </NavLink>
        <NavLink to='/collection'>
            <p>Collection</p>
            <hr className='bg-gray-700 w-full border-none h-[1.5px] hidden' />
        </NavLink>
        <NavLink to='/about'>
            <p>About</p>
            <hr className='bg-gray-700 w-full border-none h-[1.5px] hidden' />
        </NavLink>
        <NavLink to='/contact'>
            <p>Contact</p>
            <hr className='bg-gray-700 w-full border-none h-[1.5px] hidden' />
        </NavLink>
       
      </ul>
      <div className="flex items-center gap-5">
        <img src={assets.search_icon} alt="search" className='w-5 transition-all cursor-pointer' onClick={()=>{setShowsearch(true)}} />
        <div className="relative group">
<img src={assets.profile_icon} alt="" className='w-5 cursor-pointer'  />
<div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
<div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-grey-500">
  <NavLink to={'/profile'}>
  
    <p className="curser-pointer hover:text-black">My Profile</p>
  </NavLink>
  <NavLink to={'/order'}>
    <p className="curser-pointer hover:text-black">Order</p>

  </NavLink>
  <NavLink to={'/logout'}>
    <p className="curser-pointer hover:text-black">LogOut</p>

  </NavLink>
</div>

</div>
        </div>
<Link to='/cart'>
<img src={assets.cart_icon} alt="Cart Icon"  className=' top-[10px] relative w-5'/>
<p className=' relative bottom-[2px] left-2  text-center leading-4 bg-black text-white items-center aspect-square rounded-full text-[10px]'> <span className=' relative top-[2px]' >
   
   {getCartCount()}
  </span>
    </p>
</Link>


      {/*side Menu For the smaller screen  */}
<img onClick={() => setVisible(true)} src={assets.menu_icon} alt="" className='sm:hidden w-5 cursor-pointer' />
      </div>
      <div className={`absolute top-0 right-0  bottom-0 overflow-hidden bg-white  transition-all ${visible ? 'w-full' : 'w-0'}`}>
       <div className="flex flex-col text-gray-600">
        <div  onClick={() => setVisible(false)} className='flex  items-center gap-4 p-3'>
            <img src={assets.dropdown_icon} alt="Logo" className=" h-4 rotate-180 curser-pointer" style={{cursor: 'pointer'}} />
            <p className='curser-pointer' style={{cursor : 'pointer'}}>Back</p>
        </div>
       </div>
       <div>
        
       </div>
       <div className='flex flex-col'>


       <NavLink onClick={()=>setVisible(false)} className='py-3 pl-6 border uppercase' to='/'>
          Home
        </NavLink>
        <NavLink onClick={()=>setVisible(false)} className='py-3 pl-6 border uppercase' to='/collection'>
          Collection
        </NavLink>
        <NavLink onClick={()=>setVisible(false)} className='py-3 pl-6 border uppercase' to='/About'>
          About
        </NavLink>
        <NavLink onClick={()=>setVisible(false)} className='py-3 pl-6 border uppercase' to='/contact'>
          Contact
        </NavLink>

       </div>
      </div>



      </div>
    </>
  );
};

export default Navbar;

import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import assets from '../assets/assets';
import { ShopContext } from '../Context/shopcontext';
const Search = () => {
    const {search,setSearch,showsearch,setShowsearch} = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation()  
    useEffect(()=>{
if(location.pathname.includes('collection' )){
setVisible(true)

}
else{
setVisible(false)
}
    },[location])
  return showsearch && visible ? (
    <div >
<div className='border-t border-b bg-gray-50 text-center'>
<div className='inline-flex item-center justify-center border border-gray px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
<input value={search} onChange={(e)=> setSearch(e.target.value)} type="text" name="" id="" placeholder='Search' className='flex-1 outline-none text-sm' />
<img src={assets.search_icon} alt=""  className='w-5' />
</div>
<img src={assets.cross_icon} alt="" className='inline w-4 cursor-pointer ' onClick={()=> setShowsearch(false)} />
</div>
    </div>
  ):null
}

export default Search
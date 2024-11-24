import React, { useContext, useEffect, useState } from 'react';
import Title from '../Components/Title';
import { ShopContext } from '../Context/shopcontext';
import assets from '../assets/assets';

const Cart = () => {
  const {products,currency,cartitems,updatequantity} = useContext(ShopContext);
const [cartdata,setCartdata] = useState([]);

useEffect(() => {
const  temp = [];
for(let items in cartitems){
    for(let item in cartitems[items]){
        try {
            // let product = products.find((product) => product._id === items);
            if(cartitems[items][item] > 0){

              temp.push({
                  _id:items,
                  size:item,
                  quantity:cartitems[items][item]
              })
              
            }
        } catch (error) {
            console.error(error);
        }
    }
}
setCartdata(temp);

}, [cartitems])

if(cartdata.length <= 0){
  console.log('No items in cart');
  
}
return (
    <div className='border-t pt-14' >
<div className='text-3xl mb-3 uppercase' >
 <Title text1='Your' text2='Cart' />
</div>
<div>
  {
    cartdata.map((item,index)=>{
const Productdata = products.find((product) => product._id === item._id);
return (
<div key={index} className='py-4 border-t border-b text-gray-700 grid grid-col-[4fr_0.5fr_0.5fr] sm:grid[4fr_2fr_0.5fr] items-center gap-4 ' >
  <div className='flex items-start justify-between gap-6 items-center' >
  <div className='flex flex-row gap-6' >
<img src={Productdata.image[0]} className='w-16 sm:w-20 '  alt="" />
<div className='flex flex-col' >
    < p className='text-sm sm:text-lg font-medium' > {Productdata.name} </p>
    <div className='flex items-center gap-5 mt-2' >
     <p> {currency} {Productdata.price} </p>
     <p className='px-3 sm:px-3 sm:py-1 border bg-slate-50 ' >{item.size}  </p>
    </div>

</div>
  </div>
  <input type="number" min={1} defaultValue={item.quantity} onChange={(e)=> e.target.value === '' || e.target.value === '0'  ? null : updatequantity(item._id,item.size,Number(e.target.value)) }  className='border sm:max-w-20 p-2 justify-center  items-center  '  />
  <img src={assets.bin_icon} className='w-4 mt-3 mr-4 sm:w-5 cursor-pointer' alt=""  onClick={()=>{updatequantity(item._id,item.size,0)}} />
  </div>
</div>
)
    })
  }
</div>
    </div>
  )
}

export default Cart
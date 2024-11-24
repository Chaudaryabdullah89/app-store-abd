import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { products } from '../assets/assets';

export  const ShopContext = createContext();


const ShopContextProvider = (props) => {
  
       
 const currency = '$';
 const delivery_fee = 10;
 const [search,setSearch] = useState('');
 const [showsearch,setShowsearch] = useState(false);
 const [cartitems,setCartitems] = useState({});
 const addtocart = async (itemid,size)=>{
    if(!size){
toast.error('Select Product Size');
return
    }
    let cartdata  = structuredClone(cartitems);
    if(cartdata[itemid]){
        if(cartdata[itemid][size]){
            cartdata[itemid][size] +=1;
        }else{
            cartdata[itemid][size] = 1;
        }
    }
    else{
        cartdata[itemid] = {};
        cartdata[itemid][size] = 1;
    }
    setCartitems(cartdata);
 }

 const getCartCount = ()=>{
    let TotalCount = 0;
    for(let items in cartitems){
        for(let item in cartitems[items]){
            try {
                if(cartitems[items][item] > 0){
                    TotalCount += cartitems[items][item];
                }
            } catch (error) {
                console.error(error);
            }
        }
    }
    return TotalCount;
 }

  const updatequantity =  async (itemid,size,quantity)=>{
   let cartdata = structuredClone(cartitems)
   cartdata[itemid][size] = quantity
   setCartitems(cartdata)
  }

    const value ={
products,currency,delivery_fee,search,setSearch,showsearch,setShowsearch,cartitems,addtocart,getCartCount,updatequantity
    }
    return (
 
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
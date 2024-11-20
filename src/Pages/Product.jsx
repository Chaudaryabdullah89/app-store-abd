import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/shopcontext";
const Product = () => {
  const { productid } = useParams();
  console.log(productid);
  const { products } = useContext(ShopContext);
  const [productdata, setproductdata] = useState(false);
  const [image,setimage] = useState('')
  const fetchproductdata = async () => {
    products.map((item) => {
      if (item._id === productid) {
        setproductdata(item);
        setimage(item.image[0])
        console.log(item);

        return null;
      }
    });
  };
  useEffect(() => {
    fetchproductdata();
  }, [products, productid]);
  return productdata ? (
    <div>
<div  className="border-t-2 pt-10 transition-all ease-in duration-500" >
{/* product data */}
<div className=" flex gap-12 sm:gap-12 flex col sm:flex-row " >
{/* product images */}
<div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
<div className="flex flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:w-[18.7%] w-full ">

</div>
</div>
</div>
</div>
    </div>
  ) : <div>products Not Found... try Again after sometime or make sure too have Good Internet</div>
};

export default Product;

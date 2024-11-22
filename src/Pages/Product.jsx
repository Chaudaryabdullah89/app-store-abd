import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import assets from "../assets/assets";
import RelatedProducts from "../Components/RelatedProducts";
import { ShopContext } from "../Context/shopcontext";
const Product = () => {
  const { productid } = useParams();
  console.log(productid);
  const { products , currency } = useContext(ShopContext);
  const [productdata, setproductdata] = useState(false);
  const [image, setimage] = useState("");
  const [size,setsize] = useState('');
  const fetchproductdata = async () => {
    products.map((item) => {
      if (item._id === productid) {
        setproductdata(item);
        setimage(item.image[0]);
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
      <div className="border-t-2 pt-10 transition-all ease-in duration-500 text-start">
        {/* product data */}
        <div className=" flex gap-12 sm:gap-12 flex col sm:flex-row ">
          {/* product images */}
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex flex-col overflow-x-auto w-[25%]  sm:overflow-y-auto justify-between sm:w-[18.7%] w-full ">
              {productdata.image.map((item, index) => (
                <img
                  onClick={() => setimage(item)}
                  src={item}
                  key={index}
                  className="  sm:mb-3 flex-shrink-0 cursor-pointer "
                  alt=""
                />
              ))}
            </div>
            <div className=" w-full sm:w-[80%] ">
              <img src={image} className="w-full h-auto" alt="" />
            </div>
          </div>
          {/* product information */}
          <div className="flex-1 ">
            <h1 className="font-medium text-2xl mt-2 items-start text-start ">
              {productdata.name}
            </h1>
            <div className="flex items-center gap-1 mt-2">
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              <p className="pl-2 text-gray-500"> 47</p>
            </div>
            <p className="mt-5 text-3xl font-medium">{currency}{productdata.price}</p>
            <p className="mt-5 w-4/5 text-gray-500" >{productdata.description}</p>
            <div  className="flex flex-col gap-4 my-8">
                   <p>
                    Select Size
                   </p>
                   <div className="flex gap-2">
                    {productdata.sizes.map((item, index) => (
                        <button onClick={()=>setsize(item)} key={`${item}-${index}`} value={item} className={`border ${item === size ? 'border-orange-500' : ''} py-2 px-4 bg-slate-100`} >{item}</button>
                    ))}
                   </div>
            </div>
            <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 ">ADD TO CART</button>
            <hr  className="mt-8 sm:w-4/5" />
            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1" >
                <p>100% Orignal Product</p>
                <p>Cash on delivery is avaible on this product</p>
                <p>Easy return and exchange policy within 7 days</p>
                
            </div>
          </div>
        </div>
      </div>
      {/* ----- Description and review section ---- */}
      <div className="mt-20" >
<div className="flex " >
<b className="border px-5 text-sm py-3">Description</b>
<b className="border px-6 py-3 text-sm" >Reviews (144)</b>
</div>
<div  className="flex flex-col  text-start gap-4 border py-6 text-sm text-gray-500">
<p className="px-3">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit minus ipsum vero minima, officia modi quasi facilis, ullam similique eum ut voluptatum qui magni nisi debitis facere illo, culpa aliquid? Fugit voluptas, sint ratione libero tenetur sapiente dolorum ipsum corrupti maxime voluptatibus.
</p>
<p className="px-3">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis sapiente veniam atque iure molestias quibusdam odit earum nostrum, eius sunt qui incidunt provident fugiat perferendis autem neque ad quaerat pariatur perspiciatis quos architecto fuga quas. Impedit, quidem nisi aspernatur quos suscipit dignissimos facilis possimus numquam? Provident necessitatibus voluptate commodi iste.
</p>
</div>
      </div>
      {/* display related products */}
      <RelatedProducts category={productdata.category} subCategory={productdata.subCategory} />
    </div>
  ) : (
    <div>
      products Not Found... try Again after sometime or make sure too have Good
      Internet
    </div>
  );
};

export default Product;

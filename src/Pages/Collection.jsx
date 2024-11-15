import React, { useContext, useEffect, useState } from "react";
import assets from "../assets/assets";
import Productitem from "../Components/Productitem";
import Title from "../Components/Title";
import { ShopContext } from "../Context/shopcontext";

const Collection = () => {
  const { products, search,setSearch,showsearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sort, setSort] = useState('relavent');

  const toggleCategory = (e) => {
    const value = e.target.value;
    if (category.includes(value)) {
      setCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setCategory((prev) => [...prev, value]);
    }
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    if (subCategory.includes(value)) {
      setSubCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setSubCategory((prev) => [...prev, value]);
    }
  };

  const applyfilter = () => {
    let productscopy = products.slice();
    if(showsearch && search){
      productscopy = productscopy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (category.length > 0) {
      productscopy = productscopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productscopy = productscopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilteredProducts(productscopy);
  };

  const handleSortChange = (e) => {
    let fpcopy = filteredProducts.slice();
    switch (sort) {
      case 'low-high':
        setFilteredProducts(fpcopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilteredProducts(fpcopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyfilter();
        break;
    }
  };

  useEffect(() => {
    applyfilter();
    
  }, [category, subCategory,search,showsearch]);

  useEffect(() => {
    handleSortChange();
  }, [sort]); 
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter option */}
      <div className="min-w-60">
        <p
          className="my-2 text-xl flex items-center cursor-pointer gap-2 uppercase"
          onClick={() => setShowFilter(!showFilter)}
        >
          Filter{" "}
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${
              showFilter ? "rotate-90" : "rotate-0"
            } transition-all`}
            alt=""
          />
        </p>
        {/* category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-lg font-medium text-start">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                name="category"
                id="women"
                value="Women"
                onChange={toggleCategory}
              />
              <label htmlFor="women">Women</label>
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                name="category"
                id="men"
                value="Men"
                onChange={toggleCategory}
              />
              <label htmlFor="men">Men</label>
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                name="category"
                id="kids"
                value="Kids"
                onChange={toggleCategory}
              />
              <label htmlFor="kids">Kids</label>
            </p>
          </div>
        </div>
        {/* subcategory filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-lg font-medium text-start">Type</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                name="subcategory"
                id="bottomwear"
                value="Bottomwear"
                onChange={toggleSubCategory}
              />
              <label htmlFor="women">BottomWear</label>
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                name="subcategory"
                id="Topwear"
                value="Topwear"
                onChange={toggleSubCategory}
              />
              <label htmlFor="women">Topwear</label>
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                name="subcategory"
                id="winterwear"
                value="Winterwear"
                onChange={toggleSubCategory}
              />
              <label htmlFor="kids">WinterWear</label>
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="All" text2="Collection" />
          {/* Product Sort */}
          <select
            name=""
            id=""
            className="border-2 border-gray-300 text-sm px-2"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="relavent">Sort By : Relavent</option>
            <option value="low-high">Sort By : Low to High</option>
            <option value="high-low">Sort By : High To Low</option>
          </select>
        </div>
        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filteredProducts.map((item, index) => {
            return (
              <Productitem
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Collection;

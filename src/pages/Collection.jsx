import { useEffect, useState } from 'react'
import  { useContext } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import {assetsFront} from '../assets/frontend_assets/assets.js'
import ProductItem from '../components/ProductItem.jsx'
import Title from "../components/Title.jsx"
import { useTranslation } from 'react-i18next'
const Collection = () => {
  // eslint-disable-next-line no-unused-vars
  const {products,search,showSearch,setMode,currentMode}=useContext(ShopContext)
  const [showFilter,setShowFilter]=useState(false)
  const [allProduct,setAllProduct]=useState([])
  const [category,setCategory]=useState([])
  const [subCategory,setSubCategory]=useState([])
  const [sortType,setSortType]=useState("relavent")
  const {t,i18n}=useTranslation()
  const toggleCategory=(e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev=>prev.filter((item)=>item!==e.target.value))
    }else{
      setCategory(prev=>[...prev,e.target.value])
    }
  }
  const toggleSubCategory=(e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=>prev.filter((item)=>item!==e.target.value))
    }else{
      setSubCategory(prev=>[...prev,e.target.value])
    }
  }

  const applyFilter=()=>{
    let productsCopy=products.slice()
    if(search && showSearch){
      productsCopy=productsCopy.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length > 0){
      productsCopy=productsCopy.filter((item)=>category.includes(item.category))
    }
    if(subCategory.length > 0){
      productsCopy=productsCopy.filter((item)=>subCategory.includes(item.subCategory))
    }
    setAllProduct(productsCopy)
  }

  const sortProduct=()=>{
    let copyFilterProduct=allProduct.slice()
    switch(sortType){
      case "low-high":
        setAllProduct(copyFilterProduct.sort((a,b)=>a.price-b.price )) 
        break;
      case "high-low":
        setAllProduct(copyFilterProduct.sort((a,b)=>b.price-a.price )) 
        break;
        default:
          applyFilter();
          break;
    }
  }
  useEffect(()=>{
    applyFilter()
  },[category,subCategory,search,showSearch])

  useEffect(()=>{
    sortProduct()
  },[sortType])

  return (
    <div dir={i18n.language==='ar'?'rtl':'ltr'} className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter option */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          {t('FILTERS')}
          <img
            src={assetsFront.dropdown_icon}
            className={`sm:hidden h-3 ${showFilter ? "rotate-90" : ""}`}
          />
        </p>

        {/* Category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${i18n.language==='ar'?'pr-5 ':''} ${
            showFilter ? "block" : "hidden"
          }  sm:block`}
        >
          <p className="mb-3 text-sm font-medium">{t('CATEGORIES')}</p>
          <div className={`flex flex-col gap-2 text-sm font-light ${currentMode==='light'?' text-gray-700':'text-white'}`}>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Men"}
                onChange={toggleCategory}
              />
              {t('Men')}
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Women"}
                onChange={toggleCategory}
              />
              {t('Women')}
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Kids"}
                onChange={toggleCategory}
              />
              {t('Kids')}
            </p>
          </div>
        </div>
        {/* subCategory */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6  ${
            showFilter ? "block" : "hidden"
          } sm:block ${i18n.language==='ar'?'pr-5':''}`}
        >
          <p className="mb-3 text-sm font-medium">{t('TYPE')}</p>
          <div className={`flex flex-col gap-2 text-sm font-light ${currentMode==='light'?' text-gray-700':'text-white'}`}>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />
              {t('Topwear')}
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />
              {t('Bottomwear')}
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />
              {t('Winterwear')}
            </p>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4 ">
          <Title text1={t('ALL')} text2={t('COLLECTIONS')} />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className={`border-2 border-gray-300 text-sm px-2 ${currentMode==='light'?'':'bg-black'}`}
          >
            <option value="relavent">{t('Sort by:Relavent')}</option>
            <option value="low-high">{t('Sort by:Low to High')}</option>
            <option value="high-low">{t('Sort by:High to Low')}</option>
          </select>
        </div>

        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {allProduct.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection
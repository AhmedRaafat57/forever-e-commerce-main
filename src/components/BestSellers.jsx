import  { useContext, useEffect, useState } from 'react'
import Title from './Title.jsx'
import { ShopContext } from '../context/ShopContext.jsx'
import ProductItem from './ProductItem.jsx'
import { useTranslation } from "react-i18next"; 
const BestSellers = () => {
    const {products,currentMode}=useContext(ShopContext)
    const [bestSellers,setBestSellers]=useState([])
    const { t,i18n } = useTranslation(); 
    useEffect(()=>{
        const bestProduct=products.filter((item)=>(item.bestseller))
        setBestSellers(bestProduct.slice(0,5))

    },[])
  return (
    <div dir={i18n.language==='ar'?"rtl":"ltr"} className='my-10'>
        <div className='text-center py-8 text-3xl'>
             <Title text1={t('best')} text2={t('sellers')}/>
             <p className={`w-3/4 m-auto text-xs sm:text-sm md:text-base ${currentMode==='light'?'text-gray-600':'text-white'}`}>{t('description')} .</p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {bestSellers.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))}
        </div>
    </div>
  )
}

export default BestSellers
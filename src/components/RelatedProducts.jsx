import  { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import PropTypes from "prop-types"; 
import Title from './Title.jsx'
import ProductItem from './ProductItem.jsx'
import { useTranslation } from 'react-i18next';
const RelatedProducts = ({category,subCategory}) => {
  const {t}=useTranslation()
    const {products}=useContext(ShopContext)
    const [related,setRelated]=useState([])
   const scrollToTop=()=>{
    window.scroll({
        top:0,
        behavior:'smooth'
    })
   }
    useEffect(()=>{
        if(products.length>0){
            let prodCopy=products.slice()
            prodCopy=prodCopy.filter((item)=>category===item.category)
            prodCopy=prodCopy.filter((item)=>subCategory===item.subCategory)
            setRelated(prodCopy.slice(0,5))
        }
    },[products])
  return (
    <div className="my-24">
      <div className=" text-center text-3xl py-2">
        <Title text1={t('RELATED')} text2={t("PRODUCT")} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item, index) => (
          <div key={index} onClick={scrollToTop}>
            <ProductItem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
RelatedProducts.propTypes = {
    category: PropTypes.node.isRequired,
    subCategory:PropTypes.node.isRequired,
  };
export default RelatedProducts

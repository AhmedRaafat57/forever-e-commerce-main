import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import Title from "./Title.jsx";
import ProductItem from "./ProductItem.jsx";
import { useTranslation } from "react-i18next"; 

const LatestCollection = () => {
  // eslint-disable-next-line no-unused-vars
  const { products, setMode } = useContext(ShopContext);
  const currentMode = localStorage.getItem("currentMode");

  const [leastProduct, setLeastProduct] = useState([]);
  
  useEffect(() => {
    setLeastProduct(products.slice(0, 10));
  }, [products]);

  const { t,i18n } = useTranslation(); 

  return (
    <div dir={i18n.language=== 'ar'?"rtl":"ltr"} className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={t('latest')} text2={t('collections')} />
        <p className={`w-3/4 m-auto text-xs sm:text-sm md:text-base ${currentMode === 'light' ? 'text-gray-600' : 'text-white'}`}>
           {t('description')} 
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {leastProduct.map((item, index) => (
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;

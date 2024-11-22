import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import Title from '../components/Title.jsx'
import { assetsFront } from '../assets/frontend_assets/assets.js'
import CartTotal from '../components/CartTotal.jsx'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Cart = () => {
  const { t ,i18n} = useTranslation();
  const { products, currency, cartItem, updateQuantatity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item]
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItem]);

  return (
    <div dir={i18n.language==='ar'?"rtl":"ltr"} className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={t('YOUR')} text2={t('CART')} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id);
          return (
            <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
              <div className='flex items-start gap-6'>
                <img src={productData.image[0]} className='w-16 sm:w-20' />
                <div>
                  <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                  <div className='flex items-center gap-5 mt-2'>
                    <p>{currency}{productData.price}</p>
                    <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                  </div>
                </div>
              </div>
              <input 
                onChange={(e) => e.target.value === null || e.target.value === '0' ? null : updateQuantatity(item._id, item.size, Number(e.target.value))}
                className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'
                type='number'
                min={1}
                defaultValue={item.quantity}
              />
              <img 
                onClick={() => updateQuantatity(item._id, item.size, 0)} 
                src={assetsFront.bin_icon} 
                className='w-4 mr-4 sm:w-5 cursor-pointer' 
                alt='' 
              />
            </div>
          )
        })}
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <div className='w-full text-end'>
            <Link to='/place-order'>
              <button className='bg-black text-white text-sm my-8 px-8 py-3'>{t('PROCEED TO CHECKOUT')}</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;



import { useContext } from 'react';
import { assetsFront } from '../assets/frontend_assets/assets.js';
import { ShopContext } from '../context/ShopContext.jsx';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  // eslint-disable-next-line no-unused-vars
  const {setMode,currentMode}=useContext(ShopContext)
  const {t,i18n}=useTranslation()

  return (
    <div dir={i18n.language==='ar'?'rtl':'ltr'} className={`flex flex-col sm:flex-row items-center border ${currentMode === 'light' ? 'border-gray-400' : 'border-gray-700'}`}>
      <div className='flex flex-col w-full sm:w-1/2 gap-2 items-center justify-center py-10 sm:py-0'>
        <div>
          <div className='flex items-center gap-2'>
            <p className={`h-[2px] w-8 md:w-11 ${currentMode === 'light' ? "bg-[#414141]" : "bg-[#fff]"}`}></p>
            <p className={`font-medium text-sm md:text-base ${currentMode === 'light' ? "text-gray-800" : "text-gray-200"}`}>
              {t('bestsellers')}
            </p>
          </div>

          <h1 className={`prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed ${currentMode === 'light' ? "text-gray-900" : "text-white"}`}>
          {t('latest_arrivals')}
          </h1>

          <div className='flex items-center gap-2'>
            <p className={`font-medium text-sm md:text-base ${currentMode === 'light' ? "text-gray-800" : "text-gray-200"}`}>
            {t('shop_now')}
            </p>
            <p className={`h-[1px] w-10 ${currentMode === 'light' ? "bg-[#414141]" : "bg-white"}`}></p>
          </div>
        </div>
      </div>
      <img src={assetsFront.hero_img} alt="Hero" className='w-full sm:w-1/2' />
    </div>
  );
};

export default Hero;

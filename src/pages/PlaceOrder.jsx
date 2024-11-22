import Title from '../components/Title.jsx'
import CartTotal from '../components/CartTotal.jsx'
import { assetsFront } from '../assets/frontend_assets/assets.js'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const PlaceOrder = () => {
  const { t ,i18n} = useTranslation();
  const [clicked, setClicked] = useState('col');

  return (
    <div dir={i18n.language==='ar'?'rtl':'ltr'} className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* left side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={t('DELIVERY')} text2={t('INFORMATION')} />
        </div>
        <div className='flex gap-3'>
          <input required type="text" name='firstName' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder={t('First name')} />
          <input required type="text" name='lastName' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder={t('last name')} />
        </div>
        <input required type='email' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder={t('Email address')} />
        <input required type='text' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder={t('Street')} />
        <div className='flex gap-3'>
          <input required type="text" name='city' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder={t('City')} />
          <input required type="text" name='state' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder={t('State')} />
        </div>
        <div className='flex gap-3'>
          <input required type="number" name='zipCode' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder={t('ZipCode')} />
          <input required type="text" name='country' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder={t('Country')} />
        </div>
        <input required type='number' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder={t('Phone')} />
      </div>
      
      {/* right side */}
      <div className='mt-20 sm:min-w-[450px]'>
        <div className='w-full'>
          <CartTotal />
        </div>
        <div className='mt-10'>
          <Title text1={t('PAYMENT')} text2={t('METHOD')} />
          <div className='flex flex-col lg:flex-row gap-3'>
            <div onClick={() => setClicked("stripe")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${clicked === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assetsFront.stripe_logo} />
            </div>
            <div onClick={() => setClicked("razorpay")} className='flex items-center gap-3 border p-2 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${clicked === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-2' src={assetsFront.razorpay_logo} />
            </div>
            <div onClick={() => setClicked("col")} className='flex items-center gap-3 border p-2 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${clicked === 'col' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>{t('CASH ON DELIVERY')}</p>
            </div>
          </div>
          <div className='w-full text-end mt-8'>
            <Link to='/Orders'>
              <button type='submit' className='bg-black text-white px-16 py-3 text-sm'>{t('PLACE ORDER')}</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;

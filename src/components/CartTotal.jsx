import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import Title from './Title.jsx'
import { useTranslation } from 'react-i18next';
const CartTotal = () => {
    const {currency,delivery_fee,getCartMount}=useContext(ShopContext)
    const {t,i18n}=useTranslation()
  return (
    <div dir={i18n.language==='ar'?'rtl':'ltr'} className='w-full'>
        <div className='text-2xl'>
            <Title text1={t('CART')} text2={t('TOTALS')} />
        </div>
        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>{t('Subtotal')}</p>
                <p>{currency}{getCartMount()}.00</p>
            </div>
            <hr/>
            <div className='flex justify-between'>
                <p>{t('Shipping Fee')}</p>
                <p>{currency}{delivery_fee}.00</p>
            </div>
            <hr/>
            <div className='flex justify-between'>
                <b>{t('Total')}</b>
                <p>{currency}{getCartMount()=== 0 ? 0 : getCartMount() + delivery_fee}.00</p>
            </div>
        </div>
    </div>
  )
}

export default CartTotal
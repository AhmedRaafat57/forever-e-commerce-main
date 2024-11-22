import { useContext } from 'react'
import {assetsFront} from '../assets/frontend_assets/assets.js'
import { ShopContext } from '../context/ShopContext.jsx'
import { useTranslation } from 'react-i18next'
const Footer = () => {
    const {currentMode}=useContext(ShopContext)
    const {t,i18n}=useTranslation()
  return (
    <div dir={i18n.language==='ar'?'rtl':'ltr'}>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 text-sm'>
            <div >
                <img src={assetsFront.logo} className='w-32 mb-5 bg-white'/>
                <p className={`w-full md:w-2/3 ${currentMode==='light'?'text-gray-600':'text-white'}`}>{t('fullDesc')}</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>{t('company')}</p>
                <ul className={`flex flex-col gap-1 ${currentMode==='light'?'text-gray-600 ':'text-white'}`}>
                    <li>{t('home')}</li>
                    <li>{t('about')}</li>
                    <li>{t('Delivery')}</li>
                    <li>{t('Privacy policy')}</li>
                </ul>
            </div>
            <div >
                <p className='text-xl font-medium mb-5'>{t('GET IN TOUCH')}</p>
                <ul className={`flex flex-col gap-1  ${currentMode==='light'?'text-gray-600':'text-white'}`}>
                    <li>+1-000-000-0000</li>
                    <li>greatstackdev@gmail.com</li>
                    <li><a target='_blank' href='https://www.facebook.com/profile.php?id=100030906974430'>FaceBook</a></li>
                </ul>
            </div>
        </div>
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>{t('copyright')}</p>
        </div>
    </div>
  )
}

export default Footer
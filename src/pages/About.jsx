import Title from '../components/Title.jsx'
import NewsletterBox from '../components/NewsletterBox.jsx'
import { assetsFront } from '../assets/frontend_assets/assets.js'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import { useTranslation } from 'react-i18next'
const About = () => {
  const {currentMode}=useContext(ShopContext)
  const {t,i18n}=useTranslation()
  return (
    <div dir={i18n.language==='ar'?"rtl":"ltr"}>
        <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={t('abou')}  text2={t('us')}/>
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img src={assetsFront.about_img} alt='' className='w-full md:max-w-[450px]'/>
          <div className={`flex flex-col justify-center gap-6 md:w-2/4 ${currentMode==='light'?'text-gray-600 ':'text-white'}`}>
            <p>{t('Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.')}</p>
            <p>{t('Since our inception, we have worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.')}</p>
            <p className='class="text-gray-800"'>{t('Our Mission')}</p>
            <p>{t('Our mission at Forever is to empower customers with choice, convenience, and confidence. We are dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.')}</p>
          </div>
        </div>
        <div className='mb-10'>
          <Title text1={t('WHY')} text2={t('CHOOSE US')}/>
        </div>
        <div className='  flex flex-col md:flex-row text-sm mb-20'>
          
            <div className='flex items-center justify-center border h-[250px] px-10 md:px-16 py-8 sm:py-20 flex-col'>
              <div>
                <b className=''>{t('Quality Assurance:')}</b>
                <p className={`mt-5 ${currentMode==='light'?'text-gray-600 ':'text-gray-50'}`}>{t('We meticulously select and vet each product to ensure it meets our stringent quality standards.')}</p>
              </div>    
            </div>
            <div className='flex items-center justify-center border h-[250px] px-10 md:px-16 py-8 sm:py-20 flex-col'>
              <div>
                <b className=''>{t('Convenience')}</b>
                <p className={`mt-5 ${currentMode==='light'?'text-gray-600 ':'text-gray-50'}`}>{t('With our user-friendly interface and hassle-free ordering process, shopping has never been easier.')}</p>
              </div>    
            </div>
            <div className='flex items-center justify-center border h-[250px] px-10 md:px-16 py-8 sm:py-20 flex-col'>
              <div>
                <b className='text-sm'>{t('Exceptional Customer Service:')}</b>
                <p className={`mt-5 ${currentMode==='light'?'text-gray-600 ':'text-gray-50'}`}>{t('Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.')}</p>
              </div>    
            </div>
     
          
         
        </div>
        <div className='text-sm mt-10'>
          <NewsletterBox/>
        </div>
        
    </div>
  )
}

export default About
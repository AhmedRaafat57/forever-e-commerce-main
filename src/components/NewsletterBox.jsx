import  { useContext} from 'react'
import { ShopContext} from '../context/ShopContext.jsx'
import { useTranslation } from 'react-i18next'

const NewsletterBox = () => {
    const {currentMode}=useContext(ShopContext)
    const {t,i18n}=useTranslation()
    const formHandler=(e)=>{
        e.preventDefault()
    }
  return (
    <div dir={i18n.language==='ar'?"rtl":"ltr"} className='flex flex-col gap-3 justify-center items-center py-10 text-center'>
        <p className={`text-2xl font-medium ${currentMode==='light'?'text-gray-800':'text-white'}`}>{t('Subscribe now & get 20% off')}</p>
        <p className='text-gray-400 mt-3'>{t("smallDesc")}</p>
        <form onSubmit={formHandler} className={`w-full sm:w-1/2 gap-3 mx-auto my-6 border pl-3 ${i18n.language==='ar'?"pr-3":""} flex items-center ${currentMode==='light'?'bg-white':'bg-gray-800 '}`} >
            <input type='email' placeholder={i18n.language==='ar'?"ادخل الايميل":"Enter You Email"} className={`w-full sm:flex-1 outline-none rounded  ${currentMode==='light'?'bg-white':'bg-gray-800 text-white'}`}   required/>
            <button type='submit' className={`flex bg-black text-white text-xs ${i18n.language==='ar'?"":""} py-4 px-10 rounded-tr rounded-br`}>{t('SUBSCRIBE')}</button>
        </form>
    </div>
  )
}

export default NewsletterBox

import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang); // Save selected language to localStorage
  };

  return (
    <button
      onClick={toggleLanguage}
      className='bg-gray-200 text-gray-800 px-4 py-2 rounded'
    >
      {i18n.language === 'en' ? 'العربية' : 'English'}
    </button>
  );
};

export default LanguageToggle;

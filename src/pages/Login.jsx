
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext.jsx';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next'
const Login = () => {
  const { submit ,currentMode} = useContext(ShopContext);
  const {t,i18n}=useTranslation()
  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: (values) => {
      submit(values);
    },
  });

  return (
    <form 
      dir={i18n.language==='ar'?'rtl':'ltr'}
      onSubmit={formik.handleSubmit} 
      className={`flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4  ${currentMode==='light'?'text-gray-800':'text-gray-50'}`}
    >
      <div className='flex items-center gap-2'>
        <p className='prata-regular text-3xl'>{t('Login')}</p>
        <hr className='w-8 h-[1.5px] bg-gray-800 border-none' />
      </div>

      {/* Email Field */}
      <input
        type='email'
        name='email'
        placeholder={i18n.language==='ar'?'الايميل ':'Email'}
        className='w-full px-3 py-2 border border-gray-800'
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        required
      />
      {formik.touched.email && formik.errors.email ? (
        <div className='text-red-500 text-sm'>{formik.errors.email}</div>
      ) : null}

      {/* Password Field */}
      <input
        type='password'
        name='password'
        placeholder={i18n.language==='ar'?'كلمة السر':'password'}
        className='w-full px-3 py-2 border border-gray-800'
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        required
      />
      {formik.touched.password && formik.errors.password ? (
        <div className='text-red-500 text-sm'>{formik.errors.password}</div>
      ) : null}

      <div className='w-full flex items-center justify-between cursor-pointer text-sm'>
       <Link to='/forget-password'><p>{t('Forgot your password?')}</p></Link> 
        <Link to='/sign-up'><p>{t('Create account')}</p></Link>
      </div>

      <button 
        type='submit' 
        className='text-center bg-black text-white font-light px-8 py-2 mt-4'
      >
        {t('Sign In')}
      </button>
    </form>
  );
};

export default Login;

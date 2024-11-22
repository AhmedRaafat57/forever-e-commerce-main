// import { useContext } from 'react'
// import { Link } from 'react-router-dom'
// import PropTypes from "prop-types"; 
// import { ShopContext } from '../context/ShopContext.jsx'

// const ProductItem = ({id,image,name,price}) => {
//     const {currency,currentMode}=useContext(ShopContext)
//   return (
//     <Link className={`cursor-pointer ${currentMode==='light'?'text-gray-700':"text-white"}`}  to={`/product/${id}`}>
      
//         <div className='overflow-hidden'>
//             <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt=''/>
//         </div>
//         <p className='pt-3 pb-1 text-sm'>{name}</p>
//         <p className='text-sm font-medium'>{currency}{price}</p>
//     </Link>
//   )
// }
// ProductItem.propTypes = {
//     id: PropTypes.node.isRequired,
//     image:PropTypes.node.isRequired,
//     name:PropTypes.node.isRequired,
//     price:PropTypes.node.isRequired
//   };
// export default ProductItem
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types"; 
import { ShopContext } from '../context/ShopContext.jsx';
import { useTranslation } from 'react-i18next';

const ProductItem = ({ id, image, name, price }) => {
  const { currency, currentMode } = useContext(ShopContext);
  const { t } = useTranslation(); 

  return (
    <Link className={`cursor-pointer ${currentMode === 'light' ? 'text-gray-700' : 'text-white'}`} to={`/product/${id}`}>
      <div className='overflow-hidden'>
        <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt=''/>
      </div>
      <p className='pt-3 pb-1 text-sm'>{t(name)}</p> 
      <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  );
};

ProductItem.propTypes = {
  id: PropTypes.node.isRequired,
  image: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  price: PropTypes.node.isRequired
};

export default ProductItem;

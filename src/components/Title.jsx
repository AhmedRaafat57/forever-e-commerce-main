import PropTypes from "prop-types"; 
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
const Title = ({text1,text2}) => {
  // eslint-disable-next-line no-unused-vars
  const {setMode}=useContext(ShopContext)
  const currentMode = localStorage.getItem("currentMode");
  return (
    <div className="inline-flex gap-2 items-center mb-3">
        <p className={`${currentMode==='light'?'text-gray-500':'text-white'}`}>{text1} <span className={`${currentMode==='light'?'text-gray-700':'text-white'} font-medium`}>{text2}</span></p>
        <p className={`${currentMode==='light'?'bg-gray-700':'bg-white'} w-8 sm:w-12 h-[1px] sm:h-[2px]`}></p>
    </div>
  )
}
Title.propTypes = {
  text1:PropTypes.node.isRequired,
  text2:PropTypes.node.isRequired
};
export default Title
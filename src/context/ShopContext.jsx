import { createContext,  useState } from "react";
import {products} from '../assets/frontend_assets/assets.js'
import PropTypes from "prop-types"; 
import { toast } from "react-toastify";
export const ShopContext=createContext()

const ShopContextProvider=(props)=>{
    const currency='$';
    const delivery_fee=10;
    const [search,setSearch]=useState('')
    const [showSearch,setShowSearch]=useState(false)
    const [cartItem,setCartItem]=useState({})

    let cartData=structuredClone(cartItem)
    const addToCart=async(itemId,size)=>{
        if(!size){
            toast.error("Select Product Size")
            return
        }
        if(cartData[itemId]){
            if(cartData[itemId][size]){   
                cartData[itemId][size]+=1
            }else{
                cartData[itemId][size]=1
            }
        }
        else{
            cartData[itemId]={};
            cartData[itemId][size]=1;
        }
        setCartItem(cartData)
    }

    const getCartCount=()=>{
        let totalCount=0;
        for(const items in cartItem){
            for(const item in cartItem[items]){
                try{
                    if(cartItem[items][item]>0){
                        // toast("added successfully")
                        totalCount+=cartItem[items][item]
                    }
                }catch(err){
                    console.log(err)
                }
            }
        }
        return totalCount
    }

    const updateQuantatity=async(itemId,size,quantity)=>{
        let cartData=structuredClone(cartItem)
        cartData[itemId][size]=quantity
        setCartItem(cartData)
    }

    const getCartMount=()=>{
        let totalAmout=0;
        for(const items in cartItem){
            let productInfo=products.find((product)=>product._id===items)
            for(const item in cartItem[items]){
                try{
                    if(cartItem[items][item]>0){
                        totalAmout+=productInfo.price * cartItem[items][item];
                    }
                }catch(err){
                    console.log(err)
                }
            }
        }
        return totalAmout
    }

    const submit=(e)=>{
        e.preventDefault()
      }
      const [mode, setMode] = useState(
        // eslint-disable-next-line no-extra-boolean-cast
        Boolean(localStorage.getItem("currentMode"))
          ? localStorage.getItem("currentMode")
          : "light"
      );
      const currentMode = localStorage.getItem("currentMode");
    const value={
       products,currency,delivery_fee,
       search,setSearch,showSearch,setShowSearch,
       cartItem,addToCart,getCartCount,updateQuantatity,
       getCartMount,
       submit,
       mode,setMode,currentMode
        
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
export default ShopContextProvider

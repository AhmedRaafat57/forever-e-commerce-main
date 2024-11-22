import  { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import { assetsFront } from '../assets/frontend_assets/assets.js'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
    const {search,setSearch,showSearch,setShowSearch}=useContext(ShopContext)
    const [visible,setVisible]=useState(false)
    const location=useLocation()

    useEffect(()=>{
        if(location.pathname==='/collection'){
            setVisible(true)
        }else{
            setVisible(false)
        }
    },[location])
  return visible && showSearch  ? (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
            <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' placeholder='Search'/>
            <img src={assetsFront.search_icon} className='w-4'/>
        </div>
        <img onClick={()=>setShowSearch(false)} src={assetsFront.cross_icon} className='inline w-3 cursor-pointer'/>
    </div>
  ):null
}

export default SearchBar
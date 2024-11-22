import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../pages/Home.jsx'
import Collection from '../pages/Collection.jsx'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'
import Product from '../pages/Product.jsx'
import Cart from '../pages/Cart.jsx'
import Login from '../pages/Login.jsx'
import PlaceOrder from '../pages/PlaceOrder.jsx'
import Orders from '../pages/Orders.jsx'
import SignUp from '../pages/SignUp.jsx'
import Error from '../pages/error/Error.jsx'
import MainLayout from "../components/MainLayout.jsx/MainLayout.jsx";
import 'react-toastify/dist/ReactToastify.css';
import ForgotPassword from "../pages/ForgotPassword.jsx";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getDesignTokens } from '../theme.jsx';
import { useContext, useMemo } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import '../language/i18n.js'; // Import the i18n configuration

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<Error/>,
        children:[
            {
                index:1,
                element:<Home/>
            },{
                path:"collection",
                element:<Collection/>
            },{
                path:"about",
                element:<About/>
            },{
                path:"contact",
                element:<Contact/>
            },{
                path:"product/:productId",
                element:<Product/>
            },{
                path:"cart",
                element:<Cart/>
            },{
                path:"login",
                element:<Login/>
            },{
                path:"place-order",
                element:<PlaceOrder/>
            },{
                path:"orders",
                element:<Orders/>
            },{
                path:"sign-up",
                element:<SignUp/>
            },{
                path:"forget-password",
                element:<ForgotPassword/>
            }
            
        ]
    }
])

const AppRouter = () => {
const {mode}=useContext(ShopContext)
const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
          <RouterProvider router={router} />
        </div>
      </ThemeProvider>
    );
  }
  
  export default AppRouter
import React from "react";
import ReactDOM from "react-dom/client";
import Head from "./Component/Header";
import Main from "./Component/Body";
import Footer from "./Component/Footer";
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";
import ErrorElement from "./ErrorElement";
import RestaurantMenu from "./Component/RestaurantMenu";
const Layout=()=>{
  return(
    <div>
      <Head/>
      <Outlet/>   
    </div>
  );
};

const AppRouter=createBrowserRouter(
  [
    {
      path:"/",
      element:<Layout/>,
      children:[
       { path:"/",
        element:<Main/>
       },
       {
         path:"about",
         element:<Footer/>,
       },
       {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>,
      },
      ],
      errorElement:<ErrorElement/>,
    },
    
  ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter}/>);


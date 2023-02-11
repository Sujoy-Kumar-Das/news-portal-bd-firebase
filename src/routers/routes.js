import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Catagory from "../pages/Shared/rightSideNav/Catagory/Catagory";

export const routers = createBrowserRouter([
    {path:'/',
    element:<Main></Main>,
    children:[
        {path:'/',element:<Home></Home>},
        {path:'/catagory/:id',element:<Catagory></Catagory>}
    ]
}
])
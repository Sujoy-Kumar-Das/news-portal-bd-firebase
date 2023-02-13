import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Catagory from "../pages/Shared/rightSideNav/Catagory/Catagory";

export const routers = createBrowserRouter([
    {path:'/',
    element:<Main></Main>,
    children:[
        {path:'/',
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5000/')
        },
        {path:'/catagory/:id',
        element:<Catagory></Catagory>,
        loader:({params})=>fetch(`http://localhost:5000/catagory/${params.id}`)
        }
    ]
}
])
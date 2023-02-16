import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login/Login";
import Register from "../pages/login/Register/Register";
import News from "../pages/news/News";
import TermsAndConditions from "../pages/Others/TermsAndConditions";
// import NewsDetail from "../pages/Shared/NewsDetail/NewsDetail";
import Catagory from "../pages/Shared/rightSideNav/Catagory/Catagory";
import PrivetRouter from "./privetRouter/PrivetRouter";

export const routers = createBrowserRouter([
    {path:'/',
    element:<Main></Main>,
    children:[
        {path:'/',
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5000/news')
        },
        {path:'/catagory/:id',
        element:<Catagory></Catagory>,
        loader:({params})=>fetch(`http://localhost:5000/catagory/${params.id}`)
        },
        {path:'/news/:id',
        element:<PrivetRouter><News></News></PrivetRouter>,
        loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/terms',
            element:<TermsAndConditions></TermsAndConditions>
        }
    ]
}
])
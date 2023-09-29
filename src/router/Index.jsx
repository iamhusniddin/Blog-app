import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import Details from "../pages/Details";
import Home from "../pages/Home";
import CreatePost from "../pages/Post/CreatePost";
import EditPost from "../pages/Post/EditPost";



const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout />,
        children: [
            {
                path:'/',
                element:<Home />,
            },
            {
                path:'details',
                element: <Details/>
            },
            {
                path:'create-post',
                element:<CreatePost />
            },
            {
                path:'edit-post',
                element:< EditPost />
            }
        ]
    },
    {
        path:'/sign-in',
        element: <SignIn/>
    },
    {
        path:'/sign-up',
        element: <SignUp/>
    }
])

export default router
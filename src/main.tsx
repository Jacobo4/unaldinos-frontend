//Core
import React from 'react'
import ReactDOM from 'react-dom/client'
// Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Styles
import "@styles/index.css";
//Layout
import Layout from "@layout/Layout.tsx";
//Pages
import Home from "./pages/Home/Home.tsx";
import Admin from "./pages/Admin/Admin.tsx";
import Profile from "./pages/Profile/Profile.tsx";

const router = createBrowserRouter([
   {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/admin",
                element: <Admin/>,
            },
            {
                path: "/profile",
                element: <Profile/>,
            },

        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

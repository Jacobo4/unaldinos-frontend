//Core
import React from 'react'
import ReactDOM from 'react-dom/client'
// Router
import {createBrowserRouter, RouterProvider} from "react-router-dom";
// Auth
import {createRoot} from 'react-dom/client';
import {Auth0Provider} from '@auth0/auth0-react';
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
        <Auth0Provider
            domain={import.meta.env.VITE_AUTH_DOMAIN}
            clientId={import.meta.env.VITE_AUTH_CLIENTID}
            authorizationParams={{
                redirect_uri: window.location.origin
            }}
        >
            <RouterProvider router={router}/>
        </Auth0Provider>,
    </React.StrictMode>,
)

 //
 // audience={API_AUDIENCE}&
 //    scope=offline_access&
 //    response_type=code&
 //    client_id={yourClientId}&
 //    redirect_uri={https://yourApp/callback}&
 //    state={OPAQUE_VALUE}
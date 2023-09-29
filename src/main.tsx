import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "@layout/Layout.tsx";

const router = createBrowserRouter([
   {
        path: "/",
        element: <Layout/>,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: "home/",
                element: <App/>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

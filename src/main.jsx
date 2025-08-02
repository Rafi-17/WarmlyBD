import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx'
import AuthProvider from './providers/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <AuthProvider><RouterProvider router={router} /></AuthProvider>
    </div>
  </React.StrictMode>,
)

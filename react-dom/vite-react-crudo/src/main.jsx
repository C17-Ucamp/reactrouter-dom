import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Ricks from './components/Ricks.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Info from './components/Info.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>
  },
  {
    path:'/ricks',
    element: <Ricks/>
  },
  {
    path:'/info/:id',
    element: <Info />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
)

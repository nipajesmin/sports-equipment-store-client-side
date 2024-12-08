import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../components/HomeLayout';
import EquipmentDetails from '../components/EquipmentDetails';
import Equipments from '../components/Equipments';
import EquipmentCart from '../components/EquipmentCart';
import AuthLayout from '../components/AuthLayout';
import Login from './Login';
import Register from './Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    //loader: () => fetch('http://localhost:5000/addEquipments'),
  },
  {
    path: "/equipments",
    element: <EquipmentCart></EquipmentCart>,
    
  },
  {
    path: "/equipment/:id",
    element: <EquipmentDetails></EquipmentDetails>,
    
      
  },
  {
    path: "/login",
    element: <Login></Login>,
    
      
  },

  {
    path: "/register",
    element: <Register></Register>,
    
      
  },

  // {
  //   path: "/auth",
  //   element: <AuthLayout></AuthLayout>,
  //   children:[
      
  //     {
  //       path: "/auth/register",
  //       element: <Register></Register>,
  //     }
  //   ]
      
  // },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;

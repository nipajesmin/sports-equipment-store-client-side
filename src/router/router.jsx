import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../components/HomeLayout';
import EquipmentDetails from '../components/EquipmentDetails';
import Equipments from '../components/Equipments';
import EquipmentCart from '../components/EquipmentCart';
import AuthLayout from '../components/AuthLayout';
import Login from './Login';
import Register from './Register';
import ProfileUsers from '../components/ProfileUsers';
import AddEquipments from '../components/AddEquipments';
import MyEquipments from '../components/MyEquipments';
import PrivateRoute from './PrivateRoute';
import AllSportsEquip from '../components/AllSportsEquip';
import UpdateEquipment from '../components/UpdateEquipment';
import Error from '../components/Error';
import AboutUs from '../components/AboutUs';
import FAQs from '../components/FAQs';


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
    path: "/updateEquipment/:id",
    element: <PrivateRoute><UpdateEquipment></UpdateEquipment></PrivateRoute>,
    
      
  },
  {
    path: "/allSportsEquipment",
    element: <AllSportsEquip></AllSportsEquip>,
    
      
  },
  {
    path: "/addEquipments",
    element: <AddEquipments></AddEquipments>,
    
      
  },
  {
    path: "/myEquipments",
    element: <MyEquipments></MyEquipments>,
    
      
  },
  {
    path: "/login",
    element: <Login></Login>,
    
      
  },

  {
    path: "/register",
    element: <Register></Register>,
    
      
  },
  {
    path: "/profileUsers",
    element: <ProfileUsers></ProfileUsers> ,
    loader: () => fetch('https://sports-equipment-store-server-side.vercel.app/users')
      
  },
  {
    path: "/aboutUs",
    element: <AboutUs></AboutUs> ,
      
  },
  {
    path: "/faqS",
    element: <FAQs></FAQs> ,
      
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

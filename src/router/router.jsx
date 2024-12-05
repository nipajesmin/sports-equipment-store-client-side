import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../components/HomeLayout';
import Error from '../components/Error';
import AddEquipments from '../components/AddEquipments';
import UpdateEquipment from '../components/UpdateEquipment';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/addEquipments",
    element: <AddEquipments></AddEquipments>,
  },
  {
    path: "/updateEquipments",
    element: <UpdateEquipment></UpdateEquipment>,
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from "./pages/Dashboard.jsx";

import {createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider} from "react-router-dom";
import Bookings from "./pages/Bookings.jsx";
import Cabins from "./pages/Cabins.jsx";
import Users from "./pages/Users.jsx";
import Settings from "./pages/Settings.jsx";
import Account from "./pages/Account.jsx";
import Login from "./pages/Login.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

const router = createBrowserRouter(
 createRoutesFromElements(
  <>
  <Route  element={<App />}>
   <Route index element={<Navigate to="/dashboard" replace />} />
   <Route path="dashboard" element={<Dashboard />} />
   <Route path="bookings" element={<Bookings />} />
   <Route path="cabins" element={<Cabins />} />
   <Route path="users" element={<Users />} />
   <Route path="settings" element={<Settings />} />
   <Route path="account" element={<Account />} />

  </Route>
<Route path="login" element={<Login />} />
<Route path="*" element={<PageNotFound />} />
  </>

 )
);

createRoot(document.getElementById('root')).render(

  <StrictMode>

   <RouterProvider router={router} />

  </StrictMode>,
)

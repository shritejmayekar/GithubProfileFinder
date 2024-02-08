import React from 'react'
import {
    createBrowserRouter,
} from "react-router-dom";
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/layout/Footer';
import User from './pages/User';

const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home /><Footer/></>,
    },
    {
      path: "about",
      element: <><Navbar/><About /><Footer/></>,
    },
    {
      path: "user/:login",
      element: <><Navbar/><User /><Footer/></>,
    },
  ]);

export default router;

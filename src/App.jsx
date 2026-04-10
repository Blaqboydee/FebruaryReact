
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "./components/Button";
import "./App.css";
import Input from "./components/Input";
import Signup from "./components/SignUp"
import Login from "./pages/Login"
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Details from "./pages/Details";
import Dashboard from "./pages/Dashboard";
import Profile from "./components/Profile";
import Products from "./components/Products";
import Activity from "./components/Activity";
import Education from "./components/Education"
import Trend from "./components/Trend";
import Overview from "./components/Overview";
import Productdetails from "./components/Productdetails";

function Layout() {

  const location = useLocation();
  console.log(location.pathname);

 

  const noNavBarPaths = ["/login", "/signup"]
  const hideNavbar = noNavBarPaths.includes(location.pathname)
  console.log(hideNavbar);


  

  return (
    <>
      {!hideNavbar && < Navbar />}
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/landinpage" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/details/:caroline" element={<Details/>}/>


        <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Overview/>}/>
        <Route path="/dashboard/profile" element={<Profile/>}/>
        <Route path="/dashboard/products" element={<Products/>}/>
        <Route path="/dashboard/activity" element={<Activity/>}/>
        <Route path="/dashboard/education" element={<Education/>}/>
        <Route path="/dashboard/trend" element={<Trend/>}/>
        <Route path="/dashboard/productdetails/:id" element={<Productdetails/>}/>
        </Route>



        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function App() {
  
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;

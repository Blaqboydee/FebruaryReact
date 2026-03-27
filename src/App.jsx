
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Button from "./Button";
import "./App.css";
import Input from "./Input";
import Signup from "./SignUp"
import Login from "./pages/Login"
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import { Navbar } from "./Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Details from "./pages/Details";
import Dashboard from "./pages/Dashboard";
import Profile from "./Profile";
import Products from "./Products";
import Activity from "./Activity";
import Education from "./Education"
import Trend from "./Trend";
import Overview from "./Overview";

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


        <Route path="/dashboard" element={<Dashboard/>}>
        <Route index element={<Overview/>}/>
        <Route path="/dashboard/profile" element={<Profile/>}/>
        <Route path="/dashboard/products" element={<Products/>}/>
        <Route path="/dashboard/activity" element={<Activity/>}/>
        <Route path="/dashboard/education" element={<Education/>}/>
        <Route path="/dashboard/trend" element={<Trend/>}/>
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

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Array from './Array.jsx';
import SignUp from './SignUp.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
 {/* <Array/> */}
 {/* <SignUp/> */}
  </StrictMode>,
)

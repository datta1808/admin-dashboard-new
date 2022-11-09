import './App.css';
import  Dashboard  from './Components/Dashboard/Dashboard';
import UserDashboard from './Components/UserDashboard/UserDashborad';
import {Login} from './Components/Login/Login'
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

const App=()=>{
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Login/>}/>
             <Route path="/dashboard" element={<Dashboard/>}/>
             <Route path="/user" element={<UserDashboard/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
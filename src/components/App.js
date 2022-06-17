import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState, useContext} from "react";
import React from 'react';
import Signup from './Signup';
import Signin from "./Signin";
import Timeline from "./Timeline";
import UserContext from "../contexts/UserContext";

export default function App(){
    const [token, setToken] = useState(localStorage.getItem('linkr-user-token'))
    return(
        <UserContext.Provider value={{ token, setToken }}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Signin/>} />    
            <Route path="/signup" element={<Signup/>} />
            <Route path="/timeline" element={<Timeline/>} />
        </Routes>
    </BrowserRouter>
    </UserContext.Provider>
    );
}
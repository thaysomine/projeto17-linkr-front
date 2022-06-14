import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState, useContext} from "react";
import React from 'react';
import Signup from './Signup';
import UserContext from "../contexts/UserContext";

export default function App(){
    const [token, setToken] = useState(localStorage.getItem('likr-user-token'))
    return(
        <UserContext.Provider value={{ token, setToken }}>
        <BrowserRouter>
        <Routes>
            <Route path="/signup" element={<Signup/>} />
        </Routes>
    </BrowserRouter>
    </UserContext.Provider>
    );
}
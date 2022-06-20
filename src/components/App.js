import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Signup from "./Signup";
import Signin from "./Signin";
import Timeline from "./Timeline";
import HashtagPage from "./HashtagPage";
import UserContext from "../contexts/UserContext";
import { TrendingProvider } from "../contexts/TrendingContext";

export default function App() {
    const userObject = localStorage.getItem('linkr-user-credentials')
    const {token, userId} = JSON.parse(userObject) || {token: null, userId: null}
    const [userInfo, setUserInfo] = useState(
        {token: token, 
         userId: userId}
    );
    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            <TrendingProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Signin />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/timeline" element={<Timeline />} />
                        <Route
                            path="/hashtag/:hashtag"
                            element={<HashtagPage />}
                        />
                    </Routes>
                </BrowserRouter>
            </TrendingProvider>
        </UserContext.Provider>
    );
}

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
    const [userInfo, setUserInfo] = useState(
        {token: localStorage.getItem("linkr-user-token"), 
         userId: 3}
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

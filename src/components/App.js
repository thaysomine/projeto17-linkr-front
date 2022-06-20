import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useContext } from "react";
import React from "react";
import Signup from "./Signup";
import Signin from "./Signin";
import Timeline from "./Timeline";
import HashtagPage from "./HashtagPage";
import Userpage from "./Userpage";
import UserContext from "../contexts/UserContext";
import { TrendingProvider } from "../contexts/TrendingContext";

export default function App() {
    const [token, setToken] = useState(
        localStorage.getItem("linkr-user-token")
    );
    return (
        <UserContext.Provider value={{ token, setToken }}>
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
                        <Route path="/user/:id" element={<Userpage />} />
                    </Routes>
                </BrowserRouter>
            </TrendingProvider>
        </UserContext.Provider>
    );
}

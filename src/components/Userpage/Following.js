import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import axios from "axios";

import UserContext from "../../contexts/UserContext";
import api from "../../api";

import { Div } from "./styles";

export default function Following({followstatus, setIsFollowing, followerId}) {
    const { userInfo } = useContext(UserContext);
    const { token, userId } = userInfo;
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    console.log(userId, followerId, token);

    function handleClick() {
        console.log(followstatus)
        if(followstatus==='Follow') {
            setIsFollowing(null);
            const URL = `/follow/${followerId}`;
            console.log(URL)
            const promise = api.post(URL, config);
            promise.then((response) => {
                console.log(response);
                setIsFollowing(true);
            });
            promise.catch((e) => {
                console.log(e);
                setIsFollowing(false);
                alert("Error");
            });
        }
        if(followstatus==='Unfollow') {
            setIsFollowing(null);
            const URL = `/unfollow/${followerId}`;
            const promise = api.delete(URL, config);
            promise.then((response) => {
                console.log(response);
                setIsFollowing(false);
            });
            promise.catch((e) => {
                console.log(e);
                setIsFollowing(true);
                alert("Error");
            });
        }
    }

    return (
        <Div className={followstatus} onClick={handleClick}>{followstatus}</Div>
    )
}
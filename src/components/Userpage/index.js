import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import axios from "axios";

import UserContext from "../../contexts/UserContext";
import { TrendingContext } from "../../contexts/TrendingContext";

import { Title, ContainerUser } from "./styles";
import { Image } from "../Navbar/styles";

import Navbar from "../Navbar";
import Main from "../MainContent";
import Following from "./Following";
import api from "../../api";

import SearchBar from "../Navbar/SearchBar";

export default function Userpage() {
    const { userInfo } = useContext(UserContext);
    const { token, userId } = userInfo;
    const { trending } = useContext(TrendingContext);
    const { id } = useParams();

    const [posts, setPosts] = useState([]);
    const [img, setImg] = useState([]);
    const [username, setUsername] = useState("");
    const [isFollowing, setIsFollowing] = useState(null);
    let followstatus;

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const URL = `user/${id}`;
        const promise = api.get(URL, config);
        promise.then((response) => {
            setPosts(response.data.posts);
            setUsername(response.data.name);
            setImg(response.data.imageUrl);
            setIsFollowing(response.data.isFollowing);
        });
        promise.catch((e) => console.log(e));
    }, [id]);

    if (isFollowing === null) {
        followstatus = 'Loading';
    } else if (!isFollowing) {
        followstatus = 'Follow';
    } else {
        followstatus = 'Unfollow';
    }
    
    return (
        <>
            <Navbar />
            <ContainerUser>
                <div>
                    <SearchBar screen="mobile" />
                    <div className="wrapper">
                        <div className='top'>
                            <Image src={img} />
                            <Title>{username}'s posts</Title>
                        </div>
                        {(userId === id) ? <></> : <Following followstatus={followstatus} setIsFollowing={setIsFollowing} userId={userId} followerId={id} />}                      
                    </div>
                    <Main posts={posts} hashtags={trending} />
                </div>
            </ContainerUser>
        </>
    );
}

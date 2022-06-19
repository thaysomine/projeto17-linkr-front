import { ContainerHashtag, Title } from "./style";
import MainContent from "../MainContent";
import Navbar from "../Navbar";
import { useParams } from "react-router-dom";
import api from "../../api";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { TrendingContext } from "../../contexts/TrendingContext";

const HashtagPage = () => {
    const { hashtag: hashtagName } = useParams();
    const [posts, setPosts] = useState();
    const { token } = useContext(UserContext);
    const { trending } = useContext(TrendingContext);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const request = api.get(`hashtag/${hashtagName}`, config);
        request.then((response) => {
            setPosts(response.data);
        });
        request.catch((err) => {
            console.log(err);
        });
    }, [hashtagName, token]);

    return (
        <>
            <Navbar />
            <ContainerHashtag>
                <div>
                    <Title># {hashtagName}</Title>
                    <MainContent posts={posts} hashtags={trending} />
                </div>
            </ContainerHashtag>
        </>
    );
};

export default HashtagPage;

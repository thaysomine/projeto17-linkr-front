import { ContainerHashtag, Title } from "./style";
import MainContent from "../MainContent";
import Navbar from "../Navbar";
import { useParams } from "react-router-dom";
import api from "../../api";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";

const HashtagPage = () => {
    const { hashtag: hashtagName } = useParams();
    const [posts, setPosts] = useState();
    const { token } = useContext(UserContext);
    console.log(token);
    const hashtags = ["node", "javascript", "python", "linux"];

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const request = api.get(`hashtag/${hashtagName}`, config);
        request.then((response) => {
            console.log(response.data);
            setPosts(response.data);
        });
        request.catch((err) => {
            console.log(err);
        });
    }, [hashtagName]);

    return (
        <>
            <Navbar />
            <ContainerHashtag>
                <div>
                    <Title># {hashtagName}</Title>
                    <MainContent posts={posts} hashtags={hashtags} />
                </div>
            </ContainerHashtag>
        </>
    );
};

export default HashtagPage;

import { ContainerHashtag, Feed, MainContent, Title } from "./style";
import Navbar from "../Navbar";
import { useParams } from "react-router-dom";
import api from "../../api";
import { useContext, useEffect, useState } from "react";
import Post from "../Post";
import Trending from "../Trending";
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

    console.log(hashtagName);
    console.log(posts);

    return (
        <ContainerHashtag>
            <Navbar />
            <div>
                <Title># {hashtagName}</Title>
                <MainContent>
                    <Feed>
                        {posts?.map((post) => {
                            return (
                                <Post
                                    userName={post.username}
                                    postContent={post.description}
                                    link={post.link}
                                    likesCount={0}
                                    imageUrl={post.imageUrl}
                                />
                            );
                        })}
                    </Feed>
                    <Trending hashtags={hashtags} />
                </MainContent>
            </div>
        </ContainerHashtag>
    );
};

export default HashtagPage;

import { ContainerHashtag, Feed, MainContent, Title } from "./style";
import Navbar from "../Navbar";
import { useParams } from "react-router-dom";
import api from "../../api";
import { useEffect, useState } from "react";
import Post from "../Post";
import Trending from "../Trending";

const HashtagPage = () => {
    const { hashtag: hashtagName } = useParams();
    const [posts, setPosts] = useState();
    const hashtags = ["node", "javascript", "python", "linux"];

    useEffect(() => {
        const config = {};
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
                        <Post
                            userName="sçal"
                            imageUrl="kdsa"
                            likesCount="dsalk"
                            link="sldak"
                            postContent="dczflskç"
                        />
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

import { Main, Posts, H1 } from "./styles";
import Navbar from "../Navbar";
import Post from "../Post";
import CreatePost from "../createPost";
import { useContext, useEffect, useState } from "react";
import api from "../../api";
import UserContext from "../../contexts/UserContext";
import { LineWave } from "react-loader-spinner";
import MainContent from "../MainContent";
import { TrendingContext } from "../../contexts/TrendingContext";
import { ChangeEvent } from "react";

function Timeline() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingChanged, setEditingChanged] = useState(false)
    const { userInfo } = useContext(UserContext);
    const { token } = userInfo;
    const { trending } = useContext(TrendingContext);

    console.log(editingChanged)

    function getPosts() {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
            params: { limit: 10 },
        };
        const promise = api.get("timeline", config);
        promise.then((response) => {
            setLoading(false);
            setPosts(response.data);
            console.log(response.data);
        });
        promise.catch((error) => {
            const confirm = window.confirm(
                "An error occured while trying to fetch the posts, please refresh the page"
            );
            if (confirm) window.location.reload();
        });
    }

    useEffect(getPosts, [editingChanged]);

    return (
        <>
            <Navbar />
            <Main>
                <H1>Timeline</H1>

                <Posts>
                    {/* {posts &&
                        posts.map((post, index) => {
                            const {
                                postId,
                                isOwner,
                                username,
                                description,
                                link,
                                likesCount,
                                imageUrl,
                                hashtag,
                            } = post;
                            return (
                                <Post
                                    key={index}
                                    isOwner={isOwner}
                                    postId={postId}
                                    username={username}
                                    postContent={description}
                                    link={link}
                                    likesCount={likesCount}
                                    imageUrl={imageUrl}
                                    hashtag={hashtag}
                                />
                            );
                        })} */}
                    <MainContent posts={posts} hashtags={trending} editingChanged = {editingChanged} setEditingChanged={setEditingChanged}>
                        <CreatePost></CreatePost>
                        {loading && <LineWave color="white" />}
                        {posts.length === 0 && !loading && (
                            <H1>There are no posts yet</H1>
                        )}
                    </MainContent>
                </Posts>
            </Main>
        </>
    );
}

export default Timeline;

import { MainContent as Content, Feed } from "./style";
import Trending from "../Trending";
import Post from "../Post";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

const MainContent = ({ posts, hashtags, children, editingChanged, setEditingChanged }) => {
    const { userInfo } = useContext(UserContext);
    
    //console.log("AQUIIIIIIIIIIIIIIIIi", userInfo.userId);
    return (
        <Content>
            <Feed>
                {children}
                {!posts?.length ? (
                    <h1 className="error">
                        Nenhum item encontrado na busca :/
                    </h1>
                ) : (
                    posts?.map((post, index) => {
                        return (
                            <Post
                                key={index}
                                editingChanged = {editingChanged}
                                setEditingChanged = {setEditingChanged}
                                username={post.username}
                                postContent={post.description}
                                link={post.link}
                                likesCount={post.likesCount}
                                imageUrl={post.imageUrl}
                                postId={post.postId}
                                isOwner={post.userId === userInfo.userId }
                                userId={post.userId}
                                sharedBy={post.sharedBy}
                            />
                        );
                    })
                )}
            </Feed>
            <Trending hashtags={hashtags} />
        </Content>
    );
};

export default MainContent;

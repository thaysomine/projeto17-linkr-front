import { MainContent as Content, Feed } from "./style";
import Trending from "../Trending";
import Post from "../Post";

const MainContent = ({ posts, hashtags, children }) => {
    return (
        <Content>
            <Feed>
                {children}
                {!posts?.length ? (
                    <h1 className="error">
                        Nenhum item encontrado na busca :/
                    </h1>
                ) : (
                    posts?.map((post) => {
                        return (
                            <Post
                                userName={post.username}
                                postContent={post.description}
                                link={post.link}
                                likesCount={0}
                                imageUrl={post.imageUrl}
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

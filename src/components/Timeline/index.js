import { Main, H1 } from "./styles";
import Navbar from "../Navbar";
import Post from "../Post";
import CreatePost from "../createPost";

function Timeline() {
    return (
        <>
            <Navbar />
            <Main>
                <H1>Timeline</H1>
                <CreatePost></CreatePost>
                <Post></Post>
            </Main>
        </>
    );
}

export default Timeline;

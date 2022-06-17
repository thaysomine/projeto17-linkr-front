import { Main, Posts } from "./styles"
import Navbar from "../Navbar"
import Post from "../Post"

function Timeline() {
    return (
        <Main>
            <Navbar />
            <Posts>
                <Post />
                <Post />
                <Post />
            </Posts>
        </Main>
    )
}

export default Timeline
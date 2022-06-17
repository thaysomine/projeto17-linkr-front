import { Main } from "./styles";
import Navbar from "../Navbar";
import Post from "../Post";

function Timeline() {
    alert(localStorage.getItem("linkr-user-token"));
    return (
        <Main>
            <Navbar></Navbar>
            <Post></Post>
        </Main>
    );
}

export default Timeline;

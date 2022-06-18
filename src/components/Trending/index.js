import { Link } from "react-router-dom";
import { ContainerTrending, List } from "./style";

const Trending = ({ hashtags }) => {
    return (
        <ContainerTrending>
            <h1>Trending</h1>
            <hr />
            <List>
                {hashtags?.map((hashtag) => {
                    return (
                        <li key={hashtag.name}>
                            <Link to={`/hashtag/${hashtag.name}`}>
                                # {hashtag.name}{" "}
                            </Link>
                        </li>
                    );
                })}
            </List>
        </ContainerTrending>
    );
};

export default Trending;

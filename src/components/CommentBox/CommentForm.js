import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { Form } from "./styles";

const CommentForm = ({ postId }) => {
    const { userInfo } = useContext(UserContext);
    const { token, userId } = userInfo;
    console.log(token, userId);
    return (
        <Form>
            <h1>Container de comentário {postId}</h1>
            <input type="text" name="comment" />
            <button>Comentar</button>
        </Form>
    );
};

export default CommentForm;

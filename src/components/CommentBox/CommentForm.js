import { useState } from "react";
import api from "../../api";
import { Form } from "./styles";

const CommentForm = ({ postId, userInfo }) => {
    const { token, userId } = userInfo;
    const [commentText, setCommentText] = useState("");
    console.log(token, userId);

    const submitHandler = (event) => {
        event.preventDefault();
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const request = api.post(
            "comment",
            { description: commentText, postId },
            config
        );
        request.then((response) => {
            setCommentText("");
        });
        request.catch((err) => console.log(err));
    };

    const writeHandler = (event) => {
        const value = event.target.value;
        setCommentText(value);
    };

    return (
        <Form onSubmit={submitHandler}>
            <h1>Fazer Comentário</h1>
            <div className="input-fields">
                <input
                    type="text"
                    name="comment"
                    onChange={writeHandler}
                    value={commentText}
                />
                <button>Comentar</button>
            </div>
        </Form>
    );
};

export default CommentForm;

import { useEffect } from "react";
import { CommentContainer } from "./styles";
import CommentForm from "./CommentForm";

const CommentBox = ({ postId }) => {
    useEffect(() => {}, []);
    return (
        <CommentContainer>
            <CommentForm postId={postId} />
            <h1>Container de comentário {postId}</h1>
        </CommentContainer>
    );
};

export default CommentBox;

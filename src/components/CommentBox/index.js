import { useEffect, useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { CommentContainer } from "./styles";
import CommentForm from "./CommentForm";
import api from "../../api";

const CommentBox = ({ postId }) => {
    const { userInfo } = useContext(UserContext);
    const { token, userId } = userInfo;
    const [comments, setComments] = useState();

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const request = api.get(`comment/${postId}`, config);
        request.then((response) => {
            console.log(response.data);
            setComments(response.data);
        });
        request.catch((err) => {
            console.log(err);
        });
    }, [token, userId]);
    return (
        <CommentContainer>
            <CommentForm postId={postId} userInfo={userInfo} />
            {/* {comments?.map((item) => {
                return item.description;
            })} */}
        </CommentContainer>
    );
};

export default CommentBox;

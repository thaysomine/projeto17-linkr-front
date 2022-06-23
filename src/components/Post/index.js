import {
    Body,
    VerticalStack,
    HorizontalStack,
    Likes,
    Hashtag,
    ChangeArea,
    PostForm,
    PostDescription,
    Content,
    ConfirmBox,
    ConfirmCard,
    CheckAnswer,
    GoBackButton,
    ConfirmButton,
    Input,
} from "./styles";
import { AiOutlineComment } from "react-icons/ai";
import { ProfPic, Image } from "../Navbar/styles";
import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router";
import ReactTooltip from "react-tooltip";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import LinkSnippet from "./LinkSnippet";
import { Link } from "react-router-dom";
import CommentBox from "../CommentBox";

function Post({
    postId,
    isOwner,
    username,
    postContent,
    link,
    likesCount,
    imageUrl,
    userId,
}) {
    const [isLoading, setIsLoading] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(0);
    const [editing, SetEditing] = useState(false);
    const [newContent, SetNewContent] = useState(postContent);
    const [ListLikes, SetListLikes] = useState([]);
    const [confirmDelete, SetConfirmDelete] = useState(false);
    const [comment, setComment] = useState(false);
    const token = localStorage.getItem("linkr-user-token");
    const navigate = useNavigate();

    console.log(postId, userId);
    function handleLike(like, postId) {
        // const promise = axios.post(`http://heroku-linkr-api.herokuapp.com/like/${postId}`,null
        const promise = axios.post(
            `http://localhost:5000/like/${postId}`,
            null,
            {
                headers: {
                    // Authorization: `Bearer ${token}`
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        promise.then((response) => {
            if (!like) {
                setLikes(likes + 1);
                console.log("curtiu");
            } else {
                setLikes(likes - 1);
                console.log("descurtiu");
            }
        });
        promise.catch((err) => {
            console.log(err);
        });
        setIsLiked(!like);
    }

    function likedByUser(postId) {
        if (token) {
            // const promise = axios.get(`http://heroku-linkr.herokuapp.com/liked/${postId}`, {
            const promise = axios.get(`http://localhost:5000/liked/${postId}`, {
                headers: {
                    // Authorization: `Bearer ${token}`
                    Authorization: `Bearer 222`,
                },
            });

            promise.then((response) => {
                if (response.data[0]) {
                    setIsLiked(true);
                } else {
                    setIsLiked(false);
                }
            });
            promise.catch((err) => {
                console.log(err);
            });
        }
    }

    function LikeCount(postId) {
        useEffect(() => {
            // const promise = axios.get(`http://heroku-linkr-api.herokuapp.com/likes/${postId}`)
            const promise = axios.get(`http://localhost:5000/likes/${postId}`);
            promise.then((response) => {
                setLikes(parseInt(response.data.count));
            });
            promise.catch((err) => {
                console.log(err);
            });
        }, [handleLike]);
    }

    function Lista(postId) {
        useEffect(() => {
            // const promise = axios.get(`http://heroku-linkr-api.herokuapp.com/names/${postId}`)
            const promise = axios.get(`http://localhost:5000/names/${postId}`, {
                headers: {
                    // Authorization: `Bearer ${token}`
                    Authorization: `Bearer ${token}`,
                },
            });
            promise.then((response) => {
                SetListLikes(response.data);
            });
            promise.catch((err) => {
                console.log(err);
            });
        }, [isLiked]);
    }

    let finishEditing = false;

    function performEdit() {
        if (!editing) {
            SetEditing(true);
        } else {
            const promise = axios.put(
                `http://localhost:5000/post/${postId}`,
                { description: newContent, postId: postId },
                {
                    headers: {
                        // Authorization: `Bearer ${token}`
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            promise.then(() => {
                SetEditing(false);
                SetNewContent(postContent);
            });
            promise.catch((err) => {
                alert("Falha ao editar conteúdo");
            });
        }
    }

    function handleEditionValue(e) {
        SetNewContent(e.target.value);
    }

    function performDelete(postId) {
        // const promise = axios.delete(`http://heroku-linkr-api.herokuapp.com/posts/${postId}`)
        const promise = axios.delete(`http://localhost:4000/posts/${postId}`, {
            headers: {
                // Authorization: `Bearer ${token}`
                Authorization: `Bearer 222`,
            },
        });
        promise.then((response) => {
            console.log(response);
            setIsLoading(false);
            SetConfirmDelete(false);
            navigate("/timeline");
        });
        promise.catch((err) => {
            alert("Ops! Algo deu errado, tente novamente mais tarde");
            setIsLoading(false);
            SetConfirmDelete(false);
            console.log(err);
        });
    }

    function showLikes(postId) {
        {
            Lista(idPost);
        }
        {
            likedByUser(idPost);
        }
        {
            LikeCount(idPost);
        }
    }

    const idPost = 4;

    function formatHashtags(text) {
        const regex = /((?:^|\s)(?:#[a-z\d-]+))/gi;
        const splittedText = text.split(regex);

        return splittedText.filter(Boolean).map((string, index) => {
            if (!string.includes("#")) return <span key={index}>{string}</span>;
            return (
                <Hashtag key={index}>
                    <Link to={`/hashtag/${string.replace("#", "").trim()}`}>
                        {string}
                    </Link>
                </Hashtag>
            );
        });
    }

    return (
        <>
            {confirmDelete ? (
                <ConfirmBox>
                    <ConfirmCard>
                        {isLoading ? (
                            <>
                                <p>Apagando...</p>
                                <ThreeDots
                                    color="white"
                                    height={80}
                                    width={80}
                                />
                            </>
                        ) : (
                            <>
                                <p>Deseja mesmo deletar este post?</p>
                                <CheckAnswer>
                                    <GoBackButton
                                        onClick={() => {
                                            SetConfirmDelete(false);
                                        }}
                                    >
                                        Não
                                    </GoBackButton>
                                    <ConfirmButton
                                        onClick={() => {
                                            setIsLoading(true);
                                            performDelete(idPost);
                                        }}
                                    >
                                        Sim
                                    </ConfirmButton>
                                </CheckAnswer>
                            </>
                        )}
                    </ConfirmCard>
                </ConfirmBox>
            ) : (
                ""
            )}

            <Body>
                <VerticalStack margin={8}>
                    <ProfPic>
                        <Image
                            src={imageUrl}
                            onClick={() => navigate(`/user/${userId}`)}
                        />
                    </ProfPic>
                    <Likes isLiked={isLiked}>
                        <ion-icon
                            data-tip={ListLikes}
                            name={`heart${isLiked ? "" : "-outline"}`}
                            onClick={() => handleLike(isLiked, idPost)}
                        />
                        {showLikes(idPost)}
                        {/* {Lista(idPost)}
                    {likedByUser(idPost)}
                    {LikeCount(idPost)} */}

                        {`${likes} likes`}
                        <ReactTooltip type="info" effect="solid" />
                    </Likes>
                    <AiOutlineComment
                        size={30}
                        onClick={() => setComment(!comment)}
                        cursor="pointer"
                    />
                </VerticalStack>

                <VerticalStack width={100}>
                    <HorizontalStack alignment="space-between">
                        <Link to={`/user/${userId}`}> {username} </Link>
                        <ChangeArea visible={isOwner}>
                            <ion-icon
                                name="create-outline"
                                onClick={() => performEdit()}
                            />
                            <ion-icon
                                name="trash-bin-outline"
                                onClick={() => SetConfirmDelete(true)}
                            />
                        </ChangeArea>
                    </HorizontalStack>
                    {editing ? (
                        <>
                            <PostForm>
                                <Content
                                    editing={editing}
                                    autoFocus={true}
                                    type="text"
                                    value={newContent}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            SetEditing(false);
                                            performEdit();
                                        }
                                        if (e.key === "Escape") {
                                            SetEditing(false);
                                            SetNewContent(postContent);
                                        }
                                    }}
                                    onChange={(e) => handleEditionValue(e)}
                                ></Content>
                            </PostForm>
                        </>
                    ) : (
                        <PostDescription>
                            {formatHashtags(postContent)}
                        </PostDescription>
                    )}

                    <HorizontalStack>
                        <LinkSnippet url={link} />
                    </HorizontalStack>
                </VerticalStack>
            </Body>
            {!comment ? <></> : <CommentBox postId={postId} />}
        </>
    );
}

export default Post;

import { Body, BodyPost, VerticalStack, HorizontalStack, Likes, Hashtag, ChangeArea, PostForm, PostDescription,  Content, ConfirmBox, RepostBox, ConfirmCard, CheckAnswer, GoBackButton, ConfirmButton, Input } from "./styles"
import { ProfPic, Image } from "../Navbar/styles"
import { useState, useEffect, useRef, useContext } from "react"
import { useNavigate } from 'react-router';
import ReactTooltip from 'react-tooltip';
import { ThreeDots } from "react-loader-spinner";
import api from "../../api";
import LinkSnippet from "./LinkSnippet"
import UserContext from "../../contexts/UserContext"

function Post(props) { 



    const { key,postId, userId, isOwner, sharedBy, username, postContent, link, likesCount, imageUrl, hashtag } = props
    console.log(key,username,
                                postContent,
                                link,
                                likesCount,
                                imageUrl,
                                postId,
                                isOwner,
                                userId,
                                sharedBy)

    const { userInfo } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);
    const [isLiked, setIsLiked] = useState(false)
    const [likes, setLikes] = useState(likesCount)
    const [repost, setRepost] = useState(0)
    const [editing, SetEditing] = useState(false)
    const [newContent, SetNewContent] = useState(postContent);
    const [ListLikes, SetListLikes] = useState([])
    const [confirmDelete, SetConfirmDelete] = useState(false)
    const [confirmRepost, SetConfirmRepost] = useState(false)
    const token = localStorage.getItem('linkr-user-token')
    const userLocal = localStorage.getItem("linkr-user-id")
    console.log(userInfo)
    const navigate = useNavigate();


    const isRepost = true
 
    function handleLike(like, postId) {

        const promise = api.post(`like/${postId}`, null
            , {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            }
        )

        promise.then((response) => {
            if (!like) {
                setLikes(likes + 1)
                console.log("curtiu")
            } else {
                setLikes(likes - 1)
                console.log("descurtiu")
            }


        })
        promise.catch((err) => {
            console.log(err)
        })
        setIsLiked(!like)
    }

    function likedByUser(postId) {
        if (token) {
            const promise = api.get(`liked/${postId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            promise.then((response) => {

                if (response.data[0]) {
                    setIsLiked(true)
                }
                else {
                    setIsLiked(false)
                }
            })
            promise.catch((err) => {
                console.log(err)
            })
        }
    }

    function LikeCount(postId) {
        useEffect(() => {
            const promise = api.get(`likes/${postId}`)
            promise.then((response) => {

                setLikes(parseInt(response.data.count))
            })
            promise.catch((err) => {
                console.log(err)
            })
        }, [handleLike])
    }

    function Lista(postId) {
        useEffect(() => {
            const promise = api.get(`names/${postId}`
                , {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            promise.then((response) => {

                SetListLikes(response.data)
            }
            )
            promise.catch((err) => {
                console.log(err)
            }
            )
        }, [isLiked])
    }

    let finishEditing = false
    

    function performEdit() {
        if (!editing) {
            SetEditing(true);
        }
        else {

            const promise = api.put(`post/${postId}`, {description: newContent, postId: postId}
            , {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            }
        )

        promise.then(() => {
            SetEditing(false)
            SetNewContent(postContent)
        })
        promise.catch((err) => {
            alert("Falha ao editar conteúdo")
        })
            

        }
    }

    function handleEditionValue(e) {
        SetNewContent(e.target.value)
    }

    function performDelete(postId) {
        const promise = api.delete(`posts/${postId}`
            , {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        promise.then((response) => {
            console.log(response)
            setIsLoading(false);
            SetConfirmDelete(false);
            window.location.reload();
        }
        )
        promise.catch((err) => {
            alert("Ops! Algo deu errado, tente novamente mais tarde")
            setIsLoading(false);
            SetConfirmDelete(false);
            console.log(err)
        }
        )
    }

    function showLikes(postId) {
        { Lista(postId) }
        { likedByUser(postId) }
        { LikeCount(postId) }
    }


    function formatHashtags(text){
        const regex = /((?:^|\s)(?:#[a-z\d-]+))/gi
        const splittedText = text.split(regex)

        return splittedText.filter(Boolean).map((string,index)=>{
            if(!string.includes('#')) return <span key={index}>{string}</span>
            return <Hashtag key={index}> {string} </Hashtag>
        })
    }

    function getRepost(postId){
        const promise = api.get(`repost/${postId}`
        , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        promise.then((response) => {
            setRepost(parseInt(response.data.rowCount))
        }
        )
        promise.catch((err) => {
            
            console.log(err)
        }
        )
    }

    function performRepost(postId){
        const body = {
            userId: (userLocal>0)?parseInt(userLocal):0,
            postId: postId,
            userPost: userId
        }
        console.log(body)

        const promise = api.post(`repost/${postId}
        `,body
        ,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        promise.then((response) => {
            window.location.reload();
            SetConfirmRepost(false)
            setIsLoading(false)
            
            
        }
        )
        promise.catch((err) => {
            alert("Ops! Algo deu errado, tente novamente mais tarde")
            setIsLoading(false)
            SetConfirmRepost(false)
            console.log(err)
        }
        )
    }

    function getAllRepost(){
        const promise = api.get(`allreposts/`)
        promise.then((response) => {
            console.log(response)
        }
        )
        promise.catch((err) => {
            
            console.log(err)
        }
        )
    }



    return (
        <>
            {confirmDelete ?
                (
                    <ConfirmBox>
                        <ConfirmCard>

                            {isLoading ?
                                <>
                                    <p>Apagando...</p>
                                    <ThreeDots color="white" height={80} width={80} />
                                </>
                                :
                                <>
                                    <p>
                                    Are you sure you want to delete this post?
                                    </p>
                                    <CheckAnswer>
                                        <GoBackButton onClick={() => { SetConfirmDelete(false) }}> No, go back</GoBackButton>
                                        <ConfirmButton onClick={() => {
                                            setIsLoading(true)
                                            performDelete(postId)
                                        }}>
                                            Yes, delete it
                                        </ConfirmButton>
                                    </CheckAnswer>
                                </>
                            }
                        </ConfirmCard>

                    </ConfirmBox>

                ) : ("")
            }

            {confirmRepost ?
                (
                    <ConfirmBox>
                        <ConfirmCard>

                            {isLoading ?
                                <>
                                    <p>Repostandooo...</p>
                                    <ThreeDots color="white" height={80} width={80} />
                                </>
                                :
                                <>
                                    <p>
                                    Do you want to re-post this link?
                                    </p>
                                    <CheckAnswer>
                                        <GoBackButton onClick={() => { SetConfirmRepost(false) }}> No, cancel</GoBackButton>
                                        <ConfirmButton onClick={() => {
                                            setIsLoading(true)
                                            performRepost(postId)
                                        }}>
                                            Yes, share!
                                        </ConfirmButton>
                                    </CheckAnswer>
                                </>
                            }
                        </ConfirmCard>

                    </ConfirmBox>

                ) : ("")
            }
                    
            <Body>
                <>
                {sharedBy?
                    (<RepostBox>
                    <ion-icon name="repeat"/>
                    <span>Re-posted by <strong>{sharedBy}</strong> </span>
                    </RepostBox>) 
                :
                ('')}
                </>
                <BodyPost>
                <VerticalStack margin={8}>
                    <ProfPic>
                        <Image src={imageUrl} />
                    </ProfPic>
                    <Likes isLiked={isLiked}>
                        <ion-icon data-tip={ListLikes} name={`heart${isLiked ? '' : '-outline'}`}
                            onClick={() => handleLike(isLiked, postId)}
                        />
                        {showLikes(postId)}

                        {`${likes} likes`}
                        <ReactTooltip type="info" effect="solid" />
                    </Likes>
                    <Likes>
                        <ion-icon name="chatbubble-ellipses-outline"/>
                        {`0 comments`}
                    </Likes>
                    <Likes>
                        <ion-icon name="repeat" onClick={() => SetConfirmRepost(true)}/>
                        {getRepost(postId)}
                        {`${repost} re-posts`}
                    </Likes>
                </VerticalStack>

                <VerticalStack width={100} >

                    <HorizontalStack alignment="space-between">
                        {username}
                        <ChangeArea visible = {parseInt(userId)===parseInt(userLocal)}>
                            <ion-icon name="create-outline" onClick={() => performEdit()} />
                            <ion-icon name="trash-bin-outline" onClick={() => SetConfirmDelete(true)} />
                        </ChangeArea>
                    </HorizontalStack>
                    {editing ?
                        <>
                         <PostForm>
                            <Content
                                editing = {editing}
                                autoFocus = {true}
                                type="text"
                                value={newContent}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        SetEditing(false)
                                        performEdit()
                                        
                                    }
                                    if (e.key === 'Escape') {
                                        SetEditing(false)
                                        SetNewContent(postContent)
                                    }
                                }}
                                onChange={(e) => handleEditionValue(e)}
                            ></Content>
                        </PostForm>
                        </>
                        :
                        
                            <PostDescription>{formatHashtags(postContent)}</PostDescription>
                      

                    }


                    <HorizontalStack>
                        <LinkSnippet url={link} />
                    </HorizontalStack>
                </VerticalStack>
            </BodyPost>
        </Body>
        </>
    )
}


export default Post;

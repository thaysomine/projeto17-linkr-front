import { Body, VerticalStack, HorizontalStack, Likes, ChangeArea, PostForm, Content, ConfirmBox, ConfirmCard, CheckAnswer, GoBackButton, ConfirmButton } from "./styles"
import { ProfPic, Image } from "../Navbar/styles"
import LinkSnippet from "./LinkSnippet"
import { useState, useEffect , useRef } from "react"
import ReactTooltip from 'react-tooltip';
import { ThreeDots } from "react-loader-spinner";
import axios from "axios"

function Post(props) {


   const { username, description, link, likesCount, imageUrl, hashtag } = props
    const [isLoading, setIsLoading] = useState(false);
    const [isLiked, setIsLiked] = useState(false)
    //const [likes, setLikes] = useState(0)
    const [editing, SetEditing] = useState(false)
    function performEdit() { SetEditing(!editing) }
    const [ListLikes, SetListLikes] = useState([])
    const [confirmDelete, SetConfirmDelete] = useState(false)
    const inputElement = useRef();
    const token = localStorage.getItem('linkr-user-token')



    function handleLike(like, postId) {
        
        // const promise = axios.post(`http://heroku-linkr-api.herokuapp.com/like/${postId}`,null
        const promise =  axios.post(`http://localhost:4000/like/${postId}`,null
          ,{
            headers: {
                // Authorization: `Bearer ${token}`
                Authorization: `Bearer 123`
            },
          }
        )
        
        promise.then((response)=>{
            if(!like){
                setLikes(likes + 1)
                console.log("curtiu")
            }else{ 
                setLikes(likes - 1)
                console.log("descurtiu")
            }
            
            setIsLiked(!like) 
        })
        promise.catch((err)=>{
            console.log(err)
        })
        }

    function likedByUser(postId) {
        if (token) {
            // const promise = axios.get(`http://heroku-linkr.herokuapp.com/liked/${postId}`, {
            const promise = axios.get(`http://localhost:4000/liked/${postId}`,{
                headers: {
                    // Authorization: `Bearer ${token}`
                    Authorization: `Bearer 123`
                }
            })
            
            promise.then((response) => {
                
                if (response.data[0]) {
                    setIsLiked(true)
                }
                else{
                    setIsLiked(false)
                }
            })
            promise.catch((err) => {
                console.log(err)
            })
        }
    }


    function LikeCount(postId){
        useEffect(() => {
            // const promise = axios.get(`http://heroku-linkr-api.herokuapp.com/likes/${postId}`)
            const promise = axios.get(`http://localhost:4000/likes/${postId}`)
            promise.then((response) => {
                
                setLikes(parseInt(response.data.count))
            })
            promise.catch((err) => {
                console.log(err)
            })
        }, [handleLike])
    }


    function Lista(postId){
        useEffect(() => {
        const promise = axios.get(`http://localhost:4000/names/${postId}`
        ,{
            headers: {
                // Authorization: `Bearer ${token}`
                Authorization: `Bearer 123`
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
    

    function performEdit(postId) {
        SetEditing(true)
        inputElement.current.focus()
    }


    function performDelete() { }

    

    return (
        <>
        {confirmDelete ?
                (
                    <ConfirmBox>
                        <ConfirmCard>

                            {isLoading ?
                                <>
                                    <p>Apagando...</p>
                                    <ThreeDots color="white" height={80} width={80}/> 
                                </>
                                :
                                <>
                                    <p>
                                        Deseja mesmo deletar este post?
                                    </p>
                                    <CheckAnswer>
                                        <GoBackButton onClick={() => { SetConfirmDelete(false) }}> Não</GoBackButton>
                                        <ConfirmButton onClick={() => {
                                            setIsLoading(true)
                                            performDelete()
                                        }}>
                                            Sim
                                        </ConfirmButton>
                                    </CheckAnswer>
                                </>
                            }
                        </ConfirmCard>

                    </ConfirmBox>

                ) : ("")
            }
        
        

        <Body>

            <VerticalStack margin={8}>
                <ProfPic>
                    <Image src={imageUrl}/>
                </ProfPic>
                <Likes isLiked={isLiked}>                                  
                    <ion-icon data-tip={ListLikes} name={`heart${isLiked ? '' : '-outline'}`}
                        onClick={() => handleLike(isLiked,1)}
                        />
                    {Lista(1)}
                    {likedByUser(1)}
                    {LikeCount(1)}

                    {`${likes} likes`}
                    <ReactTooltip type="info" effect="solid"/>

                </Likes>
            </VerticalStack>

            <VerticalStack width={100}>
                <HorizontalStack alignment="space-between">

                    {username}
                    <ChangeArea>
                        <ion-icon name="create-outline" onClick={() => performEdit()} />
                        <ion-icon name="trash-bin-outline" onClick={() => SetConfirmDelete(true)} />
                    </ChangeArea>
                </HorizontalStack>

                <HorizontalStack>
                    <PostForm>
                        <Content type="text"
                            placeholder={description}
                            value = {description}
                            name="post"
                            ref={inputElement}
                        />
                    </PostForm>
                </HorizontalStack>

                <HorizontalStack>
                    <LinkSnippet url = {link}/>
                </HorizontalStack>
            </VerticalStack>
        </Body>
        </>
    )

}

export default Post;

import { Body, VerticalStack, HorizontalStack, Likes, ChangeArea, PostForm, Content } from "./styles"
import { ProfPic, Image } from "../Navbar/styles"
import { useState, useEffect } from "react"
import { ReactTinyLink } from 'react-tiny-link'
import Tooltip from "react-tooltip";
import axios from "axios"

function Post(props) {

    const { userName, postContent, link, likesCount, imageUrl } = props;
    const [isLiked, setIsLiked] = useState(false)
    const [likes, setLikes] = useState(0)
    const [editing, SetEditing] = useState(false)
    const token = localStorage.getItem('linkr-user-token')


    function handleLike(like) {
        console.log(like)
        // const promise = axios.post(`http://heroku-linkr-api.herokuapp.com/like/${postId}`,null
        const promise =  axios.post(`http://localhost:4000/like/1`,null
          ,{
            headers: {
                // Authorization: `Bearer ${token}`
                Authorization: `Bearer 123`
            },
          }
        )
        console.log(promise)
        promise.then((response)=>{
            console.log(response)
            if(!like){
                setLikes(likes + 1)
                console.log("curtiu")
                }else{ 
                setLikes(likes - 1)
                console.log("descurtiu")
                }
            
        })
        promise.catch((err)=>{
            console.log(err)
        })
        setIsLiked(!like) }

    function likedByUser() {
        if (token) {
            // const promise = axios.get(`http://heroku-linkr.herokuapp.com/liked/${postId}`, {
            const promise = axios.get(`http://localhost:4000/liked/1`,{
                headers: {
                    // Authorization: `Bearer ${token}`
                    Authorization: `Bearer 123`
                }
            })
            console.log(promise)
            promise.then((response) => {
                console.log(response)
                if (response.data) {
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


    function LikeCount(){
        useEffect(() => {
            // const promise = axios.get(`http://heroku-linkr-api.herokuapp.com/likes/${postId}`)
            const promise = axios.get(`http://localhost:4000/likes/1`)
            promise.then((response) => {
                console.log(response)
                setLikes(parseInt(response.data.count))
            })
            promise.catch((err) => {
                console.log(err)
            })
        }, [handleLike])
    }


    function performEdit() { SetEditing(!editing) }
    function performDelete() { }

    return (
        <Body>
            <VerticalStack>
                <ProfPic>
                    <Image />
                </ProfPic>
                <Likes isLiked={isLiked}>
                    <ion-icon name={`heart${isLiked ? '' : '-outline'}`}
                        onClick={() => handleLike(isLiked)} />
                    {likedByUser()}
                    {LikeCount()}
                    {`${likes} likes`}
                </Likes>
            </VerticalStack>

            <VerticalStack width={100}>
                <HorizontalStack alignment="space-between">
                    {userName}
                    <ChangeArea>
                        <ion-icon
                            name="create-outline"
                            onClick={() => performEdit()}
                        />
                        <ion-icon
                            name="trash-bin-outline"
                            onClick={() => performDelete()}
                        />
                    </ChangeArea>
                </HorizontalStack>

                <HorizontalStack>
                    <PostForm>
                        <Content
                            type="text"
                            placeholder="User text here"
                            name="post"
                            editing={editing}
                        />
                    </PostForm>
                </HorizontalStack>

                <HorizontalStack>
                    <ReactTinyLink
                        cardSize="small"
                        showGraphic={true}
                        maxLine={2}
                        minLine={1}
                        url="https://www.amazon.com/Steve-Madden-Mens-Jagwar-10-5/dp/B016X44MKA/ref=lp_18637582011_1_1?srs=18637582011&ie=UTF8&qid=1550721409&sr=8-1"
                    />
                </HorizontalStack>
            </VerticalStack>
        </Body>
    );
}

export default Post;

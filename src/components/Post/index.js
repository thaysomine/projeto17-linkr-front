import { Body, VerticalStack, HorizontalStack, Likes, ChangeArea, PostForm, Content } from "./styles"
import { ProfPic, Image } from "../Navbar/styles"
import { useState } from "react"
import LinkSnippet from "./LinkSnippet"

function Post(props) {

    const { username, description, link, likesCount, imageUrl, hashtag } = props
    const [isLiked, setIsLiked] = useState(false)
    //const [likes, setLikes] = useState(0)
    const [editing, SetEditing] = useState(false)
    function handleLike(like) { 
        setIsLiked(!like) 
    }
    function performEdit() { SetEditing(!editing) }
    function performDelete() { }

    return (
        <Body>
            <VerticalStack margin={8}>
                <ProfPic>
                    <Image src={imageUrl}/>
                </ProfPic>
                <Likes isLiked={isLiked}>
                    <ion-icon name={`heart${isLiked ? '' : '-outline'}`}
                        onClick={() => handleLike(isLiked)} />
                    {`${likesCount} likes`}
                </Likes>
            </VerticalStack>


            <VerticalStack width={100}>
                <HorizontalStack alignment="space-between">
                    {username}
                    <ChangeArea>
                        <ion-icon name="create-outline" onClick={() => performEdit()} />
                        <ion-icon name="trash-bin-outline" onClick={() => performDelete()} />
                    </ChangeArea>
                </HorizontalStack>

                <HorizontalStack>
                    <PostForm>
                        <Content type="text"
                            placeholder={description}
                            value = {description}
                            name="post"
                            editing={editing}
                        />
                    </PostForm>
                </HorizontalStack>

                <HorizontalStack>
                    <LinkSnippet url = {link}/>
                </HorizontalStack>
            </VerticalStack>

        </Body>
    )
}

export default Post